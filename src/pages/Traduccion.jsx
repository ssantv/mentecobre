import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { articles, universesSv, monthlyChangesSv } from '../api'

const vacio = (v) => v === null || v === undefined || v === ''

function hoy() {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const dia = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${dia}`
}

const LABEL_VEREDICTO = {
  revisar_diff: 'Revisar diff',
  crear_pagina: 'Crear página',
  no_requiere: 'No requiere',
  pendiente: 'Pendiente',
}

const SINO = (v) => (v ? 'Sí' : '—')

export default function Traduccion() {
  const { user } = useAuth()
  const esRevisor = user?.role === 'revisor' || user?.role === 'admin'

  const TABS = [
    { id: 'traduccion', label: 'Traducción', icon: 'translate' },
    ...(esRevisor
      ? [{ id: 'revision', label: 'Revisión', icon: 'fact_check' }]
      : []),
    { id: 'actualizacion', label: 'Actualización', icon: 'update' },
  ]

  const [tab, setTab] = useState(TABS[0]?.id ?? 'traduccion')
  const [estado, setEstado] = useState({ tab: null, datos: null, cambios: null })

  const cargar = useCallback(async () => {
    const [articulos, universos] = await Promise.all([
      articles.listar(),
      universesSv.listar(),
    ])
    const porId = new Map(universos.map((u) => [Number(u.id), u.nombre]))
    return { articulos, nombreUni: (id) => porId.get(Number(id)) ?? 'Otro' }
  }, [])

  const cargarCambios = useCallback(async () => {
    const [articulos, cambiosLista] = await Promise.all([
      articles.listar(),
      monthlyChangesSv.listar(),
    ])
    return { articulos, cambios: cambiosLista }
  }, [])

  const recargar = useCallback(async () => {
    const data =
      tab === 'actualizacion'
        ? { cambios: await cargarCambios().catch(() => null) }
        : { datos: await cargar().catch(() => null) }
    setEstado((prev) => ({ ...prev, tab, ...data }))
  }, [tab, cargar, cargarCambios])

  useEffect(() => {
    const peticion =
      tab === 'actualizacion'
        ? cargarCambios()
            .then((res) => ({ cambios: res }))
            .catch(() => ({ cambios: null }))
        : cargar()
            .then((res) => ({ datos: res }))
            .catch(() => ({ datos: null }))
    peticion.then((data) =>
      setEstado((prev) => ({ ...prev, tab, ...data })),
    )
  }, [tab, cargar, cargarCambios])

  if (!user) {
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
          <h2 className="login-title">Inicia sesión</h2>
          <p className="login-text">
            La sección de traducción está reservada a personas registradas.
          </p>
          <Link className="btn btn-primary btn-lg" to="/login">
            Iniciar sesión
          </Link>
        </div>
      </div>
    )
  }

  const titulo =
    tab === 'revision'
      ? 'Revisión'
      : tab === 'actualizacion'
        ? 'Actualización'
        : 'Traducción'
  const subtitulo =
    tab === 'revision'
      ? 'Revisa los artículos ya traducidos y pendientes de verificación.'
      : tab === 'actualizacion'
        ? 'Artículos que cambiaron recientemente en la Coppermind y deben reseñarse.'
        : 'Tu artículo actual y el siguiente por asignar de cada uno de tus universos.'

  const datos = estado.tab === tab ? estado.datos : null
  const cambios = estado.tab === tab ? estado.cambios : null

  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">{titulo}</h1>
          <p className="page-sub">{subtitulo}</p>
        </div>
      </header>

      <div
        className="admin-tabs"
        role="tablist"
        aria-label="Secciones de traducción"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`admin-tab${tab === t.id ? ' active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            <span className="material-symbols-outlined admin-tab-icon">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'traduccion' && <TabTraduccion user={user} datos={datos} recargar={recargar} />}

      {tab === 'revision' && esRevisor && (
        <SeccionRevision user={user} datos={datos} recargar={recargar} />
      )}

      {tab === 'actualizacion' && <TabActualizacion cambios={cambios} recargar={recargar} />}
    </div>
  )
}

// ---------- Tab: Traducción ----------

function TabTraduccion({ user, datos, recargar }) {
  const [modalArticuloId, setModalArticuloId] = useState(null)
  const [notas, setNotas] = useState('')

  if (!datos) {
    return <p className="traduccion-empty">Cargando artículos…</p>
  }

  const misUniversos = (user.universe ?? []).map((u) => Number(u))
  const articulos = datos.articulos.filter((a) =>
    misUniversos.includes(Number(a.universe)),
  )

  const trabajando =
    articulos.find(
      (a) => Number(a.translator) === user.id && !a.translated,
    ) ?? null
  const porUniverso = new Map()
  articulos.forEach((a) => {
    if (a.translated || !vacio(a.translator)) return
    const uni = Number(a.universe)
    if (!porUniverso.has(uni)) porUniverso.set(uni, a)
  })
  const siguientes = Array.from(porUniverso.values())
  const tieneAsignado = Boolean(trabajando)
  const modalArticulo =
    modalArticuloId != null
      ? (datos.articulos.find((a) => a.id === modalArticuloId) ?? null)
      : null

  function openModal(id) {
    setNotas('')
    setModalArticuloId(id)
  }

  function cerrarModal() {
    setModalArticuloId(null)
    setNotas('')
  }

  async function aceptar() {
    if (modalArticuloId == null) return
    await articles.modificar(modalArticuloId, {
      translated: true,
      translatedDate: hoy(),
      notes: notas.trim() || modalArticulo.notes,
    })
    await recargar()
    cerrarModal()
  }

  async function asignar(articulo) {
    await articles.modificar(articulo.id, {
      translator: user.id,
      assignedDate: hoy(),
    })
    await recargar()
  }

  return (
    <>
      {trabajando ? (
        <section className="traduccion-section">
          <h2 className="traduccion-h2">Artículo en el que estás trabajando</h2>
          <ArticuloCard
            articulo={trabajando}
            modo="trabajando"
            nombreUni={datos.nombreUni}
            labelMarcar="Marcar como traducido"
            onMarcar={() => openModal(trabajando.id)}
          />
        </section>
      ) : (
        siguientes.length > 0 && (
          <section className="traduccion-section">
            <p className="traduccion-hint">
              No tienes ningún artículo asignado. Asigna uno de abajo para
              empezar a traducir.
            </p>
          </section>
        )
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
              <ArticuloCard
                key={a.id}
                articulo={a}
                modo="asignar"
                nombreUni={datos.nombreUni}
                onAsignar={() => asignar(a)}
                asignarDeshabilitado={tieneAsignado}
              />
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
              Estás a punto de marcar como traducido «{modalArticulo.titleEs}»
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
    </>
  )
}

function ArticuloCard({
  articulo,
  modo,
  nombreUni,
  onMarcar,
  onAsignar,
  asignarDeshabilitado,
  labelMarcar = 'Marcar como traducido',
}) {
  return (
    <article
      className={`traduccion-card${modo === 'trabajando' ? ' traduccion-principal' : ''}`}
    >
      <span className="traduccion-chip">
        {nombreUni(articulo.universe)}
      </span>
      <div className="traduccion-titulos">
        {articulo.urlEs ? (
          <a
            className="traduccion-titulo-es"
            href={articulo.urlEs}
            target="_blank"
            rel="noreferrer"
          >
            {articulo.titleEs}
          </a>
        ) : (
          <span className="traduccion-titulo-es">{articulo.titleEs}</span>
        )}
        {articulo.urlEn ? (
          <a
            className="traduccion-titulo-en"
            href={articulo.urlEn}
            target="_blank"
            rel="noreferrer"
          >
            {articulo.titleEn}
          </a>
        ) : (
          <span className="traduccion-titulo-en">{articulo.titleEn}</span>
        )}
      </div>
      {modo === 'trabajando' ? (
        <button
          type="button"
          className="btn btn-primary btn-lg traduccion-btn"
          onClick={onMarcar}
        >
          {labelMarcar}
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-ghost btn-lg traduccion-btn"
          onClick={onAsignar}
          disabled={asignarDeshabilitado}
        >
          Asignármelo a mí
        </button>
      )}
    </article>
  )
}

// ---------- Tab: Revisión ----------

function SeccionRevision({ user, datos, recargar }) {
  const [modalId, setModalId] = useState(null)
  const [notas, setNotas] = useState('')

  if (!datos) {
    return <p className="traduccion-empty">Cargando artículos…</p>
  }

  const misUniversos = (user.universe ?? []).map((u) => Number(u))

  const trabajando =
    datos.articulos.find(
      (a) => a.translated && !a.reviewed && Number(a.reviewer) === user.id,
    ) ?? null

  const articulos = datos.articulos.filter(
    (a) => a.translated && !a.reviewed && misUniversos.includes(Number(a.universe)),
  )
  const porUniverso = new Map()
  articulos.forEach((a) => {
    if (!vacio(a.reviewer)) return
    const uni = Number(a.universe)
    if (!porUniverso.has(uni)) porUniverso.set(uni, a)
  })
  const siguientes = Array.from(porUniverso.values())
  const tieneAsignado = Boolean(trabajando)

  const modalArticulo =
    modalId != null
      ? (datos.articulos.find((a) => a.id === modalId) ?? null)
      : null

  function openModal(id) {
    setNotas('')
    setModalId(id)
  }

  function cerrarModal() {
    setModalId(null)
    setNotas('')
  }

  async function aceptar() {
    if (modalArticulo == null) return
    await articles.modificar(modalArticulo.id, {
      reviewed: true,
      reviewedDate: hoy(),
      notes: notas.trim() || modalArticulo.notes,
    })
    await recargar()
    cerrarModal()
  }

  async function asignar(articulo) {
    await articles.modificar(articulo.id, {
      reviewer: user.id,
      reviewerassignedDate: hoy(),
    })
    await recargar()
  }

  return (
    <>
      {trabajando ? (
        <section className="traduccion-section">
          <h2 className="traduccion-h2">Artículo en el que estás trabajando</h2>
          <ArticuloCard
            articulo={trabajando}
            modo="trabajando"
            nombreUni={datos.nombreUni}
            labelMarcar="Marcar como revisado"
            onMarcar={() => openModal(trabajando.id)}
          />
        </section>
      ) : (
        siguientes.length > 0 && (
          <section className="traduccion-section">
            <p className="traduccion-hint">
              No tienes ningún artículo asignado. Asigna uno de abajo para
              empezar a revisar.
            </p>
          </section>
        )
      )}

      <section className="traduccion-section">
        <h2 className="traduccion-h2">Siguientes por revisar</h2>
        {siguientes.length === 0 ? (
          <p className="traduccion-empty">
            No hay más artículos disponibles en tus universos.
          </p>
        ) : (
          <div className="traduccion-grid">
            {siguientes.map((a) => (
              <ArticuloCard
                key={a.id}
                articulo={a}
                modo="asignar"
                nombreUni={datos.nombreUni}
                onAsignar={() => asignar(a)}
                asignarDeshabilitado={tieneAsignado}
              />
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
              Estás a punto de marcar como revisado «{modalArticulo.titleEs}»
            </h3>
            <label className="modal-label" htmlFor="notas-revision">
              Notas al artículo (opcional)
            </label>
            <textarea
              id="notas-revision"
              className="modal-textarea"
              rows={4}
              placeholder="Añade aquí cualquier comentario sobre la revisión..."
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
    </>
  )
}

// ---------- Tab: Actualización ----------

function TabActualizacion({ cambios, recargar }) {
  const porId = useMemo(
    () => new Map((cambios?.articulos ?? []).map((a) => [a.id, a])),
    [cambios],
  )

  if (!cambios) {
    return <p className="traduccion-empty">Cargando cambios…</p>
  }

  function veredicto(c) {
    return LABEL_VEREDICTO[c.veredicto] ?? c.veredicto ?? '—'
  }

  async function marcarSinPasar(c, valor) {
    await monthlyChangesSv.modificar(c.id, { sinPasar: valor })
    await recargar()
  }

  function fmtFecha(fecha) {
    if (!fecha) return '—'
    const d = new Date(fecha)
    if (Number.isNaN(d.getTime())) return fecha
    return d.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div>
      <div className="table-scroll">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Artículo</th>
              <th>Mes</th>
              <th>Veredicto</th>
              <th>Fecha del cambio</th>
              <th>Sin pasar</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cambios.cambios.map((c) => {
              const a =
                c.articleId != null ? porId.get(Number(c.articleId)) : null
              return (
                <tr key={c.id} className="imgtexto-row">
                  <td>
                    <span className="admin-link">
                      {a ? a.titleEs || a.titleEn : `#${c.articleId}`}
                    </span>
                  </td>
                  <td>
                    {fmtFecha(c.mesInicio)} – {fmtFecha(c.mesFin)}
                  </td>
                  <td>
                    <span className="admin-chip admin-chip-pend">
                      {veredicto(c)}
                    </span>
                  </td>
                  <td>{fmtFecha(c.fechaCambioEn)}</td>
                  <td>{SINO(c.sinPasar)}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => marcarSinPasar(c, !c.sinPasar)}
                    >
                      {c.sinPasar ? 'Marcar pasada' : 'Marcar sin pasar'}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}