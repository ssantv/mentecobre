import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Glosario from './pages/Glosario'

const Avance = lazy(() => import('./pages/Avance'))
const Proyecto = lazy(() => import('./pages/Proyecto'))
const Login = lazy(() => import('./pages/Login'))
const Ayuda = lazy(() => import('./pages/Ayuda'))
const AyudaArticulo = lazy(() => import('./pages/AyudaArticulo'))
const AyudaGrupo = lazy(() => import('./pages/AyudaGrupo'))
const Perfil = lazy(() => import('./pages/Perfil'))
const Traduccion = lazy(() => import('./pages/Traduccion'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Juegos = lazy(() => import('./pages/Juegos'))
const Hopper = lazy(() => import('./pages/Hopper'))
const OcioDetalle = lazy(() => import('./pages/OcioDetalle'))
const Desolancicos = lazy(() => import('./pages/Desolancicos'))
const Pasatiempos = lazy(() => import('./pages/Pasatiempos'))
const Metaldoku = lazy(() => import('./pages/Metaldoku'))
const OjoDespertante = lazy(() => import('./pages/OjoDespertante'))
const CopperNews = lazy(() => import('./pages/CopperNews'))
const CopperRedaccion = lazy(() => import('./pages/CopperRedaccion'))
const CopperEdiciones = lazy(() => import('./pages/CopperEdiciones'))
const CopperEdicion = lazy(() => import('./pages/CopperEdicion'))

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
          <Route path="/ayuda/dudas" element={<AyudaGrupo />} />
          <Route path="/ayuda/recursos" element={<AyudaGrupo />} />
          <Route path="/ayuda/:grupo/:slug" element={<AyudaArticulo />} />
          <Route path="/ayuda/:slug" element={<AyudaArticulo />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/traduccion" element={<Traduccion />} />
          <Route path="/ocio" element={<Juegos />} />
          <Route path="/ocio/quiz" element={<Quiz />} />
          <Route path="/ocio/hopper" element={<Hopper />} />
          <Route path="/ocio/desolancicos" element={<Desolancicos />} />
          <Route path="/ocio/pasatiempos/ojo-despertante" element={<OjoDespertante />} />
          <Route path="/ocio/pasatiempos/metaldoku" element={<Metaldoku />} />
          <Route path="/ocio/pasatiempos" element={<Pasatiempos />} />
          <Route path="/ocio/:slug" element={<OcioDetalle />} />
        </Route>

        <Route path="/ocio/coppernews/ediciones/:edicion" element={<CopperEdicion />} />
        <Route path="/ocio/coppernews/ediciones" element={<CopperEdiciones />} />
        <Route path="/ocio/coppernews/la-redaccion" element={<CopperRedaccion />} />
        <Route path="/ocio/coppernews" element={<CopperNews />} />
      </Routes>
    </Suspense>
  )
}