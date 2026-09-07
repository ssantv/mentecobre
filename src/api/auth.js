// Capa de API: replica los endpoints de la API real (Django REST + SimpleJWT)
//   POST /api/auth/login/          username + password  -> { access, refresh }
//   GET  /api/v1/users/me/         cabecera Bearer      -> usuario (UserSerializer)
//
// Definir VITE_API_URL apunta a la API real; sin ella se sirven respuestas
// simuladas con la MISMA forma, para poder desarrollar el front antes de que
// el backend esté levantado. Intercambiar una por otra no toca el AuthProvider.
//
// En modo mock el catálogo de usuarios sale de la capa de servicios (usersSv,
// sembrada desde src/data/contracts/users.json): el front y el login comparten
// la misma tabla. Las contraseñas provisionales viven aparte en mockUsers.js.
import { usersSv } from './index'
import { MOCK_CREDENCIALES } from '../auth/mockUsers'

const API_URL = import.meta.env.VITE_API_URL || null

function esperar(ms = 400) {
  return new Promise((resolver) => setTimeout(resolver, ms))
}

// ---------- POST /api/auth/login/ ----------

async function loginReal(username, password) {
  const res = await fetch(`${API_URL}/api/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  if (!res.ok) {
    throw new Error('Usuario o contraseña incorrectos')
  }
  const cuerpo = await res.json()
  return { access: cuerpo.access, refresh: cuerpo.refresh }
}

// ---------- GET /api/v1/users/me/ ----------

async function meReal(access) {
  const res = await fetch(`${API_URL}/api/v1/users/me/`, {
    headers: { Authorization: `Bearer ${access}` },
  })
  if (!res.ok) {
    throw new Error('La sesión no es válida')
  }
  return res.json()
}

// ---------- API pública ----------

export async function login(username, password) {
  if (API_URL) return loginReal(username, password)

  await esperar()
  const usuarios = await usersSv.listar()
  const usuario = usuarios.find((u) => u.username === username)
  if (!usuario || MOCK_CREDENCIALES[username] !== password) {
    throw new Error('Usuario o contraseña incorrectos')
  }
  return {
    access: `mock-access-${usuario.id}`,
    refresh: `mock-refresh-${usuario.id}`,
  }
}

export async function me(access) {
  if (API_URL) return meReal(access)

  await esperar()
  const id = Number(String(access).replace('mock-access-', ''))
  const usuarios = await usersSv.listar()
  const usuario = usuarios.find((u) => u.id === id)
  if (!usuario) throw new Error('La sesión no es válida')
  return usuario
}