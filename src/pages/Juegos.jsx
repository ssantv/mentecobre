import { Link } from 'react-router-dom'

const GAMES = [
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
]

export default function Juegos() {
  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Nuestros juegos</h1>
          <p className="page-sub">
            Pasa un buen rato con nuestros juegos interactivos basados en el Cosmere.
          </p>
        </div>
      </header>

      <div className="juegos-grid">
        {GAMES.map((game) => (
          <Link key={game.to} to={game.to} className="juego-card glass-panel">
            <div className="juego-icon">
              <span className="material-symbols-outlined">{game.icon}</span>
            </div>
            <span className="juego-tag">{game.tag}</span>
            <h2 className="juego-title">{game.title}</h2>
            <p className="juego-desc">{game.description}</p>
            <span className="juego-play">
              Jugar
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}