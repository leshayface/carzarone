$(document).ready(function() {
  $('#container').fullpage({
    menu: '#menu',
		anchors: ['start', 'aboutCar', 'instantOffer', 'freeInspection', 'sameDay']
  });

  $("#home h3").fitText(0.8, { maxFontSize: '24px' });

  $("#make-model").focus(function(){
    console.log('yes');
    $(".form_container").children().removeClass("home_form_hidden");
    $(".form_container").children().children().removeClass("home_form_hidden");
  });

  $('.moveSectionDown').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });
});
