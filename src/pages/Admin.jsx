import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { ROLES_LABEL } from '../auth/mockUsers'
import {
  usersSv,
  universesSv,
  glossarySv,
  categoriesSv,
  imagesWithTextSv,
  erratasSv,
  recruitmentSv,
  notificationsSv,
} from '../api'

// M3 · Panel de administración: consola independiente. Aspecto propio
//   (tabs laterales + contenido en tablas), página fuera del layout de la
//   Mentecobre. Cada sección tiene su pestaña: glosario, categorías,
//   imágenes con texto, artículos, usuarios, universos, erratas,
//   reclutamiento y notificaciones (la única con contador).
//   El revisor gestiona todo excepto usuarios, universos y reclutamiento.

const SINO = (v) => (v ? 'Sí' : '—')

const HOY = () => new Date().toISOString().slice(0, 10)

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

const ESTADOS_ERRATA = ['nuevo', 'en_proceso', 'resuelto', 'descartado']
const ESTADOS_RECLUTAMIENTO = ['nuevo', 'entrevista', 'aceptado', 'rechazado']

function Volver() {
  return (
    <Link to="/" className="admin-back-btn">
      <span className="material-symbols-outlined">arrow_back</span>
      Volver a la mentecobre
    </Link>
  )
}

function AdminHead({ user }) {
  return (
    <header className="admin-topbar">
      <Volver />
      <div className="admin-topbar-id">
        <span className="material-symbols-outlined admin-topbar-logo">
          local_fire_department
        </span>
        <span className="admin-topbar-brand">
          <span className="admin-topbar-name">Mentecobre</span>
          <span className="admin-topbar-sub">Panel de administración</span>
        </span>
      </div>
      {user && (
        <div className="admin-topbar-user">
          <span className="admin-topbar-avatar">
            {(user.name ?? user.username ?? '?').slice(0, 1).toUpperCase()}
          </span>
          <span className="admin-topbar-u-name">
            {user.name ?? user.username}
          </span>
          <span className="admin-role-chip">
            {ROLES_LABEL[user.role] ?? user.role}
          </span>
        </div>
      )}
    </header>
  )
}

export default function Admin() {
  const { user } = useAuth()
  const esAdmin = user?.role === 'admin'
  const esRevisor = user?.role === 'revisor'
  const puedeAdministrar = esAdmin || esRevisor

  const TODAS = [
    { id: 'glosario', label: 'Glosario', icon: 'book' },
    { id: 'categorias', label: 'Categorías', icon: 'category' },
    { id: 'imagenes', label: 'Imágenes con texto', icon: 'image' },
    { id: 'articulos', label: 'Artículos', icon: 'article' },
    { id: 'usuarios', label: 'Usuarios', icon: 'group' },
    { id: 'universos', label: 'Universos', icon: 'public' },
    { id: 'erratas', label: 'Erratas', icon: 'edit_note' },
    { id: 'reclutamiento', label: 'Reclutamiento', icon: 'person_add' },
    { id: 'notificaciones', label: 'Notificaciones', icon: 'notifications' },
  ]
  const SIN_ACCESO_REVISOR = new Set(['usuarios', 'universos', 'reclutamiento'])
  const TABS = esRevisor
    ? TODAS.filter((t) => !SIN_ACCESO_REVISOR.has(t.id))
    : TODAS

  const [tab, setTab] = useState(TABS[0].id)
  const [dato, setDato] = useState(null)

  async function cargarTodo() {
    const data = {}
    const tareas = [
      glossarySv.listar().then((r) => (data.glosario = r)),
      categoriesSv.listar().then((r) => (data.categorias = r)),
      imagesWithTextSv.listar().then((r) => (data.imagenes = r)),
      erratasSv.listar().then((r) => (data.erratas = r)),
      notificationsSv.listar().then((r) => (data.notificaciones = r)),
      usersSv.listar().then((r) => (data.usuarios = r)),
      universesSv.listar().then((r) => (data.universos = r)),
      articlesList().then((r) => (data.articulos = r)),
    ]
    if (!esRevisor) {
      tareas.push(recruitmentSv.listar().then((r) => (data.solicitudes = r)))
    }
    await Promise.all(tareas)
    setDato(data)
  }

  useEffect(() => {
    setDato(null)
    cargarTodo().catch(() => setDato(null))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!puedeAdministrar) {
    return (
      <div className="admin-standalone">
        <AdminHead user={user} />
        <div className="admin-body">
          <main className="admin-content">
            <div className="admin-panel">
              <header className="admin-panel-head">
                <div>
                  <h2 className="admin-panel-title">Sin acceso</h2>
                  <span className="admin-panel-sub">
                    Esta sección es exclusiva del equipo de administración.
                  </span>
                </div>
              </header>
              <p className="admin-lock-msg">
                No tienes permisos para gestionar el panel.
              </p>
            </div>
          </main>
        </div>
      </div>
    )
  }

  const conteos = {
    notificaciones: dato?.notificaciones?.filter(
      (n) => n.estado !== 'resuelta' && n.estado !== 'completado',
    ).length,
  }

  return (
    <div className="admin-standalone">
      <AdminHead user={user} />

      <div className="admin-body">
        <nav className="admin-sidenav" aria-label="Secciones del panel">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`adm-nav-item${tab === t.id ? ' active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              <span className="material-symbols-outlined adm-nav-item-icon">
                {t.icon}
              </span>
              <span className="adm-nav-item-label">{t.label}</span>
              {dato &&
                t.id === 'notificaciones' &&
                conteos.notificaciones != null &&
                conteos.notificaciones > 0 && (
                  <span className="adm-nav-item-count">
                    {conteos.notificaciones}
                  </span>
                )}
            </button>
          ))}
        </nav>

        <main className="admin-content">
          {!dato && <p className="admin-empty">Cargando datos…</p>}

          {dato && tab === 'glosario' && (
            <SeccionGlosario glosario={dato.glosario} />
          )}
          {dato && tab === 'categorias' && (
            <SeccionCategorias categorias={dato.categorias} />
          )}
          {dato && tab === 'imagenes' && (
            <SeccionImagenes imagenes={dato.imagenes} />
          )}
          {dato && tab === 'articulos' && (
            <SeccionArticulos
              articulos={dato.articulos}
              universos={dato.universos}
              usuarios={dato.usuarios}
            />
          )}
          {dato && tab === 'usuarios' && (
            <SeccionUsuarios
              usuarios={dato.usuarios}
              recargar={() => cargarTodo()}
            />
          )}
          {dato && tab === 'universos' && (
            <SeccionUniversos
              universos={dato.universos}
              articulos={dato.articulos}
              usuarios={dato.usuarios}
            />
          )}
          {dato && tab === 'erratas' && (
            <SeccionErratas
              erratas={dato.erratas}
              recargar={() => cargarTodo()}
            />
          )}
          {dato && tab === 'reclutamiento' && (
            <SeccionReclutamiento
              solicitudes={dato.solicitudes}
              recargar={() => cargarTodo()}
            />
          )}
          {dato && tab === 'notificaciones' && (
            <SeccionNotificaciones
              notificaciones={dato.notificaciones}
              recargar={() => cargarTodo()}
            />
          )}
        </main>
      </div>
    </div>
  )
}

// ---------- Secciones ----------

function SeccionGlosario({ glosario }) {
  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Términos del glosario</h2>
          <span className="admin-panel-sub">{glosario.length} términos</span>
        </div>
      </header>
      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Término</th>
              <th>Traducción</th>
              <th>Universo</th>
            </tr>
          </thead>
          <tbody>
            {glosario.map((g) => (
              <tr key={g.term}>
                <td className="adm-link">{g.term}</td>
                <td>{g.es}</td>
                <td>
                  <span className="adm-chip adm-chip-neutro">
                    {g.universo}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SeccionCategorias({ categorias }) {
  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Categorías</h2>
          <span className="admin-panel-sub">{categorias.length} categorías</span>
        </div>
      </header>
      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>En inglés</th>
              <th>En español</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((c) => (
              <tr key={c.id}>
                <td className="adm-link">{c.en}</td>
                <td>{c.es}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const ESTADOS_ARTICULO = [
  { id: 'todos', label: 'Todos' },
  { id: 'pendiente', label: 'Pendientes' },
  { id: 'en_revision', label: 'En revisión' },
  { id: 'revisado', label: 'Revisados' },
]

function SeccionArticulos({ articulos, universos, usuarios }) {
  const nombreUni = useMemo(
    () => new Map((universos ?? []).map((u) => [u.id, u.nombre])),
    [universos],
  )
  const nombreUser = useMemo(
    () =>
      new Map(
        (usuarios ?? []).map((u) => [
          u.id,
          [u.first_name, u.last_name].filter(Boolean).join(' ') || u.username,
        ]),
      ),
    [usuarios],
  )
  const [q, setQ] = useState('')
  const [estado, setEstado] = useState('todos')

  const filtrados = useMemo(() => {
    const term = q.trim().toLowerCase()
    return (articulos ?? [])
      .filter((a) => {
        if (term) {
          const campo = `${a.titleEn ?? ''} ${a.titleEs ?? ''}`.toLowerCase()
          if (!campo.includes(term)) return false
        }
        if (estado === 'revisado') return !!a.reviewed
        if (estado === 'en_revision') return !!a.translated && !a.reviewed
        if (estado === 'pendiente') return !a.translated
        return true
      })
      .slice(0, 250)
  }, [articulos, q, estado])

  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Artículos</h2>
          <span className="admin-panel-sub">
            {articulos?.length ?? 0} en el índice · mostrando {filtrados.length}
          </span>
        </div>
        <div className="admin-head-actions">
          <input
            className="admin-input"
            value={q}
            onChange={(ev) => setQ(ev.target.value)}
            placeholder="Buscar título…"
            aria-label="Buscar artículos"
          />
          <select
            className="adm-select"
            value={estado}
            onChange={(ev) => setEstado(ev.target.value)}
            aria-label="Filtrar por estado"
          >
            {ESTADOS_ARTICULO.map((e) => (
              <option key={e.id} value={e.id}>
                {e.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Artículo</th>
              <th>Universo</th>
              <th>Traductor</th>
              <th>Revisor</th>
              <th>Estado</th>
              <th>ES</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((a) => (
              <tr key={a.id}>
                <td>
                  <a
                    className="adm-link"
                    href={a.urlEn ?? '#'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {a.titleEn}
                  </a>
                  <div className="adm-en">{a.titleEs || '—'}</div>
                </td>
                <td>
                  <span className="adm-chip adm-chip-neutro">
                    {nombreUni.get(Number(a.universe)) ?? a.universe ?? '—'}
                  </span>
                </td>
                <td>{nombreUser.get(a.translator) ?? '—'}</td>
                <td>{nombreUser.get(a.reviewer) ?? '—'}</td>
                <td>
                  <span
                    className={`adm-chip ${
                      a.reviewed
                        ? 'adm-chip-rev'
                        : a.translated
                          ? 'adm-chip-enrev'
                          : 'adm-chip-pend'
                    }`}
                  >
                    {a.reviewed
                      ? 'revisado'
                      : a.translated
                        ? 'en revisión'
                        : 'pendiente'}
                  </span>
                </td>
                <td>
                  {a.urlEs ? (
                    <a
                      className="adm-link"
                      href={a.urlEs}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
            {filtrados.length === 0 && (
              <tr>
                <td colSpan={6} className="admin-empty">
                  Sin resultados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SeccionImagenes({ imagenes }) {
  const pendientes = imagenes.filter((i) => i.pendienteEs)

  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Imágenes con texto</h2>
          <span className="admin-panel-sub">
            {imagenes.length} en total
            {pendientes.length > 0 &&
              ` · ${pendientes.length} sin versión ES (ver Notificaciones)`}
          </span>
        </div>
      </header>

      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Si pone…</th>
              <th>…sustituir por</th>
              <th>Falta versión ES</th>
            </tr>
          </thead>
          <tbody>
            {imagenes.map((img) => (
              <tr key={img.id}>
                <td>
                  <a
                    className="adm-link"
                    href={img.urlEn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {img.en}
                  </a>
                </td>
                <td>
                  <a
                    className="adm-link"
                    href={img.urlEs}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {img.es || '—'}
                  </a>
                </td>
                <td>{SINO(img.pendienteEs)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SeccionUsuarios({ usuarios, recargar }) {
  async function cambiarEstado(u, status) {
    const patch = { status, status_changed_at: HOY() }
    if (status === 'descanso') {
      patch.is_resting = true
      patch.timeoff_date = HOY()
      patch.out_date = null
    } else if (status === 'baja') {
      patch.is_resting = false
      patch.timeoff_date = null
      patch.out_date = HOY()
    } else {
      patch.is_resting = false
      patch.timeoff_date = null
      patch.out_date = null
    }
    await usersSv.modificar(u.id, patch)
    await recargar()
  }

  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Usuarios</h2>
          <span className="admin-panel-sub">
            {usuarios.length} personas en el equipo
          </span>
        </div>
      </header>
      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Perfil</th>
              <th>Estado</th>
              <th>Desde</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>
                  <span className="adm-link">
                    {[u.first_name, u.last_name].filter(Boolean).join(' ') ||
                      u.username}
                  </span>
                  <div className="adm-en">@{u.username}</div>
                </td>
                <td>
                  <span className="adm-chip adm-chip-neutro">
                    {u.groups?.[0] ?? u.rol ?? '—'}
                  </span>
                </td>
                <td>
                  <span
                    className={`adm-chip adm-chip-${u.status ?? 'activo'}`}
                  >
                    {u.status ?? '—'}
                  </span>
                </td>
                <td>{fmtFecha(u.date_joined)}</td>
                <td>
                  {(u.status === 'descanso' || u.status === 'baja') && (
                    <button
                      type="button"
                      className="admin-btn admin-btn-ghost"
                      onClick={() => cambiarEstado(u, 'activo')}
                    >
                      Reactivar
                    </button>
                  )}
                  {u.status === 'activo' && (
                    <>
                      <button
                        type="button"
                        className="admin-btn admin-btn-ghost"
                        onClick={() => cambiarEstado(u, 'descanso')}
                      >
                        Descanso
                      </button>{' '}
                      <button
                        type="button"
                        className="admin-btn admin-btn-ghost"
                        onClick={() => cambiarEstado(u, 'baja')}
                      >
                        Baja
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SeccionUniversos({ universos, articulos, usuarios }) {
  const conteo = useMemo(() => {
    const porUni = new Map()
    articulos.forEach((a) => {
      const u = Number(a.universe)
      const e = porUni.get(u) ?? { total: 0, revisados: 0, traducidos: 0 }
      e.total += 1
      if (a.reviewed) e.revisados += 1
      if (a.translated) e.traducidos += 1
      porUni.set(u, e)
    })
    const colaboradores = new Map()
    usuarios.forEach((u) => {
      ;(u.universe ?? []).forEach((un) => {
        colaboradores.set(Number(un), (colaboradores.get(Number(un)) ?? 0) + 1)
      })
    })
    return { porUni, colaboradores }
  }, [articulos, usuarios])

  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Universos</h2>
          <span className="admin-panel-sub">
            {universos.length} universos del Cosmere
          </span>
        </div>
      </header>
      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Universo</th>
              <th>Artículos</th>
              <th>Traducidos</th>
              <th>Revisados</th>
              <th>Colaboradores</th>
            </tr>
          </thead>
          <tbody>
            {universos.map((uni) => {
              const e = conteo.porUni.get(uni.id) ?? {
                total: 0,
                traducidos: 0,
                revisados: 0,
              }
              const pct =
                e.total === 0 ? 0 : Math.round((e.traducidos / e.total) * 100)
              return (
                <tr key={uni.id}>
                  <td>
                    <span className="adm-link">{uni.nombre}</span>
                  </td>
                  <td>{e.total}</td>
                  <td>
                    {e.traducidos} ({pct}%)
                  </td>
                  <td>{e.revisados}</td>
                  <td>{conteo.colaboradores.get(uni.id) ?? 0}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SeccionErratas({ erratas, recargar }) {
  async function cambiarEstado(e, estado) {
    await erratasSv.modificar(e.id, { estado })
    await recargar()
  }

  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Erratas</h2>
          <span className="admin-panel-sub">
            {erratas.length} comunicadas (
            {erratas.filter((e) => e.estado === 'nuevo').length} nuevas) · se reciben
            desde el formulario de la portada
          </span>
        </div>
      </header>

      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Artículo</th>
              <th>Texto</th>
              <th>Remitente</th>
              <th>Estado</th>
              <th>Recibida</th>
            </tr>
          </thead>
          <tbody>
            {erratas.map((e) => (
              <tr key={e.id}>
                <td>
                  <span className="adm-link">{e.articulo}</span>
                </td>
                <td className="adm-limit">{e.texto}</td>
                <td>
                  <span className="adm-link">{e.usuario ?? 'anónimo'}</span>
                  {e.email && <div className="adm-en">{e.email}</div>}
                </td>
                <td>
                  <select
                    className="adm-select"
                    value={e.estado}
                    onChange={(ev) => cambiarEstado(e, ev.target.value)}
                    aria-label="Estado de la errata"
                  >
                    {ESTADOS_ERRATA.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{fmtFecha(e.creado_en)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SeccionReclutamiento({ solicitudes, recargar }) {
  async function cambiarEstado(s, estado) {
    await recruitmentSv.modificar(s.id, { estado })
    await recargar()
  }

  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Reclutamiento</h2>
          <span className="admin-panel-sub">
            {solicitudes.length} solicitadas (
            {solicitudes.filter((s) => s.estado === 'nuevo').length} nuevas) · se
            reciben desde el formulario de la portada
          </span>
        </div>
      </header>

      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Candidato</th>
              <th>Motivación</th>
              <th>Obras leídas</th>
              <th>Estado</th>
              <th>Recibida</th>
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((s) => (
              <tr key={s.id}>
                <td>
                  <span className="adm-link">{s.nombre}</span>
                  <div className="adm-en">{s.email}</div>
                </td>
                <td className="adm-limit">{s.motivacion}</td>
                <td className="adm-limit">{s.libros?.length ?? 0} obras</td>
                <td>
                  <select
                    className="adm-select"
                    value={s.estado}
                    onChange={(ev) => cambiarEstado(s, ev.target.value)}
                    aria-label="Estado de la solicitud"
                  >
                    {ESTADOS_RECLUTAMIENTO.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{fmtFecha(s.creado_en)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SeccionNotificaciones({ notificaciones, recargar }) {
  const pendientes = notificaciones.filter(
    (n) => n.estado !== 'resuelta' && n.estado !== 'completado',
  )

  async function resolver(n) {
    await notificationsSv.modificar(n.id, { estado: 'resuelta' })
    await recargar()
  }

  return (
    <div className="admin-panel">
      <header className="admin-panel-head">
        <div>
          <h2 className="admin-panel-title">Notificaciones</h2>
          <span className="admin-panel-sub">
            {pendientes.length} pendientes · {notificaciones.length} en total
          </span>
        </div>
      </header>
      <div className="table-scroll">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Contexto</th>
              <th>Estado</th>
              <th>Creada</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {notificaciones.map((n) => (
              <tr key={n.id}>
                <td>
                  <span className="adm-chip adm-chip-neutro">{n.tipo}</span>
                </td>
                <td>
                  <a
                    className="adm-link"
                    href={n.enUrl ?? '#'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {n.contexto ?? n.enUrl}
                  </a>
                </td>
                <td>
                  <span
                    className={`adm-chip ${
                      n.estado === 'resuelta'
                        ? 'adm-chip-rev'
                        : 'adm-chip-enrev'
                    }`}
                  >
                    {n.estado}
                  </span>
                </td>
                <td>{fmtFecha(n.creado_en)}</td>
                <td>
                  {n.estado !== 'resuelta' && (
                    <button
                      type="button"
                      className="admin-btn admin-btn-ghost"
                      onClick={() => resolver(n)}
                    >
                      Marcar resuelta
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Articles solo hace falta para el conteo de Universos; se importa on-demand
// para no cargar la semilla hasta que se abra esa sección.
async function articlesList() {
  const { articles } = await import('../api')
  return articles.listar()
}