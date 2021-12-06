const toggleTheme = () => {
  document.querySelector('.toggle-dark-mode').innerHTML = `
  <span><i class="fas fa-moon fa-rotate-100">Dark mode</i></span>
  `

  const toggleDark = document.querySelector('.fa-moon');
  toggleDark.addEventListener('click', () => {
    toggleDark.innerHTML = `<i class="fas fa-sun">Light mode</i>`
    const element = document.body;
    element.classList.toggle('dark-mode')
})
  }

export default toggleTheme;