import Link from "next/link"
import { forgotPassword } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const resolvedParams = await searchParams;
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
          Reset password
        </h1>
        <p className="text-sm text-on-surface-variant">
          Enter your email to receive a password reset link
        </p>
      </div>
      
      <div className="grid gap-6">
        <form action={forgotPassword}>
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
            
            {resolvedParams?.message && (
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-md">
                <p className={`text-sm font-medium text-center ${resolvedParams.message.includes('Check email') ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}>
                  {resolvedParams.message}
                </p>
              </div>
            )}
            
            <Button className="w-full mt-2" type="submit">
              Send Reset Link
            </Button>
          </div>
        </form>
      </div>

      <p className="px-8 text-center text-sm text-on-surface-variant">
        Remember your password?{" "}
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
