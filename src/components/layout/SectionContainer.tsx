import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function SectionContainer({ className, children, as: Component = "section", ...props }: SectionContainerProps) {
  return (
    <Component className={cn("py-20 md:py-24", className)} {...props}>
      {children}
    </Component>
  );
}
