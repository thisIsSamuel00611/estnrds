// Slideshow Apartment Images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}
// Slideshow Apartment Images
var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
    showDivs2(slideIndex += n);
}

function currentDiv2(n) {
    showDivs2(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("demo1");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
}


function openNav() {
    document.getElementById("mySidenav").classList.toggle('gainWidth')
}

function closeNav() {
    document.getElementById("mySidenav").style.height = '0 !important';
}
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }
// function showIconBar() {
//     document.querySelector('.icon-bar').classList.toggle('invisible');
//     // document.querySelector('.icon-bar').style.transition = '0.3s'
// }
// setTimeout(showIconBar, 3000)
// document.addEventListener('scroll', showIconBar);
var i = 0;
var txt = 'Find A Perfect Home To Live With Your Family'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("bannerTxt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = document.querySelector('.panel');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// var prevScrollPos = window.pageYOffset;

// function showHide() {
//     // var currentScrollPos = window.pageYOffset;
//     if (window.addEventListener('scroll', showHide)) {
//         document.querySelector('.icon-bar').style.display = 'block';
//     } else {
//         document.querySelector('.icon-bar').style.display = 'none';
//     }
//     // prevScrollPos = currentScrollPos;
// }
// setTimeout(showHide, 1000)