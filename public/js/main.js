// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let img = document.getElementById('image');
let abrir = document.getElementById('open');
let botones = document.getElementById('btn-header');
let cerrado = true;

function menus(){
   let Desplazamiento_Actual = window.pageYOffset;

   if(Desplazamiento_Actual <= 500){
      nav.classList.remove('nav2');
      nav.className = ('nav1');
      img.src = '/images/logo_transparent.png';
      nav.style.transition = '1s';
      menu.style.top = '90px';
      abrir.style.color = '#fff';

   }else{
      nav.classList.remove('nav1');
      nav.className = ('nav2');
      img.src = '/images/logo_transparentnegro.png';
      nav.style.transition = '1s';
      menu.style.top = '90px';
      abrir.style.color = '#000';
   }
}

function apertura(){
   if(cerrado){
      menu.style.width = '70vw';
      cerrado = false;
   }else{
      menu.style.width = '0%';
      menu.style.overflow = 'hidden';
      cerrado = true;
   }
}

window.addEventListener('load', function(){
   menus();
});
window.addEventListener('click', function(e){
   if(cerrado==false){
      let span = document.querySelector('span');
      if(e.target !== span && e.target !== abrir){
         menu.style.width = '0%';
         menu.style.overflow = 'hidden';
         cerrado = true;
      }
   }
});

window.addEventListener('scroll', function(){
   console.log(this.window.pageYOffset);
   console.log(img);
   menus();
});
window.addEventListener('resize', function(){
   if(screen.width>=700){
      cerrado = true;
      menu.style.removeProperty('overflow');
      menu.style.removeProperty('width');
   }
})
abrir.addEventListener('click', function(){
   apertura();
});