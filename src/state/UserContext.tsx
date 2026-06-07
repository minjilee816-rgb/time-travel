import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type User = {
  name: string
  email: string
}

type Ctx = {
  user: User
  setUser: (patch: Partial<User>) => void
}

const UserCtx = createContext<Ctx | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User>({ name: '', email: '' })
  const setUser: Ctx['setUser'] = (patch) => setUserState((u) => ({ ...u, ...patch }))
  return <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>
}

export function useUser() {
  const ctx = useContext(UserCtx)
  if (!ctx) throw new Error('useUser must be used inside <UserProvider>')
  return ctx
}

export function firstName(name: string): string {
  const trimmed = name.trim()
  if (!trimmed) return ''
  return trimmed.split(/\s+/)[0]
}
