const imgSlider = document.querySelector('.img-slider')
const imgFruits = document.querySelectorAll('.img-item.fruit')
const infoBox = document.querySelector('.info-box')
const infoSlider = document.querySelector('.info-slider')
const bgs = document.querySelectorAll('.bg')

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

let indexSlider = 0
let index = 0
let direction

nextBtn.addEventListener('click', () => {
  indexSlider++
  imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`

  index++
  if (index > imgFruits.length - 1) {
    index = 0
  }

  document.querySelector('.fruit.active').classList.remove('active')
  imgFruits[index].classList.add('active')

  document.querySelector('.bg.active').classList.remove('active')
  bgs[index].classList.add('active')

  if (direction == 1) {
    infoSlider.prepend(infoSlider.lastElementChild)
  }

  direction = -1

  infoBox.style.justifyContent = 'flex-start'
  infoSlider.style.transform = 'translateY(-25%)'
})

prevBtn.addEventListener('click', () => {
  indexSlider--
  imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`

  index--
  if (index < 0) {
    index = imgFruits.length - 1
  }

  document.querySelector('.fruit.active').classList.remove('active')
  imgFruits[index].classList.add('active')

  document.querySelector('.bg.active').classList.remove('active')
  bgs[index].classList.add('active')

  if (direction == -1) {
    infoSlider.appendChild(infoSlider.firstElementChild)
  }

  direction = 1

  infoBox.style.justifyContent = 'flex-end'
  infoSlider.style.transform = 'translateY(25%)'
})

infoSlider.addEventListener('transitionend', () => {
  if (direction == -1) {
    infoSlider.appendChild(infoSlider.firstElementChild)
  } else if (direction == 1) {
    infoSlider.prepend(infoSlider.lastElementChild)
  }

  infoSlider.style.transition = 'none'
  infoSlider.style.transform = 'translateY(0)'

  setTimeout(() => {
    infoSlider.style.transition = '.5s cubic-bezier(0.645, 0.045, 0.355, 1)'
  })
})
