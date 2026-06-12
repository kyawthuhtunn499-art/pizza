const toggle = document.querySelector("#toggle")
const navbar = document.querySelector(".nav-link")
// console.log(toggle, navbar)
toggle.onclick = function(){
    navbar.classList.toggle("active");
    toggle.querySelector("i").classList.toggle("fa-xmark")
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      autoplaytimeout: 5000,
      dots: false,
      nav: true,
  }); 
});

const up = document.querySelector('#up');
up.onclick = () => {
    window.scrollTo(0,0,);
}

window.onscroll = () => {
    if(window. scrollY >= 400){
        up.style.display = "flex"
    }else {
        up.style.display = "none"
    }
}

// const a = document.querySelector('.nav-link a')
// console.log(a);
// a.classList.add('active')

const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('.nav-link a')

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            activelink = entry.target.getAttribute('id');
            links.forEach(link=>link.classList.remove('active'));
            document.querySelector(`.nav-link a[href="#${activelink}"]`).classList.add('active');
        } 
    })
},{threshold:0.5})

sections.forEach(function(section){
    observer.observe(section);
})