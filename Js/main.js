$(document).ready(function(){
    $(".job-slider").slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:
        "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:
        "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $(".job-slider-2").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });

    $(".first-one").mousemove(function(){
      $(".first-two").css({"background-color":"white"});
      $(".first-one").css({"background-color":"#0091ce"});
    });
    $(".first-one").mouseout(function(){
      $(".first-two").css({"background-color":"#0091ce"});
      $(".first-one").css({"background-color":"#4982f34b"});
    });

    
    $(".second-one").mousemove(function(){
      $(".second-two").css({"background-color":"white"});
      $(".second-one").css({"background-color":"#0091ce"});
    });
    $(".second-one").mouseout(function(){
      $(".second-one").css({"background-color":"#4982f34b"});
      $(".second-two").css({"background-color":"#0091ce"});
    });

    $(".third-one").mousemove(function(){
      $(".third-two").css({"background-color":"white"});
      $(".third-one").css({"background-color":"#0091ce"});
    });
    $(".third-one").mouseout(function(){
      $(".third-one").css({"background-color":"#4982f34b"});
      $(".third-two").css({"background-color":"#0091ce"});
    });

    $(".four-one").mousemove(function(){
      $(".four-two").css({"background-color":"white"});
      $(".four-one").css({"background-color":"#0091ce"});
    });
    $(".four-one").mouseout(function(){
      $(".four-one").css({"background-color":"#4982f34b"});
      $(".four-two").css({"background-color":"#0091ce"});
    });


    $(".five-one").mousemove(function(){
      $(".five-two").css({"background-color":"white"});
      $(".five-one").css({"background-color":"#0091ce"});
    });
    $(".five-one").mouseout(function(){
      $(".five-one").css({"background-color":"#4982f34b"});
      $(".five-two").css({"background-color":"#0091ce"});
    });


    $(".six-one").mousemove(function(){
      $(".six-two").css({"background-color":"white"});
      $(".six-one").css({"background-color":"#0091ce"});
    });
    $(".six-one").mouseout(function(){
      $(".six-one").css({"background-color":"#4982f34b"});
      $(".six-two").css({"background-color":"#0091ce"});
    });

});