gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

var flightPath = {
  path: [
    { x: 100, y: -30 },
    { x: 300, y: 10 },
    { x: 500, y: 100 },
    { x: 750, y: -200 },
    { x: 600, y: -300 },
    { x: 500, y: -200 },
    { x: 500, y: -100 },
    { x: 600, y: 0 },
    { x: 700, y: -50 },
    { x: 800, y: -100 },
    { x: window.innerWidth, y: -300 },
  ],
  curviness: 0.5,
  autoRotate: true,
};

var tl = gsap.timeline({ duration: 5, ease: "power1.inOut" });
tl.to(".plane", { motionPath: flightPath }, 0);
tl.to(
  ".container",
  { backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)" },
  0
);

ScrollTrigger.create({
  animation: tl,
  trigger: ".container",
  start: "top top",
  end: "bottom top",
  scrub: 1,
  pin: true,
});
