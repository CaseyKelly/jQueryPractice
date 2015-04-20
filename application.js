$(document).ready(function(){
  $('.red').hover(function () {
    $(this).toggleClass('green');
  });

  $("button#btn-bg").click(function() {
    $("body").toggleClass("bg")
  });

  $("body").dblclick(function() {
    alert( "DOUBLE CLICK!!!!" );
  });

  $("img#hotdog").click(function() {
    for (i = 0; i < 1000; i++) {
      $(this).clone().insertAfter(this);
    }
  });

  
});
