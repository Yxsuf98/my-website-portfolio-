/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 390) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
      link.classList.add('active');
    }
  })
})

// function linkAction() {
//   /*Active link*/
//   navLinks.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");

//   /*Remove menu mobile*/
const navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("show");
// }
navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));



/*SCROLL HOME*/
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });



  function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode")
  }


  var messageArr = ["MERN Developer", "Frontend Developer", "Backend Developer"];
  var textPosition = 0;
  var speed = 200;

  typewriter = () => {
    // for(let i = 0; i < messageArr.length; i++) {
    document.querySelector("#jobTitle").innerHTML = messageArr[0].substring(0, textPosition)  ;
    if(textPosition ++  != messageArr[0].length)
        setTimeout(typewriter, speed)
  }


  window.addEventListener("load" , typewriter);

