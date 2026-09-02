import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Glosario from './pages/Glosario'

const Avance = lazy(() => import('./pages/Avance'))
const Proyecto = lazy(() => import('./pages/Proyecto'))
const Login = lazy(() => import('./pages/Login'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Juegos = lazy(() => import('./pages/Juegos'))
const Hopper = lazy(() => import('./pages/Hopper'))

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
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/juegos/quiz" element={<Quiz />} />
          <Route path="/juegos/hopper" element={<Hopper />} />
        </Route>
      </Routes>
    </Suspense>
  )
}