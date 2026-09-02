import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Glosario from './pages/Glosario'

const Avance = lazy(() => import('./pages/Avance'))
const Proyecto = lazy(() => import('./pages/Proyecto'))
const Login = lazy(() => import('./pages/Login'))
const Ayuda = lazy(() => import('./pages/Ayuda'))
const Perfil = lazy(() => import('./pages/Perfil'))
const Traduccion = lazy(() => import('./pages/Traduccion'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Juegos = lazy(() => import('./pages/Juegos'))
const Hopper = lazy(() => import('./pages/Hopper'))
const OcioDetalle = lazy(() => import('./pages/OcioDetalle'))

export default function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--on-surface-variant)',
          }}
        >
          Cargando…
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/glosario" element={<Glosario />} />
          <Route path="/avance" element={<Avance />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/traduccion" element={<Traduccion />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/juegos/quiz" element={<Quiz />} />
          <Route path="/juegos/hopper" element={<Hopper />} />
          <Route path="/juegos/:slug" element={<OcioDetalle />} />
        </Route>
      </Routes>
    </Suspense>
  )
}