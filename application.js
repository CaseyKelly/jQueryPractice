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

  $("button#up").click(function() {
    $("p").slideUp();
  });

  $("ul").click(function() {
    $("li:nth-child(1)").css("color", "red")
    $("li:nth-child(2)").css("color", "green")
    $("li:nth-child(3)").css("color", "blue")
  });

});
