import Link from "next/link"
import { login } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const resolvedParams = await searchParams;
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
          Welcome back
        </h1>
        <p className="text-sm text-on-surface-variant">
          Enter your email to sign in to your account
        </p>
      </div>
      
      <div className="grid gap-6">
        <form action={login}>
          <div className="grid gap-4">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            {resolvedParams?.message && (
              <p className="text-sm text-red-500 font-medium text-center">
                {resolvedParams.message}
              </p>
            )}
            <Button className="w-full mt-2" type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </div>

      <p className="px-8 text-center text-sm text-on-surface-variant">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign up
        </Link>
      </p>
    </>
  )
}
