import { cn } from "@/lib/utils";

export function DashboardContainer({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16", className)} {...props}>
      {children}
    </div>
  );
}
