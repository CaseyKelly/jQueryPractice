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
});
