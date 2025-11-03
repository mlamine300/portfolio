"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { formatDate } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateOfBirthPicker({
  date,
  setDate,
  disabled,
}: {
  date: Date;
  setDate: (date: Date | undefined) => void;
  disabled: boolean | undefined;
}) {
  const [open, setOpen] = React.useState(false);
  // const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal bg-accent"
          >
            {date ? formatDate(date, "yyyy-MM-dd") : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            disabled={disabled}
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
