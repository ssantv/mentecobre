import { useState, useCallback, useEffect, useMemo } from 'react'
import { AuthContext } from './authContext'
import { MOCK_USERS } from './mockUsers'

const STORAGE_KEY = 'mentecobre.session'

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredUser())

  const loginAs = useCallback((userId) => {
    const found = MOCK_USERS.find((u) => u.id === userId)
    if (!found) return false
    setUser(found)
    return true
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [user])

  const value = useMemo(
    () => ({ user, loginAs, logout }),
    [user, loginAs, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}