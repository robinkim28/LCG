// function cycleImages(){
//       var $active = $('#background_cycler .active');
//       var $next = ($('#background_cycler .active').next().length > 0) ? $('#background_cycler .active').next() : $('#background_cycler img:first');
//       $next.css('z-index',2);//move the next image up the pile
//     $active.fadeOut(1500,function(){//fade out the top image
//     $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
//       $next.css('z-index',3).addClass('active');//make the next image the top one
//       });
//     }

//     $(window).load(function(){
//     $('#background_cycler').fadeIn(1500);//fade the background back in once all the images are loaded
//       // run every 7s
//       setInterval('cycleImages()', 7000);
//     })

$(document).ready(function () {
  // Cycler={};
  // Cycler.src=['../img/header.jpg', '../img/logo/LCGlogo.png', '../img/people/NasheyaRahman.png'];
  // Cycler.cur=0;
  // Cycler.cycle=function() {
  //   if(++Cycler.cur>=Cycler.src.length) {
  //     Cycler.cur=0;
  //   }

  //   $('header').css('background-image', 'url('+ Cycler.src[Cycler.cur] +')');
  //   setTimeout(Cycler.cycle, 5000);//5 seconds
  // }

  // Cycler.cycle();
  
    $('.single-item').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

  
});



