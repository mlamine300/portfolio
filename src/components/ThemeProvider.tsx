/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { useTheme } from "next-themes";
const ThemeProvider = ({
  children,
  ...Props
}: {
  children: ReactNode;
  Props: Record<string, any>;
}) => {
  return <NextThemesProvider {...Props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
