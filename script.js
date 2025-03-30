Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".burger", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".logo ", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.textAnimate(".col h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
Shery.textAnimate(".col1 h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});


document.addEventListener("DOMContentLoaded", function () {
    // Initialize Lenis
    const lenis = new Lenis();
  
    // Listen for the scroll event and update ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
  
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  
    gsap.ticker.lagSmoothing(0);
  
    const services = gsap.utils.toArray(".service");
    const observerOption = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  
    // Corrected syntax for the observer callback
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(".img");
  
          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: newWidth + "%",
                duration: 0.1,
                ease: "none",
              });
            },
          });
  
          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newHeight = 150 + 200 * progress;
              gsap.to(service, {
                height: newHeight + "px",
                duration: 0.1,
                ease: "none",
              });
            },
          });
  
          observer.unobserve(service);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOption);
  
    services.forEach((service) => {
      observer.observe(service);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let activeItemIndicator = CSSRulePlugin.getRule(".item p#active::after");
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;
  
    gsap.set(".item p", { y: 225 });
  
    const timeline = gsap.timeline({ paused: true });
  
    timeline.to(".overlay", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Corrected closing parenthesis
      ease: "power4.inOut",
    });
  
    timeline.to(
      ".item p",
      {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=1"
    );
  
    timeline.to(
      activeItemIndicator,
      {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      },
      "<"
    );
  
    timeline.to(
      ".sub-nav",
      {
        bottom: "10%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      },
      "<"
    );
  
    toggleButton.addEventListener("click", function () {
      if (isOpen) {
        timeline.reverse();
      } else {
        timeline.play();
      }
      isOpen = !isOpen;
    });
  });


  


document.querySelector(".footer #btn")
.addEventListener("mouseover", function(){
  gsap.to(".footer video",{
    opacity: 1,
    duration: 1.5,
    ease: "power4"
  })
})
document.querySelector(".footer #btn")
.addEventListener("mouseleave", function(){
  gsap.to(".footer video",{
    opacity: 0,
    duration: 1.5,
    ease: "power4"
  })
})