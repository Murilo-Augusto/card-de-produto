const button360 = document.getElementById('button-360')
const buttonClose = document.getElementById('button-close')
const productImage = document.getElementById('product-image')

button360.addEventListener('click', () => {
  toggleButton()
  productImage.src = './assets/sofa.gif'
})

buttonClose.addEventListener('click', () => {
  toggleButton()
  productImage.src = './assets/sofa.png'
})

function toggleButton() {
  buttonClose.classList.toggle('hide')
  button360.classList.toggle('hide')
}