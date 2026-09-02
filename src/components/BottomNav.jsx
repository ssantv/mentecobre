import { NavLink, Link } from 'react-router-dom'
import { useThemeMode } from '../theme/useThemeMode'

const ITEMS = [
  { to: '/', icon: 'home', label: 'Inicio', end: true },
  { to: '/avance', icon: 'query_stats', label: 'El avance' },
  { to: '/glosario', icon: 'book', label: 'Glosario' },
]

export default function BottomNav() {
  const { mode, toggle } = useThemeMode()

  return (
    <nav className="bottom-nav">
      {ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) => `bottom-item${isActive ? ' active' : ''}`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}
      <button type="button" className="bottom-item theme-toggle-nav" onClick={toggle}>
        <span className="material-symbols-outlined">
          {mode === 'light' ? 'dark_mode' : 'light_mode'}
        </span>
        <span>{mode === 'light' ? 'Oscuro' : 'Claro'}</span>
      </button>
      <Link className="bottom-item" to="/login">
        <span className="material-symbols-outlined">account_circle</span>
        <span>Inicia sesión</span>
      </Link>
    </nav>
  )
}