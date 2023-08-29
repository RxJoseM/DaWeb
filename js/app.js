// Create a timeline
const tl1 = gsap.timeline({ defaults: { ease: "steps.out" } });

// Animate the text elements
tl1.to('.text', { y: "0%", duration: 1.5, stagger: 0.5 });

// Slide the slider element up
tl1.to('.slider', { y: "-100%", duration: 1.2, delay: 0.3 });

// Slide the intro element up
tl1.to('.intro', { y: "-100%", duration: 1 }, "-=1");

// Get the element with the ID 'el'
const el = document.getElementById('el');

// Remove the element after a delay
setTimeout(() => {
    el.remove();
}, 6600);
