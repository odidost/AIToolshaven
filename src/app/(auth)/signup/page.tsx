import Link from "next/link"
import { signup } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const resolvedParams = await searchParams;
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
          Create an account
        </h1>
        <p className="text-sm text-on-surface-variant">
          Enter your email below to create your account
        </p>
      </div>
      
      <div className="grid gap-6">
        <form action={signup}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="johndoe"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            
            {resolvedParams?.message && (
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-md">
                <p className={`text-sm font-medium text-center ${resolvedParams.message.includes('Check email') ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}>
                  {resolvedParams.message}
                </p>
              </div>
            )}
            
            <Button className="w-full mt-2" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </div>

      <p className="px-8 text-center text-sm text-on-surface-variant">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <p className="px-8 text-center text-sm text-on-surface-variant mt-4">
        Already have an account?{" "}
        <Link
          href="/login"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign in
        </Link>
      </p>
    </>
  )
}
