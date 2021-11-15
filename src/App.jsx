import { For, Show, createEffect } from 'solid-js'
import { grid, gameState  } from './signals'
import Spinner from './components/Spinner'
import Modal from './components/Modal'
import calculateMovement from './utils/calculateMovement'
import checkTiles from './utils/checkTiles'
import movePlayer from './utils/movePlayer'
import initEasyStar from './utils/initEasyStar'
import { state } from './store'

const App = () => {
  initEasyStar()

  createEffect(() => {
    if (gameState() === 'move') {
      calculateMovement()
    }
  })

  return (
    <main id="main">
      <h1>Keravan tähti</h1>
      <p>Vuorossa: {state.players[state.currentPlayer].name}</p>
      <Show when={gameState() === 'spin'}>
        <Modal>
          <Spinner />
        </Modal>
      </Show>
      <For each={grid()}>
        {(row, rowIndex) => (
          <div class="row">
            <For each={row}>
              {(tile, tileIndex) => {
                return (
                  <button
                    disabled={tile === 0}
                    class={`tile ${checkTiles(tileIndex(), rowIndex())}`}
                    onClick={() => movePlayer(tileIndex(), rowIndex(), tile)}
                  >
                    {tile}
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
