import { createStore } from 'solid-js/store'

const storeInit = {
  players: [
    {
      id: 0,
      name: 'Heikki',
      points: '3',
      position: {
        x: 0,
        y: 0
      },
      hasJallu: false,
      hasTaxi: false,
      color: 'green'
    },
    {
      id: 1,
      name: 'Tuomas',
      points: '3',
      position: {
        x: 6,
        y: 0
      },
      hasJallu: false,
      hasTaxi: false,
      color: 'purple'
    },
    {
      id: 2,
      name: 'Riku',
      points: '3',
      position: {
        x: 9,
        y: 0
      },
      hasJallu: false,
      hasTaxi: false,
      color: 'blue'
    }
  ],
  currentPlayer: 0
}

export const [state, setState] = createStore(storeInit)

