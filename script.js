$(document).ready(function () {
  // Adiciona ou remove a classe 'sticky' na navbar com base no scroll
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // Exibe ou oculta o botão de rolar para cima
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // Função para rolar a página para o topo ao clicar no botão
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 }, 'slow');
    // Remove o comportamento de rolagem suave após clicar no botão
    $('html').css("scrollBehavior", "auto");
  });

  // Ativa a rolagem suave ao clicar em um link do menu
  $('.navbar .menu li a').click(function () {
    $('html').css("scrollBehavior", "smooth");
  });

  // Alterna o menu responsivo ao clicar no botão de menu
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // Configuração do efeito de digitação automática (Typed.js)
  new Typed(".typing", {
    strings: ["Fullstack Developer", "Freelancer", "", ""],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Configuração do carrossel (Owl Carousel)
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});