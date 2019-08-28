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

  $(".wood").click(function() {
    $("#woodShow").fadeToggle();
    $("#woodHide").fadeToggle();
  });

  $(".lake").click(function() {
    $("#lakeShow").slideToggle();
    $("#lakeHide").slideToggle();
  });

  $(".mountain").click(function() {
    $("#mountainShow").fadeToggle();
    $("#mountainHide").fadeToggle();
  });
});
