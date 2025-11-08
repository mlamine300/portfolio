import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "block w-full min-h-16 rounded-md border bg-transparent px-3 py-2 text-sm resize-none box-border",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
