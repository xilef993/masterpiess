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



let prevScrollPos = window.scrollY;
window.addEventListener("scroll", ()=> {
  let currScrollpos = window.scrollY;

  if(currScrollpos > prevScrollPos) {
    header.style.transform = `translateY(0)`;
  } else {
    header.style.transform = `translateY(-105%)`;
  }


})


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

const hamburgerMenu = document.querySelector(".hamburger")

hamburgerMenu.addEventListener("click", (event) => {
  hamburgerMenu.classList.toggle("active");
  // offScreenMenu.classList.toggle("active");
 // hamburgerMenu.classList.contains("active") ? openRightMenu() : closeRightMenu();
})

// buttonBook.addEventListener("click", (event) => {
//   console.log("Booking button was pressed");
// })

// function openRightMenu() {
//   document.querySelector(".menu").style.display = "block";
// }

// function closeRightMenu() {
//   document.querySelector(".menu").style.display = "none";
// }

// Callback function
const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
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
