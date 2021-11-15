import { grid, changeSteps, changeGrid, changeGameState } from '../signals'
import { state, setState } from '../store'
import nextPlayer from './nextPlayer'

const movePlayer = (tile, row, value) => {
  const { currentPlayer } = state
  const object = {
    x: tile,
    y: row
  }
  const updatedGrid = grid()
  updatedGrid[row][tile] = 1

  setState('players', currentPlayer, 'position', object)
  changeSteps(0)
  changeGrid([])
  changeGrid((updatedGrid))

  if (value !== 1) {
    // changeGameState('spin')
    // nextPlayer()
    return
  }

  changeGameState('spin')

  nextPlayer()
}

export default movePlayer
