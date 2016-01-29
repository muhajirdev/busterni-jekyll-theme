$(window).scroll(function(event){
  $("#logo-container").fadeIn();
  $(".navbar-fixed nav").removeClass("z-depth-0");
})
$( ".courses > div" ).hover(
  function() {
    $( ".courses ").addClass ( "z-depth-0");
  }, function() {
    $( ".courses").removeClass ("z-depth-0")
  }
);
