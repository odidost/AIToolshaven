import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function PageContainer({ className, children, as: Component = "div", ...props }: PageContainerProps) {
  return (
    <Component className={cn("w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16", className)} {...props}>
      {children}
    </Component>
  );
}
