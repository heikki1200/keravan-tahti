import isEqual from 'lodash/isEqual'
import find from 'lodash/find'
import { move } from '../signals'
import { state } from '../store'

const checkTiles = (tile, row) => {
  const { players, currentPlayer } = state

  const object = {
    x: tile,
    y: row
  }

  for (let i = 0; i < players.length; i++) {
    if (isEqual(object, players[i].position)) {
      if (players[i].position === players[currentPlayer].position) {
        return `${players[i].color}`
      }
      return players[i].color
    }

    if (find(move(), object)) {
      if (isEqual(object, players[currentPlayer].position)) {
        return `${players[currentPlayer].color}`
      }
      return 'move'
    }
  }

  return 'default'
}

export default checkTiles
