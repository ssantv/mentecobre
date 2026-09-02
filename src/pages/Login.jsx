import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { MOCK_USERS, ROLES_LABEL } from '../auth/mockUsers'

export default function Login() {
  const { user, loginAs } = useAuth()
  const navigate = useNavigate()

  function handleLogin(userId) {
    if (loginAs(userId)) {
      navigate('/')
    }
  }

  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Iniciar sesión</h1>
          <p className="page-sub">
            Entra con una cuenta de prueba para ver las opciones según tu rol.
          </p>
        </div>
      </header>

      <div className="glass-panel login-card">
        <span className="material-symbols-outlined login-icon">
          local_fire_department
        </span>

        {user ? (
          <>
            <h2 className="login-title">Ya tienes la sesión iniciada</h2>
            <p className="login-text">
              Estás dentro como <strong>{user.name}</strong> (
              {ROLES_LABEL[user.role]}).
            </p>
            <Link className="btn btn-primary btn-lg" to="/perfil">
              Ir a mi perfil
            </Link>
          </>
        ) : (
          <>
            <h2 className="login-title">Elige una cuenta de prueba</h2>
            <p className="login-text">
              Esto es una maqueta: cada botón inicia sesión con un rol.
            </p>
            <div className="login-options">
              {MOCK_USERS.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => handleLogin(u.id)}
                >
                  <span className="login-role">{ROLES_LABEL[u.role]}</span>
                  <span className="login-username">{u.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}