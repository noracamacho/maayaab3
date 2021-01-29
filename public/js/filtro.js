$(function(){
   $('.filter').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      let valor = $(this).attr('data-nombre');
      if(valor == 'todos'){
         $('.cont-work').show('1000');
      }else{
         $('.cont-work').not('.'+ valor).hide('1000');
         $('.cont-work').filter('.'+ valor).show('1000');
      }

   });

   let equipo = $('#equipo').offset().top;
   let servicio = $('#servicio').offset().top;
   let trabajo = $('#trabajo').offset().top;
   let contacto = $('#contacto').offset().top;
   let siguenos = $('#siguenos').offset().top;

   window.addEventListener('resize', function(){
      let equipo = $('#equipo').offset().top;
      let servicio = $('#servicio').offset().top;
      let trabajo = $('#trabajo').offset().top;
      let contacto = $('#contacto').offset().top;
      let siguenos = $('#siguenos').offset().top;

   });

   $('#enlace-inicio').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 600);

   });
   $('#enlace-equipo').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: equipo - 70
      }, 600);

   });
   $('#enlace-servicio').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: servicio - 85
      }, 600);

   });
   $('#enlace-trabajo').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
         scrollTop: trabajo - 29
      }, 600);

   });
   $('#enlace-contacto').on('click', function(e){
      e.preventDefault();
      $('.cont-work').show('1000');
      $( "li[data-nombre|='todos']" ).addClass('active').siblings().removeClass('active');
      $('html, body').animate({
         scrollTop: contacto - 30
      }, 600);

   });
   $('#enlace-siguenos').on('click', function(e){
      e.preventDefault();
      $( "li[data-nombre|='todos']" ).addClass('active').siblings().removeClass('active');
      $('.cont-work').show('1000');
      $('todos').addClass('active').siblings().removeClass('active');
      $('html, body').animate({
         scrollTop: siguenos - 70
      }, 600);

   });
});