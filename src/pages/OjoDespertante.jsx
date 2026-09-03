import { useState } from 'react'
import { Link } from 'react-router-dom'
import './OjoDespertante.css'

const COLORS = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
  '#FFA500',
  '#800080',
  '#008000',
  '#FFC0CB',
  '#A52A2A',
  '#DDA0DD',
]

const STAGE_NAMES = [
  'Apagado',
  'Primera Elevación',
  'Segunda Elevación',
  'Tercera Elevación',
  'Cuarta Elevación',
  'Quinta Elevación',
  'Sexta Elevación',
  'Séptima Elevación',
  'Octava Elevación',
  'Novena Elevación',
  'Décima Elevación',
]

function getDifficultyLevel(level) {
  const baseDifference = 250
  const levelsPerStage = 10
  const differenceReduction = 20

  const mainStage = Math.floor((level - 1) / levelsPerStage)
  const subLevel = ((level - 1) % levelsPerStage) + 1

  const difference =
    mainStage === 9
      ? Math.max(5, baseDifference - mainStage * differenceReduction - subLevel * 2)
      : Math.max(5, baseDifference - mainStage * differenceReduction)

  return {
    name: STAGE_NAMES[Math.min(mainStage, STAGE_NAMES.length - 1)],
    difference,
    subLevel,
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0]
}

const LEVEL_RANGES = [
  { min: 230, max: 255 }, // Niveles 1-10
  { min: 205, max: 230 }, // Niveles 11-20
  { min: 180, max: 205 }, // Niveles 21-30
  { min: 155, max: 180 }, // Niveles 31-40
  { min: 130, max: 155 }, // Niveles 41-50
  { min: 105, max: 130 }, // Niveles 51-60
  { min: 80, max: 105 }, // Niveles 61-70
  { min: 55, max: 80 }, // Niveles 71-80
  { min: 30, max: 55 }, // Niveles 81-90
  { min: 10, max: 30 }, // Niveles 91-100
]

function getSimilarColor(baseColor, level) {
  const rgb = hexToRgb(baseColor)

  // Si el nivel es 101 o superior, usar una diferencia fija de 5
  if (level >= 101) {
    const newRgb = rgb.map((value) =>
      value > 127 ? Math.max(0, value - 5) : Math.min(255, value + 5),
    )
    return `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`
  }

  const mainStage = Math.floor((level - 1) / 10)
  const range = LEVEL_RANGES[Math.min(mainStage, LEVEL_RANGES.length - 1)]

  // Generar una diferencia aleatoria dentro del rango de la etapa actual
  const randomDifference = Math.floor(Math.random() * (range.max - range.min)) + range.min

  const newRgb = rgb.map((value) =>
    value > 127 ? Math.max(0, value - randomDifference) : Math.min(255, value + randomDifference),
  )
  return `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`
}

const DIFFICULTIES = {
  easy: { label: 'FÁCIL', size: 4, columns: 4 },
  medium: { label: 'MEDIO', size: 9, columns: 3 },
  hard: { label: 'DIFÍCIL', size: 25, columns: 5 },
}

function createRound(currentLevel, size) {
  const baseColor = COLORS[Math.floor(Math.random() * COLORS.length)]
  const differentIndex = Math.floor(Math.random() * size)
  const differentColor = getSimilarColor(baseColor, currentLevel)
  const difficulty = getDifficultyLevel(currentLevel)
  const squares = []
  for (let i = 0; i < size; i++) {
    squares.push(i === differentIndex ? differentColor : baseColor)
  }
  return { squares, differentIndex, difficultyName: difficulty.name }
}

export default function OjoDespertante() {
  const [phase, setPhase] = useState('difficulty') // 'difficulty' | 'playing' | 'over'
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(null)
  const [difficulty, setDifficulty] = useState('easy')
  const [finalScore, setFinalScore] = useState(0)

  const startGame = (key) => {
    const size = DIFFICULTIES[key].size
    setDifficulty(key)
    setLevel(1)
    setScore(0)
    setFinalScore(0)
    setRound(createRound(1, size))
    setPhase('playing')
  }

  const handleClick = (index) => {
    if (phase !== 'playing' || !round) return
    if (index === round.differentIndex) {
      const newScore = score + level * 10
      const newLevel = level + 1
      setScore(newScore)
      setLevel(newLevel)
      setRound(createRound(newLevel, DIFFICULTIES[difficulty].size))
    } else {
      setFinalScore(score)
      setPhase('over')
    }
  }

  return (
    <div className="ojo-wrap">
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Ojo de despertante</h1>
          <p className="page-sub">
            Pon a prueba tu elevación encontrando el cuadrado de distinto color.
          </p>
        </div>
      </header>

      <div className="ojo glass-panel">
        {phase === 'difficulty' && (
          <div>
            <p className="ojo-lead">
              Entre los cuadrados hay uno de color ligeramente distinto.
              Encuéntralo para subir de nivel y de elevación. Elige el tamaño
              de la cuadrícula según el reto que quieras.
            </p>
            <div className="ojo-difficulty">
              <p className="ojo-hint">Selecciona la dificultad</p>
              <div className="ojo-options">
                {Object.keys(DIFFICULTIES).map((key) => (
                  <button
                    key={key}
                    className="btn btn-primary"
                    onClick={() => startGame(key)}
                  >
                    {DIFFICULTIES[key].label}
                  </button>
                ))}
              </div>
            </div>
            <div className="ojo-console">
              <Link className="btn btn-ghost" to="/ocio/pasatiempos">
                Volver a Pasatiempos
              </Link>
            </div>
          </div>
        )}

        {phase === 'playing' && round && (
          <div>
            <div className="ojo-info">
              Nivel: <b>{level}</b>
            </div>
            <div className="ojo-score">
              Puntuación: <b>{score}</b>
            </div>
            <div className="ojo-difficulty">{round.difficultyName}</div>

            <div
              className="ojo-container"
              style={{
                gridTemplateColumns: `repeat(${DIFFICULTIES[difficulty].columns}, 1fr)`,
              }}
            >
              {round.squares.map((color, i) => (
                <div
                  key={`${level}-${i}`}
                  className="ojo-square"
                  style={{ backgroundColor: color }}
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>

            <div className="ojo-console">
              <Link className="btn btn-ghost" to="/ocio/pasatiempos">
                Volver a Pasatiempos
              </Link>
            </div>
          </div>
        )}

        {phase === 'over' && (
          <div>
            <div className="ojo-info">¡Perdiste!</div>
            <div className="ojo-score">
              Puntuación final: <b>{finalScore}</b>
            </div>
            <div className="ojo-score">Nivel alcanzado: <b>{level - 1}</b></div>
            <div className="ojo-console">
              <button className="btn btn-primary" onClick={() => setPhase('difficulty')}>
                Jugar de nuevo
              </button>
              <Link className="btn btn-ghost" to="/ocio/pasatiempos">
                Volver a Pasatiempos
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}