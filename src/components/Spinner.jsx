import { onMount } from 'solid-js'
import koff from '../assets/koff.png'
import { steps, changeSteps, changeGameState } from '../signals'

const Spinner = () => {
  let bottleImg
  let spinBtn

  onMount(() => {
    let deg

    spinBtn.addEventListener('click', () => {
      deg = Math.floor(2000 + Math.random() * 2000)
      spinBtn.style.pointerEvents = 'none'
      bottleImg.classList.add('blur')
      bottleImg.style.transition = 'all 2s ease-out'
      bottleImg.style.transform = `rotate(${deg}deg)`
    })

    bottleImg.addEventListener('transitionend', () => {
      const actualDeg = deg % 360
      bottleImg.classList.remove('blur')
      bottleImg.style.transition = 'none'
      bottleImg.style.transform = `rotate(${actualDeg}deg)`

      for (let i = 0; i < 6; i++) {
        if (actualDeg >= i * 60 && actualDeg < (i + 1) * 60) {
          changeSteps(i + 1)
        }
      }

      changeGameState('move')
    })
  })

  return (
    <div class="spinner">
      <div class="spinner--item spinner--item__1">1.</div>
      <div class="spinner--item spinner--item__2">2.</div>
      <div class="spinner--item spinner--item__3">3.</div>
      <div class="spinner--item spinner--item__4">4.</div>
      <div class="spinner--item spinner--item__5">5.</div>
      <div class="spinner--item spinner--item__6">6.</div>
      <img ref={bottleImg} src={koff} alt="Koff" class="bottle" />
      <div class="actions">
        <button ref={spinBtn} class="spin--btn">Pyöräytä</button>
        <p>
          {steps() > 0 && `Steps: ${steps()}`}
        </p>
      </div>
    </div>
  )
}

export default Spinner
