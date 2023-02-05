var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-dark', 'shadow');

    }else{
        nav.classList.remove('bg-dark', 'shadow'); 
    }
});

$('#mainslider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#tourpackage .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


