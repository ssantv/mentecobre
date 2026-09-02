import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Iniciar sesión</h1>
          <p className="page-sub">Accede con tu cuenta.</p>
        </div>
      </header>

      <div className="glass-panel login-card">
        <span className="material-symbols-outlined login-icon">local_fire_department</span>
        <h2 className="login-title">¿¿Pero tú te piensas que quemas cadmio??</h2>
        <p className="login-text">Esto aún no está.</p>
        <Link className="btn btn-primary btn-lg" to="/">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}