'use client'

import { useState, useTransition } from 'react'
import { updateUserRole } from '@/app/actions/admin'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'

export function UsersTable({ initialUsers }: { initialUsers: any[] }) {
  const [users, setUsers] = useState(initialUsers)
  const [isPending, startTransition] = useTransition()

  const handleRoleChange = (id: string, newRole: string) => {
    startTransition(async () => {
      const result = await updateUserRole(id, newRole)
      if (result.error) {
        toast.error(result.error)
      } else {
        setUsers(users.map(u => u.id === id ? { ...u, role: newRole } : u))
        toast.success(`Role updated to ${newRole}`)
      }
    })
  }

  if (users.length === 0) {
    return <div className="p-8 text-center text-on-surface-variant">No users found.</div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-on-surface-variant uppercase bg-surface-container/50 border-b border-outline">
          <tr>
            <th className="px-6 py-4 font-medium">Username</th>
            <th className="px-6 py-4 font-medium">Joined</th>
            <th className="px-6 py-4 font-medium">Reviews</th>
            <th className="px-6 py-4 font-medium">Bookmarks</th>
            <th className="px-6 py-4 font-medium">Role</th>
            <th className="px-6 py-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-surface-container/30 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold overflow-hidden">
                  {user.avatar_url ? (
                    <img src={user.avatar_url} alt={user.username} className="w-full h-full object-cover" />
                  ) : (
                    user.username?.substring(0, 2) || 'U'
                  )}
                </div>
                <div className="font-medium text-on-surface">{user.username || 'Anonymous'}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-on-surface-variant">{new Date(user.created_at).toLocaleDateString()}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.total_reviews}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.total_bookmarks}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge variant={
                  user.role === 'super_admin' ? 'default' :
                  user.role === 'admin' ? 'default' :
                  user.role === 'editor' ? 'secondary' : 'outline'
                }>
                  {user.role}
                </Badge>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <select
                  disabled={isPending || user.role === 'super_admin'}
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="bg-white border border-border/50 rounded-lg px-2 py-1 text-xs font-medium text-on-surface focus:outline-none focus:border-primary"
                >
                  <option value="user">User</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
