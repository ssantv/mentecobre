import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { traduccionArticulos } from '../data/mockData'

export default function Traduccion() {
  const { user } = useAuth()
  const [mapa, setMapa] = useState(() =>
    Object.fromEntries(traduccionArticulos.map((a) => [a.id, a])),
  )
  const [modalArticuloId, setModalArticuloId] = useState(null)
  const [notas, setNotas] = useState('')

  if (!user || user.role !== 'traductor') {
    return (
      <div>
        <header className="page-header">
          <span className="accent-bar"></span>
          <div>
            <h1 className="page-title">Traducción</h1>
          </div>
        </header>
        <div className="glass-panel login-card">
          <span className="material-symbols-outlined login-icon">translate</span>
          <h2 className="login-title">Solo para traductores</h2>
          <p className="login-text">
            Esta página es propia del rol de traductor. Inicia sesión con una
            cuenta de traductor para verla.
          </p>
          <Link className="btn btn-primary btn-lg" to="/login">
            Iniciar sesión
          </Link>
        </div>
      </div>
    )
  }

  const misUniversos = user.universos || []
  const articulos = traduccionArticulos
    .filter((a) => misUniversos.includes(a.universo))
    .map((a) => mapa[a.id] ?? a)

  const trabajando = articulos.find((a) => !a.traducido) ?? articulos[0]
  const siguientes = articulos.filter((a) => a.id !== trabajando?.id)
  const modalArticulo =
    modalArticuloId != null ? (mapa[modalArticuloId] ?? null) : null

  function openModal(id) {
    setNotas('')
    setModalArticuloId(id)
  }

  function cerrarModal() {
    setModalArticuloId(null)
    setNotas('')
  }

  function aceptar() {
    if (modalArticuloId == null) return
    setMapa((prev) => ({
      ...prev,
      [modalArticuloId]: { ...prev[modalArticuloId], traducido: true },
    }))
    cerrarModal()
  }

  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Traducción</h1>
          <p className="page-sub">
            Tu artículo actual y los siguientes, según tus universos.
          </p>
        </div>
      </header>

      {trabajando && (
        <section className="traduccion-section">
          <h2 className="traduccion-h2">Artículo en el que estás trabajando</h2>
          <ArticuloCard articulo={trabajando} onMarcar={() => openModal(trabajando.id)} />
        </section>
      )}

      <section className="traduccion-section">
        <h2 className="traduccion-h2">Siguientes por asignar</h2>
        {siguientes.length === 0 ? (
          <p className="traduccion-empty">
            No hay más artículos disponibles en tus universos.
          </p>
        ) : (
          <div className="traduccion-grid">
            {siguientes.map((a) => (
              <ArticuloCard key={a.id} articulo={a} compact onMarcar={() => openModal(a.id)} />
            ))}
          </div>
        )}
      </section>

      {modalArticulo && (
        <div className="modal-backdrop" onClick={cerrarModal}>
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="modal-title">
              Estás a punto de marcar como traducido «{modalArticulo.tituloEs}»
            </h3>
            <label className="modal-label" htmlFor="notas-revisor">
              Notas para el revisor
            </label>
            <textarea
              id="notas-revisor"
              className="modal-textarea"
              rows={4}
              placeholder="Añade aquí cualquier nota para quien revise tu traducción..."
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
            />
            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-ghost btn-lg"
                onClick={cerrarModal}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={aceptar}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ArticuloCard({ articulo, compact, onMarcar }) {
  return (
    <article className={`traduccion-card${compact ? '' : ' traduccion-principal'}`}>
      <span className="traduccion-chip">{articulo.universo}</span>
      <div className="traduccion-titulos">
        <span className="traduccion-titulo-es">{articulo.tituloEs}</span>
        <span className="traduccion-titulo-en">{articulo.tituloEn}</span>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg traduccion-btn"
        onClick={onMarcar}
      >
        Marcar como traducido
      </button>
    </article>
  )
}