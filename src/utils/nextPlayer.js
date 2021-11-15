import { state, setState } from '../store'

const nextPlayer = () => {
  const { players, currentPlayer } = state

  if (currentPlayer === players.length - 1) {
    setState('currentPlayer', 0)
  } else {
    setState('currentPlayer', x => x + 1)
  }
}

export default nextPlayer
