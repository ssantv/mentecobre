import { Link } from 'react-router-dom'
import ProgressDonut from '../components/ProgressDonut'
import { projectStats } from '../data/mockData'

const porcentaje = Math.round(
  (projectStats.traducidos / projectStats.totalArticulos) * 100,
)

export default function Home() {
  return (
    <div>
      <section className="home-hero">
        <div className="grid md-grid-12">
          <div className="md-col-span-7 hero-copy">
            <span className="chip chip-secondary">Bienvenido a la mentecobre</span>
            <p className="hero-text">
              Desde 2021, la Coppermind en español ha sido un proyecto impulsado por la pasión
              por el Cosmere y el deseo de compartir su conocimiento con toda la comunidad
              hispanohablante. Cada entrada, cada fragmento de información y cada guía se
              construyen con cuidado para que lectores y curiosos puedan explorar los mundos,
              personajes y secretos de Brandon Sanderson de manera clara y accesible.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary btn-lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeax7cmRbKdXJLqqC8N68LZ2ike1OvyTzIT316972gz3FFLWA/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Únete al equipo
              </a>
              <Link className="btn btn-ghost btn-lg" to="/glosario">
                Nuestro glosario
              </Link>
              <Link className="btn btn-ghost btn-lg hero-proyecto" to="/proyecto">
                Proyecto mentecobre
              </Link>
            </div>
          </div>
          <div className="md-col-span-5 metric-wrap">
            <div className="metric-glow"></div>
            <div className="metric-card glass-panel">
              <div className="metric-head">
                <p className="metric-title">Avance de la traducción</p>
                <div className="metric-icon">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
              </div>
              <ProgressDonut value={porcentaje} caption="Traducido" />
              <div className="metric-legend">
                <span className="m-legend-item">
                  <span className="dot" style={{ background: '#ffb873' }}></span>
                  Traducido · {projectStats.traducidos}
                </span>
                <span className="m-legend-item">
                  <span className="dot" style={{ background: '#7e402b' }}></span>
                  Pendiente · {projectStats.pendientes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-label">
        <span className="accent-bar" style={{ height: '2rem' }}></span>
        <h3>Nuestro contenido</h3>
      </div>

      <section className="games-banner">
        <div className="games-card">
          <div
            className="games-bg"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJmZjswN9JHhuQqEmIZFSHRZ0AYyF28eafJVDZXMPXYZLOW5eh7OUqeTmERg2KGvLfTaSFC2pCHisq7jBNomkwmk3YCjMlvU56RMHcYeL0X_pbfKkXyozVDpnAS6f3JxYhpRCU8GqEm_gHOkwjFMTIdGB6yWJTg8O9MIgim_sMl8O_uXQl1gxbY7WdyYMuoqbhBCKq0omdhUcc3fCqNT2I1xmC-W9mumc2ezs-4q1PeknOZCuDYSFLZpRYdrimnr501z1YMpMAPSxp")',
            }}
          ></div>
          <div className="games-overlay"></div>
          <div className="games-content">
            <h3>Nuestros juegos</h3>
            <p>
              Pása un buen rato con nuestros juegos interactivos basados en el Cosmere,
              diseñados para poner a prueba tus conocimientos y descubrir nuevos detalles de los
              mundos de Brandon Sanderson.
            </p>
            <button className="btn btn-games" type="button">
              <span className="material-symbols-outlined">sports_esports</span>
              Jugar ahora
            </button>
          </div>
        </div>
        <div className="games-card">
          <div className="games-overlay solid"></div>
          <div className="games-content">
            <h3>Nuestras RRSS</h3>
            <p>Síguenos y charla con la comunidad en nuestras redes.</p>
            <div className="socials-grid">
              <a
                className="social-link"
                href="https://es.coppermind.net/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined">public</span>
                Coppermind
              </a>
              <a
                className="social-link"
                href="https://x.com/CoppermindEsp"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
                X
              </a>
              <a
                className="social-link"
                href="https://bsky.app/profile/coppermindesp.bsky.social"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 16 16" className="social-icon" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"
                  />
                </svg>
                Bluesky
              </a>
              <a
                className="social-link"
                href="https://es.coppermind.net/wiki/Notificaci%C3%B3n_de_erratas"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined">flag</span>
                Erratas
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}