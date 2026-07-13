import { login } from './actions'
import { BrandLogo } from '@/components/shared/BrandLogo'

export const metadata = {
  title: 'Admin Login | AIToolsHaven',
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const resolvedParams = await searchParams;
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center font-sans px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <BrandLogo size={1} layout="icon" />
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-4">Editorial OS</h1>
          <p className="text-slate-500 text-sm mt-1">Sign in to manage AIToolsHaven.</p>
        </div>

        <form action={login} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-semibold text-slate-700 flex justify-between">
              Password
              <a href="#" className="text-primary hover:underline text-xs font-medium">Forgot?</a>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Sign In
          </button>

          {resolvedParams?.message && (
            <div className="mt-4 p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium border border-red-100 text-center">
              {resolvedParams.message}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
