import { easystar, tiles } from '../config'
import { changeMove, steps } from '../signals'
import { state } from '../store'
import uniqWith from 'lodash/uniqWith'
import flattenDeep from 'lodash/flattenDeep'
import isEqual from 'lodash/isEqual'

const calculateMovement = () => {
  const availableTiles = []
  const { players, currentPlayer } = state

  tiles.map(tile => {
    easystar.findPath(players[currentPlayer].position.x, players[currentPlayer].position.y, tile[0], tile[1], path => {
      if (path === null || !path.length) {
        return
      } else {
        availableTiles.push(path.slice(0, steps() + 1))
        changeMove(uniqWith(flattenDeep(availableTiles), isEqual))
      }
    })
  })
  easystar.calculate()
}

export default calculateMovement
