import easystarjs from 'easystarjs'

export const gridInit = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

const tilesArray = []

gridInit.map((x, indexX) => {
  x.map((y, indexY) => {
    if (y !== 0) tilesArray.push([indexX, indexY])
  })
})


export const acceptableTiles = [1, 2, 3]
export const tiles = tilesArray
export const easystar = new easystarjs.js()
