const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    
    const windowHeight = window.innerHeight;
    
    const elementTop = reveals[i].getBoundingClientRect().top;
    
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('reveal_active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();