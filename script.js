


const menu = document.querySelector(".menu")
const menuClose = document.querySelector(".menu-close")
const navUl = document.querySelector(".nav-ul")

const navLinks = document.querySelectorAll(".nav-link")

const navAudio = document.querySelector(".nav-audio")
const navNoAudio = document.querySelector(".nav-no-audio")
const navAudioMusic = document.querySelector(".nav-audio-music")

// ---Hamburger Menu---
menu.addEventListener("click", () => {
    menu.classList.toggle("hide")
    menuClose.classList.toggle("show")
    navUl.classList.toggle("nav-ul-show") //Class enabled will transformX(0) from transformX(-100%)
})

menuClose.addEventListener("click", () => {
    menuClose.classList.toggle("show")
    menu.classList.toggle("hide")
    navUl.classList.toggle("nav-ul-show")
})


// ---Nav Link button for mobile---
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        menuClose.classList.toggle("show")
        menu.classList.toggle("hide")
        navUl.classList.toggle("nav-ul-show")
    })
})

document.querySelector('.nav-login').addEventListener('click', () => {
    window.location.href = '#footer';
});





// ---Audio Menu---
navAudio.addEventListener("click", () => {
  navAudio.classList.toggle("hide-audio")
  navNoAudio.classList.toggle("show-audio")

//   navAudioMusic.paused ? navAudioMusic.play() : navAudioMusic.pause();
    navAudioMusic.pause()
})

navNoAudio.addEventListener("click", () => {
  navNoAudio.classList.toggle("show-audio")
  navAudio.classList.toggle("hide-audio")

//   navAudioMusic.paused ? navAudioMusic.play() : navAudioMusic.pause();
  navAudioMusic.play()
})




const seeMore = document.querySelector(".project-carousel-seeMore-btn")
const seeLess = document.querySelector(".project-carousel-seeLess-btn")
const projectCarousel = document.querySelector(".project-carousel")

seeMore.addEventListener("click", () => {
    seeMore.classList.toggle("hide-btn")
    seeLess.classList.toggle("show-btn")
    projectCarousel.classList.toggle("project-carousel-expand")
})


seeLess.addEventListener("click", () => {
    seeMore.classList.toggle("hide-btn")
    seeLess.classList.toggle("show-btn")
    projectCarousel.classList.toggle("project-carousel-expand")
})













// const projectNext = document.querySelector(".project-next")
// const projectPrev = document.querySelector(".project-prev")

// projectPrev.addEventListener("click", (e) => {
//     // projectCarousel.style.transform = "translateX(-410px)"
//     // projectCarousel.classList.toggle("project-move-back")

//     projectCarousel.style.transform = "translateX(410px)"
// })

// projectNext.addEventListener("click", () => {
//     projectCarousel.classList.toggle("project-move")
// })


// const projectCarousel = document.querySelector('.project-carousel');




// const prevBtn = document.querySelector('.project-prev');
// const nextBtn = document.querySelector('.project-next');
// const projectImgWidth = document.querySelector('.project-img').offsetWidth + 10; // Consider margin

// let currentPosition = 0;

// function moveCarousel(direction) {
//   if (direction === 'prev') {
//     currentPosition += projectImgWidth;
//   } else {
//     currentPosition -= projectImgWidth;
//   }

//   projectCarousel.style.transform = `translateX(${currentPosition}px)`;
  
//   updateButtonVisibility();
// }

// function updateButtonVisibility() {
//   const isAtStart = currentPosition === 0;
//   const isAtEnd = currentPosition <= -(projectImgWidth * (projectCarousel.childElementCount - 3)); // Adjust for margin and display 3 items

//   prevBtn.disabled = isAtStart;
//   nextBtn.disabled = isAtEnd;
// }

// prevBtn.addEventListener('click', () => moveCarousel('prev'));
// nextBtn.addEventListener('click', () => moveCarousel('next'));

// // Update button visibility on window resize
// window.addEventListener('resize', () => {
//   projectImgWidth = document.querySelector('.project-img').offsetWidth + 10; // Adjust for margin
//   updateButtonVisibility();
// });







const prevBtn = document.querySelector('.project-prev');
const nextBtn = document.querySelector('.project-next');
// const projectCarousel = document.querySelector('.project-carousel');
const projectImgWidth = document.querySelector('.project-img').offsetWidth + 10; // Consider margin

let currentPosition = 0;
let nextBtnClicked = false;

function moveCarousel(direction) {
  if (direction === 'prev') {
    currentPosition += projectImgWidth;
  } else {
    currentPosition -= projectImgWidth;
    nextBtnClicked = true;
  }

  projectCarousel.style.transform = `translateX(${currentPosition}px)`;
  
  updateButtonVisibility();
}

function updateButtonVisibility() {
  const isAtStart = currentPosition === 0;
  const isAtEnd = currentPosition <= -(projectImgWidth * (projectCarousel.childElementCount - 3)); // Adjust for margin and display 3 items

  prevBtn.disabled = isAtStart || !nextBtnClicked;
  nextBtn.disabled = isAtEnd;
}

prevBtn.addEventListener('click', () => moveCarousel('prev'));
nextBtn.addEventListener('click', () => moveCarousel('next'));

// Update button visibility on window resize
window.addEventListener('resize', () => {
  projectImgWidth = document.querySelector('.project-img').offsetWidth + 10; // Adjust for margin
  updateButtonVisibility();
});

// Initially disable the prevBtn
prevBtn.disabled = true;

























// ------------------------------
// ---Infinite Carousel---YOUTUBE + GITHUB
// ------------------------------
let copy = document.querySelector(".logos-slide-1").cloneNode(true);  //Clone the entire li once
document.querySelector(".logos-1").appendChild(copy);
let copy2 = document.querySelector(".logos-slide-2").cloneNode(true);  //Clone the entire li once
document.querySelector(".logos-2").appendChild(copy2);





// ------------------------------
// ---Scroll Into View---CHATGPT
// ------------------------------
const elements = document.querySelectorAll('.hidden');

function handleScroll() {
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initial check on page load
handleScroll();

window.addEventListener('scroll', handleScroll);






  