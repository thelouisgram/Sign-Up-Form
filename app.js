export default selectMode;


const root = document.documentElement;
export const mode = document.querySelector('#check');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function selectMode(){
    if (prefersDarkScheme.matches){
      root.classList.toggle("light");
    } else {
      root.classList.toggle("dark");
    }
}
