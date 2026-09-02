import { useMemo, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart'
import {
  projectStats,
  monthlyProgress,
  articleStates,
  universos,
} from '../data/mockData'

const meses = monthlyProgress.map((m) => m.mes)
const traducidosSeries = monthlyProgress.map((m) => m.traducidos)
const revisadosSeries = monthlyProgress.map((m) => m.revisados)

const pieData = articleStates.map((s) => ({
  label: s.label,
  value: s.value,
  color: s.color,
}))

const conMetas = (u) => {
  const traducidos = u.revisados + u.enRevision
  const total = traducidos + u.pendientes
  const pct = total === 0 ? 0 : Math.round((traducidos / total) * 100)
  const pctRevisados = total === 0 ? 0 : Math.round((u.revisados / total) * 100)
  const pctEnRevision = total === 0 ? 0 : Math.round((u.enRevision / total) * 100)
  return { ...u, traducidos, total, pct, pctRevisados, pctEnRevision }
}

export default function Avance() {
  const conMetasArr = useMemo(() => universos.map(conMetas), [])
  const [orden, setOrden] = useState('cantidad')

  const ordenados = useMemo(() => {
    const list = [...conMetasArr]
    if (orden === 'a-z') {
      list.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
    } else if (orden === 'z-a') {
      list.sort((a, b) => b.nombre.localeCompare(a.nombre, 'es'))
    } else if (orden === 'pct') {
      list.sort((a, b) => b.pct - a.pct)
    } else {
      list.sort((a, b) => b.total - a.total)
    }
    return list
  }, [conMetasArr, orden])

  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">El avance</h1>
          <p className="page-sub">
            Artículos traducidos y revisados del proyecto Mentecobre.
          </p>
        </div>
</header>

      <div className="advance-note">
        <span className="material-symbols-outlined">info</span>
        <p>
          La traducción se realiza directamente en la Coppermind. En cuanto un
          artículo se traduce, ya está disponible para su lectura.
        </p>
      </div>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-large">{projectStats.totalArticulos}</div>
          <div className="stat-label">Artículos</div>
        </div>
        <div className="stat-card">
          <div className="stat-large" style={{ color: 'var(--text-amber)' }}>
            {projectStats.traducidos}
          </div>
          <div className="stat-label">Traducidos</div>
        </div>
        <div className="stat-card">
          <div className="stat-large" style={{ color: 'var(--text-coral)' }}>
            {projectStats.revisados}
          </div>
          <div className="stat-label">Revisados</div>
        </div>
        <div className="stat-card">
          <div className="stat-large" style={{ color: '#7e402b' }}>
            {projectStats.pendientes}
          </div>
          <div className="stat-label">Pendientes</div>
        </div>
      </section>

      <section className="charts-grid">
        <div className="glass-panel chart-panel chart-wide">
          <h2 className="chart-title">Traducción y revisión por mes</h2>
          <p className="chart-sub">
            Dos series por mes: artículos traducidos y artículos revisados.
          </p>
          <BarChart
            height={320}
            borderRadius={6}
            xAxis={[{ scaleType: 'band', data: meses }]}
            series={[
              { label: 'Traducidos', data: traducidosSeries, color: '#ffb873' },
              { label: 'Revisados', data: revisadosSeries, color: '#d66e4b' },
            ]}
          />
        </div>
        <div className="glass-panel chart-panel chart-narrow">
          <h2 className="chart-title">Estado global</h2>
          <p className="chart-sub">Distribución actual de los artículos del proyecto.</p>
          <PieChart
            height={280}
            margin={{ top: 12, right: 12, bottom: 12, left: 12 }}
            series={[
              {
                data: pieData,
                innerRadius: '58%',
                outerRadius: '78%',
                paddingAngle: 2,
                cornerRadius: 6,
              },
            ]}
          />
        </div>
      </section>

      <section className="viz-gallery">
        <div className="viz-head">
          <span className="accent-bar"></span>
          <div>
            <h2 className="page-title">Por universo</h2>
            <p className="page-sub">
              Todos los universos con sus artículos traducidos, revisados y % de avance.
            </p>
          </div>
        </div>

        {/* 1 · TODOS LOS UNIVERSOS */}
        <div className="glass-panel chart-panel chart-full">
          <span className="viz-tag">Ranking</span>
          <h2 className="chart-title">Todos los universos</h2>
          <p className="chart-sub">
            Ordena por cantidad de artículos, alfabéticamente o por porcentaje.
          </p>

          <div className="rank-legend">
            <span className="rank-legend-item">
              <span className="dot rank-dot-rev"></span>
              Revisado
            </span>
            <span className="rank-legend-item">
              <span className="dot" style={{ background: '#ffb873' }}></span>
              En revisión
            </span>
            <span className="rank-legend-item">
              <span
                className="dot"
                style={{ background: 'var(--surface-container-high)' }}
              ></span>
              Pendiente
            </span>
          </div>

          <div className="sort-tabs" role="tablist" aria-label="Ordenar universos">
            <button
              type="button"
              className={`sort-tab${orden === 'cantidad' ? ' active' : ''}`}
              onClick={() => setOrden('cantidad')}
            >
              Cantidad
            </button>
            <button
              type="button"
              className={`sort-tab${orden === 'pct' ? ' active' : ''}`}
              onClick={() => setOrden('pct')}
            >
              Porcentaje
            </button>
            <button
              type="button"
              className={`sort-tab${orden === 'a-z' ? ' active' : ''}`}
              onClick={() => setOrden('a-z')}
            >
              A–Z
            </button>
            <button
              type="button"
              className={`sort-tab${orden === 'z-a' ? ' active' : ''}`}
              onClick={() => setOrden('z-a')}
            >
              Z–A
            </button>
          </div>

          <div className="rank-list">
            {ordenados.map((u) => (
              <div key={u.id} className="rank-row">
                <span className="rank-name">{u.nombre}</span>
<div className="rank-track">
                  <div
                    className="rank-fill-rev"
                    style={{ width: `${u.pctRevisados}%` }}
                  ></div>
                  <div
                    className="rank-fill"
                    style={{
                      left: `${u.pctRevisados}%`,
                      width: `${u.pctEnRevision}%`,
                    }}
                  ></div>
                </div>
                <span className="rank-nums">
                  {u.traducidos}/{u.total} · {u.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

