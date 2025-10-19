
// SLICK SLIDER 
$(document).ready(function(){
    $('.cases').slick({ 
        infinite: true,
        speed: 500, 
        slidesToShow: 1,
        vertical: true,
        nextArrow: '<button aria-label="Seta para o próximo" class="h-12 px-1 rounded-full btn-hover transition-all bottom-[calc(50%-55px)] w-fit -left-12 absolute"><svg  width="20" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;transform: rotate(-90deg);"><path d="M25 11H1M1 11L10.9474 1M1 11L10.9474 21" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
        prevArrow: '<button aria-label="Seta para o anterior" class="h-12 px-1 rounded-full btn-hover transition-all top-[calc(50%-55px)] w-fit -left-12 absolute"><svg width="20" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;transform: rotate(90deg);"><path d="M25 11H1M1 11L10.9474 1M1 11L10.9474 21" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
        responsive: [{
            breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true, 
                vertical: false,
                centerPadding: '5px',
                nextArrow: '<button aria-label="Seta para o próximo" class="border border-white px-4 py-1 rounded-full btn-hover transition-all bottom-0 m-auto w-fit right-[calc(50%-65px)] absolute"><svg  width="20" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;transform: scale(-1);"><path d="M25 11H1M1 11L10.9474 1M1 11L10.9474 21" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
                prevArrow: '<button aria-label="Seta para o anterior" class="border border-white px-4 py-1 rounded-full btn-hover transition-all bottom-0 m-auto w-fit left-[calc(50%-65px)] absolute"><svg width="20" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M25 11H1M1 11L10.9474 1M1 11L10.9474 21" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>'
            }
        }] 
    });
});