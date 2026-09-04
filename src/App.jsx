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
const CotorraViajes = lazy(() => import('./pages/CotorraViajes'))
const CotorraViajesDestinos = lazy(() => import('./pages/CotorraViajesDestinos'))
const CotorraViajesCatalogo = lazy(() => import('./pages/CotorraViajesCatalogo'))
const MonakusInicio = lazy(() => import('./pages/MonakusInicio'))
const MonakusPresentacion = lazy(() => import('./pages/MonakusPresentacion'))
const MonakusInstalaciones = lazy(() => import('./pages/MonakusInstalaciones'))
const MonakusBasica = lazy(() => import('./pages/MonakusBasica'))
const MonakusAvanzada = lazy(() => import('./pages/MonakusAvanzada'))
const MonakusMastrell = lazy(() => import('./pages/MonakusMastrell'))
const MonakusMatriculacion = lazy(() => import('./pages/MonakusMatriculacion'))
const MonakusMaterial = lazy(() => import('./pages/MonakusMaterial'))
const MonakusContacto = lazy(() => import('./pages/MonakusContacto'))

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
        <Route path="/ocio/cotorraviajes/catalogo" element={<CotorraViajesCatalogo />} />
        <Route path="/ocio/cotorraviajes/destinos" element={<CotorraViajesDestinos />} />
        <Route path="/ocio/cotorraviajes" element={<CotorraViajes />} />
        <Route path="/ocio/escuela-monakus/oferta/basica" element={<MonakusBasica />} />
        <Route path="/ocio/escuela-monakus/oferta/avanzada" element={<MonakusAvanzada />} />
        <Route path="/ocio/escuela-monakus/oferta/mastrell" element={<MonakusMastrell />} />
        <Route path="/ocio/escuela-monakus/presentacion" element={<MonakusPresentacion />} />
        <Route path="/ocio/escuela-monakus/instalaciones" element={<MonakusInstalaciones />} />
        <Route path="/ocio/escuela-monakus/matriculacion" element={<MonakusMatriculacion />} />
        <Route path="/ocio/escuela-monakus/material" element={<MonakusMaterial />} />
        <Route path="/ocio/escuela-monakus/contacto" element={<MonakusContacto />} />
        <Route path="/ocio/escuela-monakus" element={<MonakusInicio />} />
      </Routes>
    </Suspense>
  )
}