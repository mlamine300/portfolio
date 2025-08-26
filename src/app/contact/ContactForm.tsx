/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldPath, useForm } from "react-hook-form";
import { z } from "zod";
import {
  HiUser,
  HiEnvelope,
  HiMiniChatBubbleBottomCenterText,
} from "react-icons/hi2";
import {
  Form,
  FormControl,
  FormDescription,
  //   FormLabel,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
const ContactForm = () => {
  const formFields = [
    {
      name: "name",
      label: "Name",
      inputtype: "text",
      placeholder: "Your Name",
      //   description: "Please enter your full name.",
      icon: <HiUser className="w-6 h-6  text-primary dark:text-foreground" />,
    },
    {
      name: "email",
      label: "Email",
      inputtype: "email",
      placeholder: "email",
      //   description: "Please enter your email address.",
      icon: (
        <HiEnvelope className="w-6 h-6  text-primary dark:text-foreground" />
      ),
    },
    {
      name: "message",
      label: "Message",
      inputtype: "textarea",
      placeholder: "Your Message",
      description: "Please enter your message.",
      icon: (
        <HiMiniChatBubbleBottomCenterText className="w-6 h-6  text-primary dark:text-foreground" />
      ),
    },
  ];

  const ContactFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: z.infer<typeof ContactFormSchema>) => {
    console.log(data);
  };

  const CustomFormField = ({
    name,
    // label,
    inputtype,
    placeholder,
    description,
    formcontrol,
    icon,
  }: CustomFormFieldProps) => {
    return (
      <FormField
        control={formcontrol}
        name={name!}
        render={({ field }) => (
          <FormItem className="w-full">
            {/* <FormLabel>{label}</FormLabel> */}
            <FormControl>
              <div className="relative flex">
                {inputtype === "textarea" ? (
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-accent focus:outline-none focus:ring-2 focus:ring-primary "
                    placeholder={placeholder}
                    {...field}
                  />
                ) : (
                  <input
                    type={inputtype}
                    className="rounded-xl bg-accent w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary "
                    placeholder={placeholder}
                    {...field}
                  />
                )}
                <span className=" absolute flex items-center justify-center w-5 h-full  right-4 top-0">
                  {icon}
                </span>
              </div>
            </FormControl>
            {description && (
              <FormDescription className="text-sm text-gray-500">
                {description}
              </FormDescription>
            )}
            <FormMessage className="text-sm text-red-500" />
          </FormItem>
        )}
      />
    );
  };

  return (
    <Form {...form}>
      📩
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-lg mx-auto"
      >
        <h2 className="text-4xl italic pl-8 font-semibold text-primary text-center xl:text-start">
          Get in Touch!
        </h2>
        {formFields.map((field) => (
          <CustomFormField
            key={field.name}
            name={field.name as FieldPath<z.infer<typeof ContactFormSchema>>}
            label={field.label}
            inputtype={field.inputtype}
            placeholder={field.placeholder}
            description={field.description}
            formcontrol={form.control}
            icon={field.icon}
          />
        ))}
        <div className="w-full flex items-center justify-center xl:justify-start">
          <Button
            type="submit"

            //   className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact me!
          </Button>
        </div>
      </form>
    </Form>
  );

  interface CustomFormFieldProps {
    name?: FieldPath<z.infer<typeof ContactFormSchema>>;
    label: string;
    inputtype: string | "text";
    placeholder?: string;
    description?: string;
    formcontrol: Control<z.infer<typeof ContactFormSchema>, any>;
    icon: React.ReactNode;
  }
};
export default ContactForm;
