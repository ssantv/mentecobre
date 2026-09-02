import { Link } from 'react-router-dom'

export const OCIO = [
  {
    to: '/juegos/quiz',
    title: 'CopperQuiz',
    icon: 'quiz',
    description:
      '10 preguntas del Cosmere con límite de 15 segundos. Acierta rápido para sumar más puntos, falla y pierdes.',
    tag: 'Test de conocimiento',
  },
  {
    to: '/juegos/hopper',
    title: 'CopperHopper',
    icon: 'travel_explore',
    description:
      'Viaja por la Coppermind en español navegando de artículo en artículo hasta llegar al objetivo. Inspirado en el WikiRace.',
    tag: 'Navegación por la wiki',
  },
{
    to: '/juegos/desolancicos',
    title: 'Desolancicos',
    icon: 'local_fire_department',
  },
  {
    to: '/juegos/coppernews',
    title: 'CopperNews',
    icon: 'newsmode',
  },
  {
    to: '/juegos/cotorraviajes',
    title: 'CotorraViajes',
    icon: 'flight',
  },
  {
    to: '/juegos/escuela-monakus',
    title: 'Escuela Monakus',
    icon: 'school',
  },
  {
    title: 'Crónica de los Forjamundos',
    icon: 'auto_stories',
    proximamente: true,
  },
]

export default function Juegos() {
  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Nuestro ocio</h1>
          <p className="page-sub">
            Pasa un buen rato con los juegos, secciones y proyectos de la comunidad.
          </p>
        </div>
      </header>

      <div className="juegos-grid">
        {OCIO.map((item) =>
          item.proximamente ? (
            <div key={item.title} className="juego-card glass-panel">
              <div className="juego-icon">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h2 className="juego-title">{item.title}</h2>
              <span className="juego-play juego-proximamente">
                Próximamente
                <span className="material-symbols-outlined">schedule</span>
              </span>
            </div>
          ) : (
            <Link key={item.to} to={item.to} className="juego-card glass-panel">
              <div className="juego-icon">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              {item.tag && <span className="juego-tag">{item.tag}</span>}
              <h2 className="juego-title">{item.title}</h2>
              {item.description && <p className="juego-desc">{item.description}</p>}
              <span className="juego-play">
                Entrar
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </Link>
          ),
        )}
      </div>
    </div>
  )
}