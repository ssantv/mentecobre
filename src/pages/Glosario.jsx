import { useState } from 'react'
import { glossary, categoria } from '../data/mockData'

const TABS = [
  { id: 'articulos', label: 'Artículos' },
  { id: 'categorias', label: 'Categorías' },
]

export default function Glosario() {
  const [tab, setTab] = useState('articulos')
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()

  const articulosFiltrados = glossary.filter((entry) => {
    if (!q) return true
    return (
      entry.term.toLowerCase().includes(q) ||
      entry.es.toLowerCase().includes(q)
    )
  })

  const categoriasFiltradas = categoria.filter((c) => {
    if (!q) return true
    return (
      c.es.toLowerCase().includes(q) ||
      c.en.toLowerCase().includes(q)
    )
  })

  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Glosario</h1>
          <p className="page-sub">
            Términos y categorías del Cosmere con su traducción consensuada por
            el equipo.
          </p>
        </div>
      </header>

      <div className="glosario-tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`glosario-tab${tab === t.id ? ' active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <input
        className="search-input"
        type="search"
        placeholder={tab === 'articulos' ? 'Buscar término...' : 'Buscar categoría...'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {tab === 'articulos' && (
        <div className="glossary-grid">
          {articulosFiltrados.map((entry) => (
            <article key={entry.term} className="glossary-card">
              <div className="glossary-pair">
                <a
                  className="glossary-term"
                  href={entry.urlEn}
                  target="_blank"
                  rel="noreferrer"
                >
                  {entry.term}
                </a>
                <span className="glossary-divider"></span>
                <a
                  className="glossary-es"
                  href={entry.urlEs}
                  target="_blank"
                  rel="noreferrer"
                >
                  {entry.es}
                </a>
              </div>
              <div className="glossary-footer">
                <span className="glossary-universe">{entry.universo}</span>
              </div>
            </article>
          ))}
        </div>
      )}

      {tab === 'categorias' && (
        <div className="glossary-grid">
          {categoriasFiltradas.map((c) => (
            <article key={c.id} className="glossary-card">
              <div className="glossary-pair">
                <span className="glossary-term">{c.en}</span>
                <span className="glossary-divider"></span>
                <span className="glossary-es">{c.es}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}