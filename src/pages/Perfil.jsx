import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { ROLES_LABEL } from '../auth/mockUsers'

export default function Perfil() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mostrarPw, setMostrarPw] = useState(false)
  const [tab, setTab] = useState('traducido')

  if (!user) {
    return (
      <div>
        <header className="page-header">
          <span className="accent-bar"></span>
          <div>
            <h1 className="page-title">Mi perfil</h1>
          </div>
        </header>
        <div className="glass-panel login-card">
          <span className="material-symbols-outlined login-icon">
            account_circle
          </span>
          <h2 className="login-title">No has iniciado sesión</h2>
          <p className="login-text">Inicia sesión para ver tu perfil.</p>
          <Link className="btn btn-primary btn-lg" to="/login">
            Iniciar sesión
          </Link>
        </div>
      </div>
    )
  }

  function handleLogout() {
    logout()
    navigate('/')
  }

  const articulos = user.articulos ?? []
  const esTraductor = user.role === 'traductor'
  const estadoActivo = esTraductor ? 'traducido' : tab
  const visibles = articulos.filter((a) => a.estado === estadoActivo)
  const total = visibles.length

  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Mi perfil</h1>
          <p className="page-sub">Tus datos y acceso dentro de la Mentecobre.</p>
        </div>
      </header>

      <div className="perfil-layout">
        <section className="glass-panel perfil-col">
          <div className="perfil-header">
            <div className="perfil-avatar">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="perfil-heading">
              <h2 className="perfil-name">{user.name}</h2>
              <span className="perfil-role">{ROLES_LABEL[user.role]}</span>
            </div>
          </div>

          {user.fechaAlta && (
            <dl className="perfil-list">
              <div className="perfil-row">
                <dt>Colaborando desde</dt>
                <dd>{formatearFecha(user.fechaAlta)}</dd>
              </div>
            </dl>
          )}

          <div className="perfil-acciones">
            <button
              type="button"
              className={`btn btn-ghost${mostrarPw ? ' activo' : ''}`}
              onClick={() => setMostrarPw((v) => !v)}
            >
              Cambiar contraseña
            </button>
            <button
              type="button"
              className="btn btn-primary perfil-btn"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>

          {mostrarPw && <CambiarPassword />}
        </section>

        <section className="glass-panel perfil-col">
          <div className="perfil-metrika-principal">
            {!esTraductor && (
              <div className="perfil-tabs">
                <button
                  type="button"
                  className={`perfil-tab${tab === 'traducido' ? ' activa' : ''}`}
                  onClick={() => setTab('traducido')}
                >
                  Traducidos
                </button>
                <button
                  type="button"
                  className={`perfil-tab${tab === 'revisado' ? ' activa' : ''}`}
                  onClick={() => setTab('revisado')}
                >
                  Revisados
                </button>
              </div>
            )}
            <span className="perfil-metrika-valor">{total}</span>
            <span className="perfil-metrika-etiqueta">
              {esTraductor
                ? 'artículos traducidos'
                : tab === 'traducido'
                  ? 'artículos traducidos'
                  : 'artículos revisados'}
            </span>
          </div>

          <UniversosAsignados universos={user.universos} />

          <ArticulosPorUniverso articulos={visibles} />
        </section>
      </div>
    </div>
  )
}

function formatearFecha(fecha) {
  const d = new Date(fecha + 'T00:00:00')
  return d.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function UniversosAsignados({ universos }) {
  return (
    <dl className="perfil-list">
      <div className="perfil-row">
        <dt>Universos asignados</dt>
        <dd>{universos.join(', ')}</dd>
      </div>
    </dl>
  )
}

function ArticulosPorUniverso({ articulos }) {
  const [abiertos, setAbiertos] = useState(() => new Set())
  const porUniverso = universosMetricas(articulos)
  if (porUniverso.length === 0) {
    return (
      <div className="perfil-articulos">
        <h3 className="perfil-articulos-title">Artículos</h3>
        <p className="perfil-empty">Todavía no tienes artículos.</p>
      </div>
    )
  }
  function toggle(u) {
    setAbiertos((prev) => {
      const next = new Set(prev)
      next.has(u) ? next.delete(u) : next.add(u)
      return next
    })
  }
  return (
    <div className="perfil-articulos">
      <h3 className="perfil-articulos-title">Artículos por universo</h3>
      {porUniverso.map((u) => (
        <details
          key={u.universo}
          className="perfil-details"
          open={abiertos.has(u.universo)}
        >
          <summary
            onClick={(e) => {
              e.preventDefault()
              toggle(u.universo)
            }}
          >
            <span className="perfil-details-titulo">{u.universo}</span>
            <span className="perfil-details-count">{u.articulos.length}</span>
          </summary>
          <ul className="perfil-articulo-lista">
            {u.articulos.map((a) => (
              <li key={a.tituloEn} className="perfil-articulo-item">
                <span className="perfil-articulo-titulo">{a.tituloEs}</span>
                <span className="perfil-articulo-en">{a.tituloEn}</span>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  )
}

function universosMetricas(articulos) {
  const map = new Map()
  articulos.forEach((a) => {
    if (!map.has(a.universo)) map.set(a.universo, [])
    map.get(a.universo).push(a)
  })
  return Array.from(map, ([universo, lista]) => ({
    universo,
    articulos: lista,
  }))
}

function CambiarPassword() {
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [repeat, setRepeat] = useState('')
  const [msg, setMsg] = useState(null)
  const [error, setError] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setMsg(null)
    if (!current) {
      setError('Introduce tu contraseña actual.')
      return
    }
    if (next.length < 4) {
      setError('La contraseña nueva debe tener al menos 4 caracteres.')
      return
    }
    if (next !== repeat) {
      setError('Las contraseñas no coinciden.')
      return
    }
    setCurrent('')
    setNext('')
    setRepeat('')
    setMsg('Contraseña actualizada.')
  }

  return (
    <form className="perfil-password" onSubmit={handleSubmit}>
      <h3 className="perfil-seccion-titulo">Cambiar contraseña</h3>
      <div className="perfil-password-campo">
        <label className="perfil-password-label">Contraseña actual</label>
        <input
          className="perfil-password-input"
          type="password"
          autoComplete="current-password"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
      </div>
      <div className="perfil-password-campo">
        <label className="perfil-password-label">Nueva contraseña</label>
        <input
          className="perfil-password-input"
          type="password"
          autoComplete="new-password"
          value={next}
          onChange={(e) => setNext(e.target.value)}
        />
      </div>
      <div className="perfil-password-campo">
        <label className="perfil-password-label">Repite la nueva contraseña</label>
        <input
          className="perfil-password-input"
          type="password"
          autoComplete="new-password"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
        />
      </div>
      {error && <p className="perfil-password-error">{error}</p>}
      {msg && <p className="perfil-password-ok">{msg}</p>}
      <button type="submit" className="btn btn-ghost perfil-password-btn">
        Cambiar contraseña
      </button>
    </form>
  )
}