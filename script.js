const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
});

const mobileMenu = document.querySelector("#mobileLinks");
const mobileMenuBtn = document.querySelector(".hamburger-menu");
const mobileMenuBg = document.querySelector(".bg-overlay");

mobileMenuBg.addEventListener("click", () => {
        mobileMenuBg.classList.add("display-none");
        mobileMenu.classList.add("display-none");
        hamMenu.classList.toggle('active');
        mobileMenu.classList.add("menu-out")
        mobileMenu.classList.remove("menu-in")
});

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu-out");
    mobileMenu.classList.toggle("menu-in");
    if (mobileMenu.classList.contains("menu-out")) {
        mobileMenuBg.classList.add("display-none");
        mobileMenu.classList.add("display-none");
    } else {
        mobileMenu.classList.remove("display-none");
        mobileMenuBg.classList.remove("display-none");

    }
});
  
window.addEventListener("resize", () => {
    if (window.innerWidth = 834) {
        mobileMenu.classList.add("menu-out");
        mobileMenu.classList.remove("menu-in");
        mobileMenuBg.classList.add("display-none");
        mobileMenu.classList.add("display-none");
        hamMenu.classList.remove('active');
    }
    else{
        mobileMenu.classList.remove("display-none");
    }
});



const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('click', slideToggle)
});

function slideToggle(e){
    // e.preventDefault();
    let slideCard = this.firstElementChild;

    if(e.target.classList.contains('btn-right-one')){
        slideCard.classList.add('slideRight');
    }

    if(e.target.classList.contains('btn-right-two')){
        slideCard.classList.add('slideRightTwo');
    }
}


