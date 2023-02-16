const root = document.documentElement;
const sun = document.querySelector('.sun');
const mode = document.querySelector('#check')

mode.addEventListener('click', function(){
    if (root.classList.contains('dark')){
    root.classList.remove('dark')
    }else{
  root.classList.add('dark')  
    }
})
