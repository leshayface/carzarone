$(document).ready(function() {
  $('#container').fullpage({
  });

  $("#home h3").fitText(0.8, { maxFontSize: '24px' });

  $('.moveSectionDown').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });
});
