document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        const firstBlock = document.getElementById('first-block');
        const scrollToTop = document.getElementById('scroll-to-top');
    
        if (firstBlock) {
            const rect = firstBlock.getBoundingClientRect();
            const isPastFirstBlock = rect.bottom < 0;
    
            if (isPastFirstBlock) {
                scrollToTop.classList.remove('hidden');
            } else {
                scrollToTop.classList.add('hidden');
            }
        }
    });
    
    $('#go-to-cases').on('click', function(event) {
        event.preventDefault();  
        
        var blockCases = $('#competencias');
        $('html, body').animate({
            scrollTop: blockCases.offset().top - 100
        }, 1000); 
    });

    $('.menu-topo').on('click', function() {
        var bloco = $(this).data('bloco');   
        $('html, body').animate({
            scrollTop: $("#"+bloco).offset().top
        }, 1000); 
    });
     

    $('#scroll-to-top').on('click', function() { 
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000); 
    });

    if (window.innerWidth > 700){
        function changeCase(element){
            $('.cases').slick('slickGoTo', element.getAttribute('data-index')); 
            
            var abrirCase = document.getElementById('abrir-case');
            abrirCase.setAttribute('href', element.getAttribute('data-url')); 
            
            const plataformas = element.getAttribute('data-plataforma').split(',');
            const platformImages = document.querySelectorAll('#plataformas-de-cases img[data-plataforma]');
            platformImages.forEach(img => img.classList.add('hidden')); 
            plataformas.forEach(plataforma => {
                const platformImg = document.querySelector(`#plataformas-de-cases img[data-plataforma="${plataforma}"]`);
                if (platformImg) {
                    platformImg.classList.remove('hidden');
                }
            });

            document.querySelectorAll('.bg-cases-hover').forEach(function(el) {
                el.classList.remove('active');
            }); 
            element.classList.add('active');
        }
        window.changeCase = changeCase;

        $('.cases').on('afterChange', function(event, slick, currentSlide) { 
            const activeElement = document.querySelector(`.bg-cases-hover[data-index="${currentSlide}"]`);
            if (activeElement) {
                activeElement.click();
            }
        });
        
        $('.cases').on('wheel', function(e) {
            e.preventDefault(); 
            if (e.originalEvent.deltaY > 0) {
                $('.cases').slick('slickNext');
            } else {
                $('.cases').slick('slickPrev');
            }
        });
    }

        
    const tempo_intervalo = 5;
    const tempo = 2000;

    const contadorAnos = document.getElementById('cont-anos');
    const contadorProjetos = document.getElementById('cont-projetos');
    const contadorCertificados = document.getElementById('cont-certificados');

    if (contadorAnos && contadorProjetos && contadorCertificados) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    iniciarContador(contadorAnos, parseInt(contadorAnos.getAttribute('data-valor')));
                    iniciarContador(contadorProjetos, parseInt(contadorProjetos.getAttribute('data-valor')));
                    iniciarContador(contadorCertificados, parseInt(contadorCertificados.getAttribute('data-valor')));
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(contadorAnos);
        observer.observe(contadorProjetos);
        observer.observe(contadorCertificados);
    } 

    function iniciarContador(elemento, countTo) {
        let intervalos = tempo / tempo_intervalo;
        let incremento = countTo / intervalos;
        let valor = 0;

        let timer = setInterval(function() {
            if (valor >= countTo) {
                valor = countTo;
                clearInterval(timer);
            }

            let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            elemento.textContent = texto;
            valor += incremento;
        }, tempo_intervalo);
    } 



    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target; 
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      }, observerOptions);

      document.querySelectorAll(".lazyload").forEach(img => {
        observer.observe(img);
      });
});