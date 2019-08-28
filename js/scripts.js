$(document).ready(function() {
  $(".pop").click(function() {
    $("#pineShow").toggle();
    $("#pineHide").toggle();
  });

  $(".clickable").click(function() {
    $("#strawShow").fadeToggle();
    $("#strawHide").fadeToggle();
  });

  $(".waterClick").click(function() {
    $("#waterShow").toggle();
    $("#waterHide").toggle();
  });
});
