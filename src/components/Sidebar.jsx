import { NavLink, Link } from 'react-router-dom'
import { useThemeMode } from '../theme/useThemeMode'

const NAV_ITEMS = [
  { to: '/', icon: 'home', label: 'Inicio', end: true },
  { to: '/avance', icon: 'query_stats', label: 'El avance' },
  { to: '/glosario', icon: 'book', label: 'Glosario' },
]

const AUX_ITEMS = [{ icon: 'sports_esports', label: 'Juegos', to: '/juegos' }]

const FOOTER_ITEMS = [
  {
    icon: 'group',
    label: 'Únete al equipo',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeax7cmRbKdXJLqqC8N68LZ2ike1OvyTzIT316972gz3FFLWA/viewform',
    external: true,
  },
  {
    icon: 'account_circle',
    label: 'Iniciar sesión',
    to: '/login',
    highlighted: true,
  },
]

export default function Sidebar() {
  const { mode, toggle } = useThemeMode()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Mentecobre</h1>
      </div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          >
            <span className="material-symbols-outlined nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
        {AUX_ITEMS.map((item) =>
          item.to ? (
            <Link key={item.label} to={item.to} className="nav-item">
              <span className="material-symbols-outlined nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ) : (
            <a key={item.label} href={item.href} className="nav-item">
              <span className="material-symbols-outlined nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ),
        )}
        <img src="/Logo.png" alt="Logo" className="sidebar-logo" />
      </nav>
      <div className="sidebar-footer">
        {FOOTER_ITEMS.map((item) =>
          item.to ? (
            <Link
              key={item.label}
              to={item.to}
              className={`nav-item${item.highlighted ? ' active' : ''}`}
            >
              <span className="material-symbols-outlined nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className={`nav-item${item.highlighted ? ' active' : ''}`}
              {...(item.external
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              <span className="material-symbols-outlined nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ),
        )}
        <div className="theme-switch-row">
          <span className="theme-switch-label">Oscurense</span>
          <button
            type="button"
            className={`theme-switch${mode === 'light' ? ' on' : ''}`}
            onClick={toggle}
            aria-label="Cambiar tema"
          >
            <span className="theme-switch-thumb"></span>
          </button>
          <span className="theme-switch-label">Diurnense</span>
        </div>
      </div>
    </aside>
  )
}