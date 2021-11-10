// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const bottle = document.querySelector('.bottle')
  const startButton = document.querySelector('.button')
  let deg

  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none'
    deg = Math.floor(2500 + Math.random() * 2500)
    bottle.style.transition = 'all 3s ease-out'
    bottle.style.transform = `rotate(${deg}deg)`
    bottle.classList.add('blur')
  })

  bottle.addEventListener('transitionend', () => {
    bottle.classList.remove('blur')
    startButton.style.pointerEvents = 'auto'
    bottle.style.transition = 'none'
    const actualDeg = deg % 360
    bottle.style.transform = `rotate(${actualDeg}deg)`
    console.log('bottle', bottle, actualDeg)
  })
})()
