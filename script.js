var otvshows= $('.section-otv-shows').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    autoHeight : true,
    autoplayTimeout:5000,
    responsiveClass:true,
    autoplayHoverPause:true,
    nav:false,
    lazyLoad:true,
    responsive:{
        0:{
            items:1,
            loop:true,
            autoplay:true,
        },
        600:{
            items:3,
            loop:true,
            autoplay:true,
        },
        1000:{
            items:3,
            loop:true,
            autoplay:true,
        }
    }
});

function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1200;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./segment/v10072.jpg
  ./segment/v10071.jpg
  ./segment/v10070.jpg
  ./segment/v10069.jpg
  ./segment/v10068.jpg
  ./segment/v10067.jpg
  ./segment/v10066.jpg
  ./segment/v10065.jpg
  ./segment/v10064.jpg
  ./segment/v10063.jpg
  ./segment/v10062.jpg
  ./segment/v10061.jpg
  ./segment/v10060.jpg
  ./segment/v10059.jpg
  ./segment/v10058.jpg
  ./segment/v10057.jpg
  ./segment/v10056.jpg
  ./segment/v10055.jpg
  ./segment/v10054.jpg
  ./segment/v10053.jpg
  ./segment/v10052.jpg
  ./segment/v10051.jpg
  ./segment/v10050.jpg
  ./segment/v10049.jpg
  ./segment/v10048.jpg
  ./segment/v10047.jpg
  ./segment/v10046.jpg
  ./segment/v10045.jpg
  ./segment/v10044.jpg
  ./segment/v10043.jpg
  ./segment/v10042.jpg
  ./segment/v10041.jpg
  ./segment/v10040.jpg
  ./segment/v10039.jpg
  ./segment/v10038.jpg
  ./segment/v10037.jpg
  ./segment/v10036.jpg
  ./segment/v10035.jpg
  ./segment/v10034.jpg
  ./segment/v10033.jpg
  ./segment/v10032.jpg
  ./segment/v10031.jpg
  ./segment/v10030.jpg
  ./segment/v10029.jpg
  ./segment/v10028.jpg
  ./segment/v10027.jpg
  ./segment/v10026.jpg
  ./segment/v10025.jpg
  ./segment/v10024.jpg
  ./segment/v10023.jpg
  ./segment/v10022.jpg
  ./segment/v10021.jpg
  ./segment/v10020.jpg
  ./segment/v10019.jpg
  ./segment/v10018.jpg
  ./segment/v10017.jpg
  ./segment/v10016.jpg
  ./segment/v10015.jpg
  ./segment/v10014.jpg
  ./segment/v10013.jpg
  ./segment/v10012.jpg
  ./segment/v10011.jpg
  ./segment/v10010.jpg
  ./segment/v10009.jpg
  ./segment/v10008.jpg
  ./segment/v10007.jpg
  ./segment/v10006.jpg
  ./segment/v10005.jpg
  ./segment/v10004.jpg
  ./segment/v10003.jpg
  ./segment/v10002.jpg
  ./segment/v10001.jpg
  ./segment/v10000.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 73;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()






































