/*abre e fecha*/
let nav =document.querySelector('#header nav')
let toggle =document.querySelectorAll('nav .toggle')

for(const elemant of toggle){
    elemant.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}
/* Quando lolar a pagina aparece a sombra*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if (window.scrollY >= navHeight){

        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
})

/*============== slider ===============*/

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    Keyboard: true,
    breakpoints: {
        767:{
            slidesPerView:2,
            setWrapperSize: true
        }
    }
  })

  /*====================contastante================*/

  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '40px',
      duration: 700,
      reset: true
  })
  scrollReveal.reveal(
    `#homerr .image, #homerr .text,
      #about .image, #about .text,
      #curiosity .container, #curiosity .title,
      #family .heades, family .container,
      #contact .text, #contact .links
     `, {interval:100}
     )

     /*menu ativo conforme a pagina */
        const sections = document.querySelectorAll('main section[id]')
     function activateMenuAtCurrentSection(){
            const checkpoint = window.pageYOffset +(window.innerHeight / 8  ) * 4

            for (const section of sections ){
                const sectionTop = section.offsetTop
                const sectionHeigth = section.offsetHeight
                const sectionId = section.getATTribute('id')

                const checkpointStart = checkpoint >=sectionTop
                const checkpointEnd = checkpoint <= sectionTop + sectionHeigth

                if (checkpointStart && checkpointEnd){
                    document.querySelector('nav ul li a [href*=' + sectionId +']')
                    document.classList.remove('active')
                }
            }
     }

        window.addEventListener('scroll', function(){
             changeHeaderWhenScroll()
             backToTop()
             activateMenuAtCurrentSection()
            })