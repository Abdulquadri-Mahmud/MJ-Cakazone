$(document).ready(() => {
    $('.cakes-cont').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<button class="next"> < </button>',
        prevArrow: '<button class="prev"> > </button>',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
    
    $('.client-cont').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    
    let menubtn = $('.menubtn');
    let closebtn = $('.closebtn');
    let sidebar_cont = $('.sidebar-cont');
    
    menubtn.on('click', () => {
      console.log(sidebar_cont);
      $('.sidebar-cont').css({height: '60%'});
    });
    
    closebtn.on('click', () => {
      console.log(sidebar_cont);
      $('.sidebar-cont').css({height: '0%'});
    });


    const birthday = $('.bt');
    const wedding = $('.wd');
    const custom = $('.cs');

    birthday.on('click', () => {
      console.log('clicked');
    })

});
