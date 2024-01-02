let copyRight = document.querySelector(".copyRight"),
date = new Date().getFullYear();

copyRight.innerHTML = `Copyright © Your Website ${date}`;

let header = document.querySelector(".header"),
    menuIcon = document.querySelector(".menuIcon"),
    menuIconI = document.querySelector(".menuIcon i"),
    menuLinks = document.querySelector(".header .links");

window.onscroll = function () {
    if (window.scrollY > 20) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

// Open Menu Links And Close

menuIcon.addEventListener("click", () => {
    menuIconI.classList.toggle("fa-times");
    menuLinks.classList.toggle("active")
})

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1300,
    delay: 200
});
ScrollReveal().reveal('.leftScroll', { origin: 'left'});
ScrollReveal().reveal('.rightScroll', { origin: 'right'});
ScrollReveal().reveal('.top', { origin: 'top'});

// Kursor event
new kursor ({
    type: 3,
    removeDefaultCursor: true,
    color: "#ffc800",
})
