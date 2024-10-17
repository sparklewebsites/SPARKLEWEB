/* var linktree = document.getElementsByTagName("button")[2];

var button = document.getElementById("button-get")[2];

var condicao = true;

linktree.addEventListener('mouseover', function (){
  setTimeout(() => {
    linktree.style.background = 'linear-gradient(to right, #d96526, #ff9100)'
    linktree.style.border = '1px solid #ff9100';
    linktree.style.color = 'black';
  }, 400)

  
  
})
linktree.addEventListener('mouseout', function() {

  setTimeout(() => {
    linktree.style.color = '#ff9100';
    linktree.style.background = 'transparent'
    
  }, 100)
}); */


// button.addEventListener('mouseover', function (){

//   setTimeout(() => {
//     button.style.background = 'transparent'
//     button.style.border = '1px solid #d96526';
//   }, 1000)
// })
// button.addEventListener('mouseout', function() {

//   setTimeout(() => {
//     button.style.background = 'transparent'
//     button.style.border = 'none';

//   }, 1000)
// });



const open = document.querySelector(".menu-icon");
const close = document.querySelector(".btn-fechar");
const menu = document.querySelector(".menu-mobile");
const back = document.querySelector(".overlay");
let isMenuOpen = false;

open.addEventListener('click', () => { 
    menu.classList.add('abrir-menu');
    isMenuOpen = true;
});

menu.addEventListener('click', () => { 
    menu.classList.remove('abrir-menu');
    isMenuOpen = false;
});

back.addEventListener('click', () => { 
    menu.classList.remove('abrir-menu');
    isMenuOpen = false;
});