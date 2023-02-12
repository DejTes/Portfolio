//enabling hidden Skill, Experience ,Education
// const tablinks = document.getElementsByClassName("tab-links");
// const tabcontents = document.getElementsByClassName("tab-contents");
// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

  const tablinks = $(".tab-links");
  const tabcontents = $(".tab-contents");

  function opentab(tabname) {
    tablinks.removeClass("active-link");
    tabcontents.removeClass("active-tab");
    // activates the selected tab
    $(event.currentTarget).addClass("active-link");
    $("#" + tabname).addClass("active-tab");
  }

//enable hidden nav bar
// const nav = document.querySelector(".sticky-nav");
// let lastScrollY = window.scrollY;
// window.addEventListener("scroll", () => {
//   //comparring last scrollY with current scrollY
//   if (lastScrollY < window.scrollY) {
//     nav.classList.add("sticky-nav");
//   } else {
//     nav.classList.remove("sticky-nav");
//   }
//   lastScrollY = window.scrollY;
// });

//enanbling hidden nav bar
  const nav = $(".sticky-nav");
  let lastScrollY = $(window).scrollTop();
  $(window).scroll(function () {
    if (lastScrollY < $(window).scrollTop()) {
      nav.addClass("sticky-nav");
    } else {
      nav.removeClass("sticky-nav");
    }
    lastScrollY = $(window).scrollTop();
  });

//side menu
// let sidemenu = document.getElementById("sidemenu");
// function openmenu() {
//   sidemenu.style.right = "0";
// }
// function closemenu() {
//   sidemenu.style.right = "-250px";
// }

//side menu jquery
let sidemenu = $("#sidemenu");
function openmenu() {
  sidemenu.css("right", "0");
}
function closemenu() {
  sidemenu.css("right", "-250px");
}

// script to run the form sheet
