import { easystar, acceptableTiles } from '../config'
import { grid } from '../signals'

const initEasyStar = () => {
  easystar.setGrid(grid())
  easystar.setAcceptableTiles(acceptableTiles)
  easystar.setIterationsPerCalculation(1000)
}

export default initEasyStar
