$(window).scroll(function(event){
  $("#logo-container").fadeOut(400,"swing",function() {
    $("#breadcumb").fadeIn();
  });
});
$("#hide").click(function(){
 $("#nav-mobile").attr("style","");
 $("#nav-mobile").toggleClass("kiri", 400, "swing");
 $("body").toggleClass("fixed-sidenav");
 $("#menu").toggleClass("show-on-large");
});
