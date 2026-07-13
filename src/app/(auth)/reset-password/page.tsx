import Link from "next/link"
import { resetPassword } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const resolvedParams = await searchParams;
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
          Set new password
        </h1>
        <p className="text-sm text-on-surface-variant">
          Enter your new password below
        </p>
      </div>
      
      <div className="grid gap-6">
        <form action={resetPassword}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">New Password</Label>
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
              Update Password
            </Button>
          </div>
        </form>
      </div>

      <p className="px-8 text-center text-sm text-on-surface-variant">
        Return to{" "}
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
