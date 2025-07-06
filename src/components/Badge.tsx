"use client";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

type badgeProps = {
  containerStyles?: string;
  icon?: React.ReactNode;
  keyStyle?: string;
  valueStyle?: string;
  keyName: string;
  value: number;
  duration: number;
  step: number;
};
const Badge = ({
  containerStyles,
  icon,
  keyName,
  keyStyle,
  value,
  valueStyle,
  duration,
  step,
}: badgeProps) => {
  const [paintedValue, setPaintedValue] = React.useState<number>(0);
  const flop = (duration * step) / value;
  useEffect(() => {
    const interval = setInterval(() => {
      if (paintedValue < value) {
        setPaintedValue((prev) => prev + step);
      } else {
        setPaintedValue(value);
        clearInterval(interval);
      }
    }, flop);
    return () => clearInterval(interval);
  });

  return (
    <section
      className={twMerge(
        "flex items-center gap-2 justify-center  bg-background rounded-lg p-5 ",
        containerStyles
      )}
    >
      {icon && <span className="text-2xl">{icon}</span>}

      <span className={twMerge("text-sm text-muted-foreground", valueStyle)}>
        {getDecimal(paintedValue)}
      </span>
      <span className={twMerge("text-sm font-bold", keyStyle)}>{keyName}</span>
    </section>
  );
};

const getDecimal = (num: number) => {
  //console.log((num * 10) % 10);
  if ((num * 10) % 10 < 1) return num.toFixed(0);
  return num.toFixed(1);
};

export default Badge;
