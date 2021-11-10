import { For } from 'solid-js'
import flattenDeep from 'lodash/flattenDeep'
import uniqWith from 'lodash/uniqWith'
import isEqual from 'lodash/isEqual'
import find from 'lodash/find'
import sample from 'lodash/sample'
import { easystar, hqs, acceptableTiles } from './config'
import {
  position,
  setPosition,
  move,
  setMove,
  steps,
  setSteps,
  grid,
  setGrid
} from './signals'

const App = () => {
  easystar.setGrid(grid())
  easystar.setAcceptableTiles(acceptableTiles)
  easystar.setIterationsPerCalculation(1000)

  const calculateMovement = () => {
    const availableTiles = []
    setSteps(sample([2, 3, 4, 5, 6 ,7]))

    hqs.map(x => {
      easystar.findPath(position().x, position().y, x[0], x[1], path => {
        if (path === null || !path.length) {
          return
        } else {
          availableTiles.push(path.slice(0, steps()))
          setMove(uniqWith(flattenDeep(availableTiles), isEqual))
        }
      })
    })
    easystar.calculate()
  }

  calculateMovement()

  const checkMovement = (rowIndex, cellIndex) => {
    const object = {
      x: rowIndex,
      y: cellIndex
    }

    if (isEqual(object, position())) {
      return 'current'
    }

    if (find(move(), object)) {
      return 'move'
    }
  }

  const movePlayer = (rowIndex, cellIndex, cellValue) => {
    const object = {
      x: rowIndex,
      y: cellIndex
    }

    setPosition(object)
    console.log(cellValue)
    const updatedGrid = grid()
    setGrid([])
    updatedGrid[rowIndex][cellIndex] = 1
    setGrid((updatedGrid))
    calculateMovement()
  }

  return (
    <main id="main">
      <h1>Keravan tähti</h1>
      <p>Steps {steps() - 1}</p>
      <For each={grid()}>
        {(row, rowIndex) => (
          <div class="row">
            <For each={row}>
              {(cell, cellIndex) => {
                return (
                  <button
                    disabled={cell === 0}
                    class={checkMovement(rowIndex(), cellIndex())}
                    onClick={() => movePlayer(rowIndex(), cellIndex(), cell)}
                  >
                    {cell}
                  </button>
                )
              }}
            </For>
          </div>
        )}
      </For>
    </main>
  )
}

export default App
