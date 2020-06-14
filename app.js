gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

var flightPath = {
  path: [
    { x: 100, y: 0 },
    { x: 200, y: 50 },
    { x: 600, y: 200 },
    { x: 800, y: 0 },
    { x: 600, y: -200 },
    { x: 200, y: 0 },
    { x: 600, y: 200 },
    { x: 800, y: 0 },
    { x: window.innerWidth, y: -300 },
  ],
  curviness: 0.6,
  autoRotate: true,
};

var tl = gsap.timeline({ duration: 5, ease: "power1.inOut" });
tl.to(".plane", { motionPath: flightPath }, 0);
tl.to(
  ".container",
  { backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)" },
  0
);
tl.to(
  ".cloud",
  {
    motionPath: {
      path: [
        { x: -200, y: -50 },
        { x: -400, y: -100 },
        { x: -600, y: 100 },
      ],
      curviness: 0.5,
    },
  },
  0
);
tl.to(
  ".moon",
  {
    motionPath: {
      path: [
        { x: 100, y: 50 },
        { x: 500, y: -300 },
      ],
      curviness: 0.5,
    },
    opacity: 1,
  },
  0
);
tl.to(
  ".sun",
  {
    motionPath: {
      path: [
        { x: 100, y: 50 },
        { x: 500, y: -200 },
      ],
      curviness: 0.5,
    },
    opacity: 0,
  },
  0
);
tl.to(".star", { scale: 1, opacity: 1 }, 0);
tl.to(".helper", { duration: 0.3, opacity: 0 }, "-=0.3");

ScrollTrigger.create({
  animation: tl,
  trigger: ".container",
  start: "top top",
  end: "bottom top",
  scrub: 1,
  pin: true,
});

gsap.to(".arrow", {
  y: 15,
  duration: 1,
  ease: "elastic",
  yoyo: true,
  repeat: -1,
});
