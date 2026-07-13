import { Metadata } from "next"
import Link from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Authentication | AIToolsHaven",
  description: "Sign in or create an account to bookmark tools and leave reviews.",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container relative min-h-[calc(100vh-200px)] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 mt-8 mb-16 rounded-3xl overflow-hidden border border-border shadow-sm">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <span className="material-symbols-outlined mr-2">auto_awesome</span>
          AIToolsHaven
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This platform has saved me countless hours. Now I can organize all my favorite AI tools in one place and share my reviews with the community.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis, Developer</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8 bg-surface-elevated flex items-center justify-center p-8 h-full">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
        </div>
      </div>
    </div>
  )
}
