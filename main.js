const header = document.querySelector("header");

window.addEventListener ("scroll", function () {
    header.classList.toggle ("sticky", window.scrollY > 0)
});

let menu = document.querySelector('#menu1');
let nav = document.querySelector('.nav');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
   
  
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
   
 }


const sr = ScrollReveal ({
    distance: "45px",
    duration: 2700,
    reset: true
})

sr.reveal(".here-text" ,{delay:350,origin:'bottom'});
sr.reveal(".here-img" ,{delay:350, origin:'right'});


sr.reveal(".blog-text" ,{delay:350,origin:'top'});
sr.reveal(".blog-img" ,{delay:350, origin:'bottom'});

sr.reveal(".service,.blog,.link,.trivial,.trivial,.flip,.contact",{delay:300, origin:'bottom'});




