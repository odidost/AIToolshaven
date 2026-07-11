import { cn } from "@/lib/utils";

interface ContentContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function ContentContainer({ className, children, as: Component = "div", ...props }: ContentContainerProps) {
  return (
    <Component className={cn("w-full max-w-[960px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16", className)} {...props}>
      {children}
    </Component>
  );
}
