


gsap.to('.today, .heroDes', { 
    duration: 2, 
    x: 200,
    ease: 'power2.out',
  });

  gsap.to('.heroImg', { 
    duration: 2, 
    x: -100,
    ease: 'power2.out',
  });

  gsap.to('.one, .newtwo', {
    duration: 1,
    x: -50,
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Reverse the animation
  });

 

let click = document.querySelector(".schedule-click");
let schedule = document.querySelector(".schedule");
let close = document.querySelector(".close");

click.addEventListener("click", function() {
  schedule.style.display = "block";
  schedule.style.transition = "0.5s ease";
})
close.addEventListener("click", function() {
  schedule.style.display = "none";
  schedule.style.transition = "0.5s ease";
})




