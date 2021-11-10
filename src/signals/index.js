import { createSignal } from 'solid-js'
import { initGrid } from '../config'

export const [move, setMove] = createSignal([])
export const [position, setPosition] = createSignal({ x: 0, y: 0 })
export const [steps, setSteps] = createSignal()
export const [grid, setGrid] = createSignal(initGrid)
