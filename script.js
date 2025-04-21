//  $(".flex-slide").each(function(){
//      $(this).hover(function(){
//          $(this).find('.flex-title').css({
//              transform: 'rotate(0deg)',
//              top: '10%'
//          });
//          $(this).find('.flex-about').css({
//              opacity: '1'
//          });
//      }, function(){
//          $(this).find('.flex-title').css({
//              transform: 'rotate(90deg)',
//              top: '15%'
//          });
//          $(this).find('.flex-about').css({
//              opacity: '0'
//          });
//      })
//  });


const backgroundScroll = document.querySelector(".main-content");
const buttonBook = document.querySelector(".btn-book")
const sidebar = document.querySelector(".menu")
const header = document.querySelector(".nav-bar")
const listItem = document.querySelector(".nav-bar ul li")



// let prevScrollPos = window.scrollY;
// window.addEventListener("scroll", ()=> {
//   let currScrollpos = window.scrollY;

//   if(currScrollpos > prevScrollPos) {
//     header.style.transform = `translateY(0)`;
//   } else {
//     header.style.transform = `translateY(-105%)`;
//   }
// })


const isSubpage = document.body.classList.contains("subpage");

// Funktion zur Steuerung der Sichtbarkeit
function updateNavbarVisibility() {
  const scrollY = window.scrollY;

  if (isSubpage) {
    // Auf Unterseiten: Navbar immer sichtbar
    header.classList.add("visible");
  } else {
    // Auf Startseite: nur sichtbar, wenn gescrollt > 50px
    if (scrollY > 50) {
      header.classList.add("visible");
    } else {
      header.classList.remove("visible");
    }
  }
}

// Beim Scrollen prüfen
window.addEventListener("scroll", updateNavbarVisibility);

// Direkt beim Laden prüfen
document.addEventListener("DOMContentLoaded", updateNavbarVisibility);



document.addEventListener("scroll", (event) => {
 lastKnownScrollPosition = window.scrollY;
   if (lastKnownScrollPosition !== 0){
    header.style.backgroundColor = "var(--background-color";
    // listItem.style.color = "#fff";
    //  backgroundScroll.style.backgroundColor = "#eee";
    //  backgroundScroll.style.padding = "1rem";
    //  backgroundScroll.style.margin = "20px;";
   }else{
     header.style.backgroundColor = "";
    //  backgroundScroll.style.backgroundColor = "fff";
    //  backgroundScroll.style.padding = "0";
    //  backgroundScroll.style.margin = "0";

   }
 })


// Hamburger
// alt
// const hamburgerMenu = document.querySelector(".hamburger")

// hamburgerMenu.addEventListener("click", (event) => {
//   hamburgerMenu.classList.toggle("active");
// })
//alt

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  document.body.classList.toggle('menu-open'); // ⬅ Wichtig!
});


// Callback function
const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {m
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

  });
});

const hiddenElementsRight = document.querySelectorAll(".hidden-right");
hiddenElementsRight.forEach((el) => observer.observe(el));

const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
hiddenElementsLeft.forEach((el) => observer.observe(el));


// Contact Formular

// const floatingImage = document.querySelector(".floating-fullscreen-image");
// const wrapper = document.querySelector(".image-text-float-wrapper");

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   const sectionTop = wrapper.offsetTop;
//   const sectionHeight = wrapper.offsetHeight;

//   const startScroll = sectionTop - window.innerHeight / 2; // Start Zoom
//   const endScroll = sectionTop + 400; // Ende: Bild ist im Laptop

//   const maxScroll = endScroll - startScroll;

//   const offset = scrollY - startScroll;
//   const progress = Math.min(Math.max(offset / maxScroll, 0), 1);

//   // Standard-Zoom-Out
//   if (scrollY < endScroll) {
//     const scale = 1 + 4 * progress;
//     const translateX = -20 * progress + "vw";
//     const translateY = -20 * progress + "vh";
//     floatingImage.style.transform = `scale(${scale}) translate(${translateX}, ${translateY})`;
//     floatingImage.style.position = "fixed";
//     floatingImage.style.top = "0";
//     floatingImage.style.left = "0";
//   }

//   // Bild bleibt an Ort & Stelle (nach dem Scroll)
//   if (scrollY >= endScroll) {
//     floatingImage.style.position = "absolute";
//     floatingImage.style.top = "300px"; // auf Höhe im Laptop-Bildschirm
//     floatingImage.style.left = "0";
//     floatingImage.style.transform = `scale(5) translate(-20vw, -20vh)`;
//   }

//   // Bonus: Hochscrollen → Zoomt größer als 5x (nach oben)
//   if (scrollY < startScroll) {
//     const reverseProgress = (startScroll - scrollY) / maxScroll;
//     const scale = 1 + 4 + reverseProgress * 2; // mehr als 5x
//     const translateX = -20 - reverseProgress * 10;
//     const translateY = -20 - reverseProgress * 10;
//     floatingImage.style.transform = `scale(${scale}) translate(${translateX}vw, ${translateY}vh)`;
//     floatingImage.style.position = "fixed";
//     floatingImage.style.top = "0";
//     floatingImage.style.left = "0";
//   }
// });

const floatingImage = document.querySelector(".floating-fullscreen-image");
const wrapper = document.querySelector(".image-text-float-wrapper");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const sectionTop = wrapper.offsetTop;
  const sectionHeight = wrapper.offsetHeight;
  console.log(scrollY)

});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Section-Ende ist erreicht!");
    }
  });
}, {
  root: null,
  threshold: 1.0
});

const section = document.querySelector(".image-text-float-wrapper");
observer.observe(section);
