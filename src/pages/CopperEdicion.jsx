import { Link, useParams } from 'react-router-dom'
import CopperNewsShell from '../components/CopperNewsShell'
import CopperBloques from '../components/CopperBloques'
import { CN_EDICIONES_META, CN_EDICIONES } from '../data/coppernews'
import './CopperNews.css'

export default function CopperEdicion() {
  const { edicion } = useParams()
  const ed = CN_EDICIONES.find((e) => e.slug === edicion)
  const meta = CN_EDICIONES_META.find((m) => m.slug === edicion)
  const ok = ed && meta

  return (
    <CopperNewsShell>
      {!ok ? (
        <div className="cn-box">
          <h3 className="cn-box-title">Edición no encontrada</h3>
          <p className="cn-paragraph">No hemos encontrado esa edición. Vuelve al índice de ediciones.</p>
          <Link className="cn-btn" to="/ocio/coppernews/ediciones">
            Ver todas las ediciones
          </Link>
        </div>
      ) : (
        <>
          <div className="cn-dateline">
            {ed.fecha}
          </div>
          <CopperBloques bloques={ed.bloques} />

          <div className="cn-btn-row">
            <a className="cn-btn" href={meta.descarga} target="_blank" rel="noreferrer">
              DESCÁRGALO AQUÍ EN HD
            </a>
          </div>

          <div className="cn-edicion-nav">
            <Link className="cn-btn" to="/ocio/coppernews/ediciones">
              Todas las ediciones
            </Link>
          </div>
        </>
      )}
    </CopperNewsShell>
  )
}