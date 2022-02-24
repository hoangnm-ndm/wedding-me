$(window).on("load", function(){

  // home section slideshow
  let slideIndex = $(".slide.active").index();
  const slideLength = $(".slide").length;
  function slideShow() {
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    if(slideIndex == slideLength-1) {
      slideIndex = 0;
    }
    else {
      slideIndex++;
    }
    setTimeout(slideShow, 5000);
  }

  slideShow();

})
