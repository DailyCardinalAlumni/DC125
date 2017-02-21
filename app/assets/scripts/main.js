console.log('It is the time you have wasted for your rose that makes your rose so important.')

var hamburger = document.querySelector('.collecticon-hamburger-menu')
var burgerInsides = document.querySelector('.sub-menu')

hamburger.addEventListener('click', function () {
  if (burgerInsides.classList.contains('hidden') || burgerInsides.classList.contains('fadeOut')) {
    burgerInsides.className = ('sub-menu fadeIn')
  } else {
    burgerInsides.className = ('sub-menu fadeOut')
  }
})
