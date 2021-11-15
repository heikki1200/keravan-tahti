import { createSignal } from 'solid-js'
import { gridInit } from '../config'

export const [move, setMove] = createSignal([])
export const changeMove = value => setMove(value)

// export const [position, setPosition] = createSignal({ x: 0, y: 0 })
// export const changePosition = value => setPosition(value)

export const [steps, setSteps] = createSignal(0)
export const changeSteps = value => setSteps(value)

export const [grid, setGrid] = createSignal(gridInit)
export const changeGrid = value => setGrid(value)

export const [gameState, setGameState] = createSignal('spin')
export const changeGameState = (value, timeOut = 1000) => {
  setTimeout(() => {
    setGameState(value)
  }, timeOut)
}
