import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function PageContainer({ className, children, as: Component = "div", ...props }: PageContainerProps) {
  return (
    <Component className={cn("w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12", className)} {...props}>
      {children}
    </Component>
  );
}
