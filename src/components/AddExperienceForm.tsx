"use client";
import React, { useRef } from "react";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Experience, ExperienceSchema } from "./admin/UserInformationForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import FormItem from "./admin/FormItem";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

function AddExperienceForm({
  addFunction,
}: {
  addFunction: (exp: Experience) => void;
}) {
  const close = useRef<HTMLButtonElement>(null);
  const form = useForm<z.infer<typeof ExperienceSchema>>({
    resolver: zodResolver(ExperienceSchema),
    defaultValues: {
      company: "",
      title: "",
      start: new Date(),
      end: new Date(),
    },
  });

  return (
    <SheetContent>
      <SheetHeader>
        <div className="flex">
          <SheetTitle className="text-2xl font-semibold w-full">
            Add Experience
          </SheetTitle>
        </div>
      </SheetHeader>
      <Form {...form}>
        <form className="p-10 flex flex-col gap-8">
          <FormItem control={form.control} name="company" />
          <FormItem control={form.control} name="title" />
          <FormItem
            label="Start Date"
            type="date"
            control={form.control}
            name="start"
          />
          <FormItem
            label="End Date"
            type="date"
            control={form.control}
            name="end"
            className="w-full"
          />

          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              form.trigger();
              const values = ExperienceSchema.safeParse(form.getValues());
              if (values.success) {
                addFunction(values.data);
                form.reset();
                if (close.current) close.current.click();
              }
            }}
            className="w-full"
          >
            Add <Plus />{" "}
          </Button>
        </form>
      </Form>
      <SheetFooter>
        <SheetClose
          className="text-muted-foreground py-1 cursor-pointer font-semibold  rounded-xl border border-primary"
          type="button"
          ref={close}
        >
          Close
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}

export default AddExperienceForm;
