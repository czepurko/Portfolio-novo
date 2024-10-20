const menuHamburger = document.querySelector('.menu-hamburger');
menuHamburger.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburger.classList.toggle('change');

    if (menuHamburger.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}

const scrollToTop = () => {
    window.scrollTo({
   top: 0,
   behavior: 'smooth'
    })
   }

   let trilho = document.getElementById('trilho')
   let body=document.querySelector('body')

   trilho.addEventListener('click',()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
   })