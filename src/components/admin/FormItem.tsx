/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  FormControl,
  FormField,
  FormItem as FI,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { DatePicker } from "../DateOfBirthPicker";

const FormItem = ({
  control,
  name,
  label,
  value,
  onChange,
  className,
  labelClassName,
  inputClassName,
  type,
}: {
  control: any;
  name: string;
  label?: string;
  value?: any;
  onChange?: any;
  labelClassName?: string;
  inputClassName?: string;
  className?: string;
  type?: "text" | "area" | "date";
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FI
          className={cn(
            "w-full",
            className,
            name === "dateOfBirth" &&
              "flex flex-row md:flex-col justify-between"
          )}
        >
          {
            <FormLabel className={cn("capitalize", labelClassName)}>
              {label || name}
            </FormLabel>
          }
          <FormControl>
            <div className="relative flex">
              {type === "area" ? (
                <Textarea
                  value={value || field.value}
                  onChange={onChange || field.onChange}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  ref={field.ref}
                  className={cn(
                    " rounded-xl bg-accent w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary ",
                    inputClassName
                  )}
                />
              ) : type === "date" ? (
                <DatePicker
                  date={value || field.value}
                  setDate={(date) => field.onChange(date)}
                  disabled={field.disabled}
                />
              ) : (
                <Input
                  value={value || field.value}
                  onChange={onChange || field.onChange}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  ref={field.ref}
                  type={"text"}
                  className={cn(
                    "text-sm md:text-lg rounded-xl bg-accent w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary ",
                    inputClassName
                  )}
                />
              )}
            </div>
          </FormControl>

          <FormMessage className="text-sm text-red-500" />
        </FI>
      )}
    />
  );
};

export default FormItem;
