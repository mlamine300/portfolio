/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/Logo.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  //   FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { tokenService } from "@/lib/tokenServices";
const SignInPage = () => {
  const [authError, setAuthError] = useState("");
  const { replace } = useRouter();
  const signInformSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "password must contain more then 8 charactere"),
  });
  const form = useForm<z.infer<typeof signInformSchema>>({
    resolver: zodResolver(signInformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const signIn = async (data: { email: string; password: string }) => {
    const { email, password } = data;
    if (!email || !password) {
      return;
    }
    setAuthError("");
    try {
      //const res = await axiosInstance.get("/user");

      const res = await axiosInstance.post("/auth/login", { email, password });
      console.log(res);
      tokenService.setToken(res.data.token);
      replace("/admin");
    } catch (error) {
      const axioserror = error as AxiosError;
      console.error(error);

      const message =
        (axioserror.response?.data as any).message ||
        axioserror.message ||
        "server error";
      console.log(message);
      setAuthError(message);
      throw new Error(message);
    }
  };
  return (
    <div className="flex justify-center items-center bg-background min-h-[90svh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(signIn)}
          className="space-y-4 max-w-lg mx-auto flex flex-col w-10/12 m-2 md:w-96 bg-accent rounded-2xl shadow-2xl p-5"
        >
          <div className="flex flex-col items-center">
            <Image
              width={300}
              height={300}
              src={logo}
              alt="logo"
              className="w-20 h-20"
            />
            <h3 className="text-2xl font-semibold">Sign in</h3>
            <p className="text-muted-foreground">
              {" "}
              to continue to your account
            </p>
          </div>

          <FormField
            key={"email"}
            control={form.control}
            name={"email"}
            render={({ field: rhfField }) => (
              <FormItem>
                {/* <FormLabel>{field.label}</FormLabel> */}
                <FormControl>
                  <Input type="email" placeholder="Email" {...rhfField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            key={"password"}
            control={form.control}
            name={"password"}
            render={({ field: rhfField }) => (
              <FormItem>
                {/* <FormLabel>{field.label}</FormLabel> */}
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...rhfField}
                    onChange={(e) => {
                      rhfField.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex items-center justify-center mt-5">
            <Button type="submit" className="px-6 py-2 text-xl">
              Log in
            </Button>
          </div>

          <h4 className="italic text-red-500 text-sm font-semibold text-center w-full">
            {authError}
          </h4>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
