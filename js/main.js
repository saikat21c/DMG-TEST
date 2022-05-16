// slider js
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        // when window width is <= 499px
        767: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
    }
  });

  
// counter number
  $(".clickBtn").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    $button.blur();
    if ($button.hasClass("inc")) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
     // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
  
    $button.parent().find("input").val(newVal);
  
  });


  