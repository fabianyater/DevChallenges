const toggle = document.getElementsByClassName('toggle')
const enlaces = document.getElementsByClassName('option')

toggle.addEventListener('click', () => {
  console.log("hhshds");
  enlaces.classList.toggle('activado')
  toggle.classList.toggle('spin')
})