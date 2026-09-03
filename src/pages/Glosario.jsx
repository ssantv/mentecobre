import { useState } from 'react'
import { glossary, categoria } from '../data/mockData'
import { imagenesConTexto } from '../data/imagenesConTexto'
import { useAuth } from '../auth/useAuth'

const IMG_NO_ENC = 'https://media.tenor.com/a-niVX8qPEkAAAAj/rei-john-travolta.gif'

export default function Glosario() {
  const { user } = useAuth()
  const [tab, setTab] = useState('articulos')
  const [query, setQuery] = useState('')
  const [preview, setPreview] = useState(null)
  const [previewPos, setPreviewPos] = useState({ top: 0 })
  const [imgState, setImgState] = useState({})

  const setImgStateFor = (url, status) =>
    setImgState((prev) => ({ ...prev, [url]: status }))

  const q = query.trim().toLowerCase()

  const TABS = [
    { id: 'articulos', label: 'Artículos' },
    ...(user ? [{ id: 'categorias', label: 'Categorías' }] : []),
    ...(user ? [{ id: 'imagenes', label: 'Imágenes con texto' }] : []),
  ]

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

  const imagenesFiltradas = imagenesConTexto.filter((i) => {
    if (!q) return true
    return (
      i.nombre.toLowerCase().includes(q) ||
      i.en.toLowerCase().includes(q) ||
      i.es.toLowerCase().includes(q)
    )
  })

  const placeholder =
    tab === 'articulos'
      ? 'Buscar término...'
      : tab === 'categorias'
        ? 'Buscar categoría...'
        : 'Buscar imagen...'

  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Glosario</h1>
          <p className="page-sub">
            Términos, traducciones y recursos consensuados por el equipo.
          </p>
        </div>
      </header>

      <div className="glosario-tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`glosario-tab${tab === t.id ? ' active' : ''}`}
            onClick={() => { setTab(t.id); setPreview(null) }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <input
        className="search-input"
        type="search"
        placeholder={placeholder}
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

      {tab === 'imagenes' && (
        <div className="imgtexto">
          <p className="imgtexto-desc">
            Las imágenes que llevan texto en inglés tienen una versión en español
            subida a la Coppermind. Pasa el ratón sobre una fila para ver la
            miniatura de ambas versiones.
          </p>
          <div className="table-scroll imgtexto-table-scroll">
            <table className="imgtexto-table">
              <thead>
                <tr>
                  <th>Si pone…</th>
                  <th>…sustituir por</th>
                </tr>
              </thead>
              <tbody>
                {imagenesFiltradas.map((img) => (
                  <tr
                    key={img.nombre}
                    className="imgtexto-row"
                    onPointerEnter={(e) => {
                      setPreview(img)
                      setPreviewPos({ top: e.currentTarget.offsetTop })
                      setImgState({})
                    }}
                    onPointerLeave={() => setPreview(null)}
                    onFocus={(e) => {
                      setPreview(img)
                      setPreviewPos({ top: e.currentTarget.offsetTop })
                      setImgState({})
                    }}
                    onBlur={() => setPreview(null)}
                  >
                    <td>
                      <a
                        className="imgtexto-link imgtexto-link-en"
                        href={img.urlEn}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {img.en}
                      </a>
                    </td>
                    <td>
                      <a
                        className="imgtexto-link imgtexto-link-es"
                        href={img.urlEs}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {img.es}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {preview && (
            <div
              className="imgtexto-preview"
              style={{ top: previewPos.top + 4 }}
              aria-hidden="true"
            >
              <figure>
                <div className="imgtexto-figure">
                  <img
                    key={preview.urlEn}
                    src={preview.urlEn}
                    alt=""
                    loading="lazy"
                    onLoad={() => setImgStateFor(preview.urlEn, 'ready')}
                    onError={() => setImgStateFor(preview.urlEn, 'error')}
                  />
                  {imgState[preview.urlEn] !== 'ready' && (
                    <div className="imgtexto-overlay">
                      {imgState[preview.urlEn] === 'error'
                        ? <img className="imgtexto-noenc" src={IMG_NO_ENC} alt="Imagen no encontrada" />
                        : <span className="imgtexto-spinner" aria-hidden="true" />}
                    </div>
                  )}
                </div>
                <figcaption>Original</figcaption>
              </figure>
              <figure>
                <div className="imgtexto-figure">
                  <img
                    key={preview.urlEs}
                    src={preview.urlEs}
                    alt=""
                    loading="lazy"
                    onLoad={() => setImgStateFor(preview.urlEs, 'ready')}
                    onError={() => setImgStateFor(preview.urlEs, 'error')}
                  />
                  {imgState[preview.urlEs] !== 'ready' && (
                    <div className="imgtexto-overlay">
                      {imgState[preview.urlEs] === 'error'
                        ? <img className="imgtexto-noenc" src={IMG_NO_ENC} alt="Imagen no encontrada" />
                        : <span className="imgtexto-spinner" aria-hidden="true" />}
                    </div>
                  )}
                </div>
                <figcaption>En español</figcaption>
              </figure>
            </div>
          )}
        </div>
      )}
    </div>
  )
}