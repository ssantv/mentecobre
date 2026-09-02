import { useState } from 'react'
import { glossary } from '../data/mockData'

export default function Glosario() {
  const [query, setQuery] = useState('')

  const filtered = glossary.filter((entry) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      entry.term.toLowerCase().includes(q) ||
      entry.es.toLowerCase().includes(q)
    )
  })

  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Glosario</h1>
          <p className="page-sub">
            Términos del Cosmere con su traducción consensuada por el equipo.
          </p>
        </div>
      </header>

      <input
        className="search-input"
        type="search"
        placeholder="Buscar término..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="glossary-grid">
        {filtered.map((entry) => (
          <article key={entry.term} className="glossary-card">
            <div className="glossary-pair">
              <a className="glossary-term" href={entry.urlEn} target="_blank" rel="noreferrer">
                {entry.term}
              </a>
              <span className="glossary-divider"></span>
              <a className="glossary-es" href={entry.urlEs} target="_blank" rel="noreferrer">
                {entry.es}
              </a>
            </div>
            <div className="glossary-footer">
              <span className="glossary-universe">{entry.universo}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}