/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import { tokenService } from "./tokenServices";

let isRefreshing = false;
let failedQueue: any[] = [];
const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom) =>
    error ? prom.reject(error) : prom.resolve(token)
  );
  failedQueue = [];
};

const axiosInstance = axios.create({
  baseURL: process.env.API_ENDPOINT || "http://localhost:5000",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = tokenService.getToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err: AxiosError) => {
    if (err.response) {
      // if ((err.response.data as any)?.message === "Access token expired")
      if (err.status === 461) {
        console.log("---------------------");
        refreshToken(err);
      } else if (err.status === 462) {
        window.location.href = "/admin/login";
      } else if (err.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (err.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;

const refreshToken = async (err: any) => {
  const originalReq = err.config;
  console.log("refreshing");
  if (err.response && err.response.status === 461 && !originalReq._retry) {
    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      }).then((token) => {
        originalReq.headers["Authorization"] = "Bearer " + token;
        return axiosInstance(originalReq);
      });
    }
    originalReq._retry = true;
    isRefreshing = true;
    //console.log("refresh start....");
    try {
      const res = await axiosInstance.post(
        "/auth/refresh",
        {},
        {
          withCredentials: true,
        }
      );
      const newToken = res.data.accessToken;
      axiosInstance.defaults.headers.common["Authorization"] =
        "Bearer " + newToken;
      processQueue(null, newToken);
      tokenService.setToken(newToken);
      // localStorage.setItem("token", newToken);
      // console.log("refresh end");
      return axiosInstance(originalReq);
    } catch (e) {
      processQueue(e, null);
      throw e;
    } finally {
      isRefreshing = false;
    }
  }
};
