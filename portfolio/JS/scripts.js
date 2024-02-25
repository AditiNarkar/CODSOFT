
//PARALLAX
let first_layer = document.getElementById('first-layer');
let second_layer = document.getElementById('second-layer');
let third_layer = document.getElementById('third-layer');
let fourth_layer = document.getElementById('fourth-layer');
let ship = document.getElementById('ship-1-icon');
let sharku = document.getElementById('sharku');
let small_fishes_upper = document.getElementById('small-fishes-upper')
let small_fishes_middle = document.getElementById('small-fish-middle-1-icon')
let small_turtle = document.getElementById('small-turtle-1-icon')
let big_turtle = document.getElementById('big-turtle-1-icon')
let name_section = document.getElementById('name-section')

window.addEventListener('scroll', function() {
    let y = window.scrollY;

    ship.style.top = y * 1.25 + 'px'
    sharku.style.top = 26 + y * 1.25 + 'px'
    small_fishes_upper.style.top = 25 + y * 1.25 + 'px'
    small_fishes_middle.style.top = 164 + y * 1.25 + 'px'
    small_turtle.style.top = 150 + y * 1.25 + 'px'
    big_turtle.style.top = 86 + y * 1.25 + 'px'
    name_section.style.top = 94 + y * 1.25 + 'px'

    fourth_layer.style.top = 99+  y * 1.15 + 'px';
    third_layer.style.top = 33 + y * 1 + 'px'
    second_layer.style.top = 241 + y * 0.5 + 'px'
   // first_layer.style.top = 370 + y * 0.5 + 'px'
    
}, false)

// Other projects animationss
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    rect.bottom <= (window.innerHeight + 50 || document.documentElement.clientHeight +50 ) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);






// entry animation
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add('play_'+ 'bubble')
        }
        else{
            entry.target.classList.remove('play_' + 'bubble')
        }
    })
})

const toanimate = document.querySelectorAll(".animate")
toanimate.forEach((el) => observer.observe(el))



// education entry animation
const edu_observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add('play_'+ 'edu_rotate')
        }
        else{
            entry.target.classList.remove('play_' + 'edu_rotate')
        }
    })
})

const edu_anim = document.querySelectorAll(".edu-animate")
edu_anim.forEach((el) => edu_observer.observe(el))






//education animation
let blue_curve_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.blue-curve-1',
        start: '-30% center',
        end: '70% center',
        scrub: 1,
        markers: false,
    }
})

blue_curve_tl.from('.blue-curve-1',
{ 
    width: "400px" ,
    duration: 3
})

blue_curve_tl.from('.turtle2-3-parent',
{ 
    opacity: 0 ,
    duration: 0.1
}, "-=1.5")

blue_curve_tl.from('.turtle2-2-parent',
{ 
    opacity: 0 ,
    duration: 0.1
}, "-=2")

blue_curve_tl.from('.turtle2-1-parent',
{ 
    opacity: 0 ,
    duration: 0.1
}, "-=2.5")



// adt bubble rotate animation
let circle_rotate_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.circle-frame',
        start: '-30% center',
        end: '130% center',
        scrub: 1,
        markers: false,
    }
})

circle_rotate_tl.from('.circle-frame',{
    rotation: 90
})



// turtle gsap animation
let turtle_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.turtle2-removebg-preview-1-icon',
        start: '-40% 20%',
        end: '850% 90%',
        scrub: 3,
        markers: false,
    }
})

turtle_tl.fromTo('.turtle2-removebg-preview-1-icon',
{
x: 200,
y: 400,
},
{
x: 1300,
y: 700,
rotation: 90,
duration: 1
})
.to('.turtle2-removebg-preview-1-icon',
{
x: 1250,
y: 1000,
rotation: 120,
duration: 1
})
.to('.turtle2-removebg-preview-1-icon',
{
x: 1300,
y: 1400,
rotation: 74,
duration: 1
})
.to('.turtle2-removebg-preview-1-icon',
{
x: 1300,
y: 1900,
rotation: 117,
duration: 1
})
.to('.turtle2-removebg-preview-1-icon',
{
x: 1300,
y: 2300,
// rotation: 30,
duration: 1
})
.to('.turtle2-removebg-preview-1-icon',
{
x: 1600,
y: 2400,
rotation: 180,
duration: 1
})
.to('.turtle2-removebg-preview-1-icon',
{
x: 1500,
y: 2800,
rotation: 70,
duration: 1
})
.to('.turtle2-removebg-preview-1-icon',
{
x: 1300,
y: 3100,
rotation: 90,
duration: 1
})

//smooth scroll
const lenis = new Lenis()
lenis.on('scroll', (e) => {
})
function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}
requestAnimationFrame(raf)