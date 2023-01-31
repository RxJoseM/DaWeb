const tl1 = gsap.timeline({defaults:{ease:"steps.out"}})
tl1.to('.text',{y:"0%",duration:3, stagger:0.50})
tl1.to('.slider',{y:"-100%", duration:1.5, delay:0.30})
tl1.to('.intro',{y:"-100%",duration:1,},"-=1")
const el = document.getElementById('el')
setTimeout(() => {
    el.remove();
}, 6600);
