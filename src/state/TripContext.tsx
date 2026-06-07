import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Trip = {
  who: string
  date: string
  time: string
  place: string
  duration: string
  mode: 'interact' | 'observe' | null
}

const empty: Trip = { who: '', date: '', time: '', place: '', duration: '', mode: null }

type Ctx = {
  trip: Trip
  setField: (k: keyof Trip, v: Trip[keyof Trip]) => void
  reset: () => void
}

const TripCtx = createContext<Ctx | null>(null)

export function TripProvider({ children }: { children: ReactNode }) {
  const [trip, setTrip] = useState<Trip>(empty)
  const setField: Ctx['setField'] = (k, v) => setTrip((t) => ({ ...t, [k]: v }))
  const reset = () => setTrip(empty)
  return <TripCtx.Provider value={{ trip, setField, reset }}>{children}</TripCtx.Provider>
}

export function useTrip() {
  const ctx = useContext(TripCtx)
  if (!ctx) throw new Error('useTrip must be used inside <TripProvider>')
  return ctx
}
