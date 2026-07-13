import Link from 'next/link'
import { logout } from '@/app/admin/login/actions'
import { BrandLogo } from '@/components/shared/BrandLogo'

export const metadata = {
  title: 'Unauthorized | AIToolsHaven',
}

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center font-sans px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 text-center">
        <div className="flex flex-col items-center mb-6">
          <BrandLogo size={1} layout="icon" />
          <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-6">Access Denied</h1>
          <p className="text-slate-500 text-sm mt-2">
            Your account does not have the required permissions to access the Editorial OS.
          </p>
        </div>

        <form action={logout} className="mt-8">
          <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition-all">
            Sign out and try another account
          </button>
        </form>
        
        <div className="mt-6">
          <Link href="/" className="text-sm text-primary hover:underline font-medium">
            Return to Public Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
