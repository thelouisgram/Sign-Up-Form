const root = document.documentElement;
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon')

moon.addEventListener('click', function(){
    root.classList.add('dark');
    sun.style.display = 'block'
    moon.style.display = 'none'
})

sun.addEventListener('click', function(){
    root.classList.remove('dark')
    sun.style.display = 'none'
    moon.style.display = 'block'
})