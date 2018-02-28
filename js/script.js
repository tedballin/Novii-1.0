// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("to-top").style.display = "block";
//     } else {
//         document.getElementById("to-top").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }


//carousel for testimonial 
var slideIndex = 0;
//only run carousel() for index page 
if (window.location.href.indexOf('index.html') > -1) {
  carousel();
}

function carousel() {
    var i;
    var crsl= document.getElementsByClassName("slides");
    for (i = 0; i < crsl.length; i++) {
        crsl[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > crsl.length) {slideIndex = 1} 
    crsl[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
}

//sticky header
window.onscroll = function() {myFunction()};

var header = document.getElementById("site_header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Open the nav when the menu icon is clicked.

