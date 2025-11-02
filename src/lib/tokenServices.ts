// tokenService.ts
let accessToken: string | null = null;

export const tokenService = {
  getToken: () => accessToken,
  setToken: (token: string) => (accessToken = token),
};
