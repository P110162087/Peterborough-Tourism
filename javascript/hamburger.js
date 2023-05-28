
const span = document.querySelectorAll('span')
const a = document.querySelector('a')
const toggleClass = () => {
  for(let i = 0; i < span.length; i++) {
    span[i].classList.toggle('active')
  }
}


a.addEventListener(
  'click',
  toggleClass
)