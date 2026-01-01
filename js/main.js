/*GSAP 애니메이션*/

/* Header */

gsap.set(".header__inner", {
  background: "##F1EDE8",
});

gsap.to(".header__inner", {
  background: "#2B2B2B",
  duration: 0.3,
  scrollTrigger: {
    trigger: "#about",
    start: ".about_inner",
    end: "bottom",
    invalidateOnRefresh: true,
    toggleActions: "restart reset restart reset",
  },
});

gsap.to(".header__inner a", {
  color: "#fff",
  duration: 0.3,
  scrollTrigger: {
    trigger: "#about",
    start: ".about_inner",
    end: "bottom",
    invalidateOnRefresh: true,
    toggleActions: "restart reset restart reset",
  },
});

/* Visual */

document.querySelectorAll(".splitText").forEach((desc) => {
  let splitText = desc.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  desc.innerHTML = splitWrap;
  desc.setAttribute("aria-label", splitText);
});

gsap.set(".header__inner", {
  opacity: 0,
});

gsap.to(".header__inner", {
  opacity: 1,
  duration: 2.8,
  delay: 2.8,
});

gsap.to(".visual_line1", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.1,
});
gsap.to(".visual_line2", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.2,
});
gsap.to(".visual_line3", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.3,
});
gsap.to(".visual_line4", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.4,
});
gsap.to(".visual_line5", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.5,
});
gsap.to(".visual_line6", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.6,
});
gsap.to(".visual_line7", {
  duration: 3.5,
  width: "100%",
  ease: "expo",
  delay: 1.7,
});

gsap.to(".visual_line_box ul li", {
  duration: 1.5,
  ease: "back.inOut",
  marginTop: "0.6vw",
  delay: 2.8,
});

gsap.to(".visual_inner h2 span", {
  duration: 2,
  y: 0,
  stagger: 0.04,
  ease: "expo",
  delay: 2.8,
});

gsap.to(".visual_line7 span", {
  duration: 2,
  x: 0,
  opacity: 1,
  ease: "expo",
  delay: 2.8,
});

gsap.to("#visual_dimension", {
  y: 0,
  opacity: 1,
  duration: 3,
  ease: "expo",
  delay: 3.8,
});

/*About */

gsap.set("#about", {
  duration: 0.3,
  background: "##F1EDE8",
  color: "#2B2B2B",
});

gsap.to("#about", {
  duration: 0.3,
  background: "#2B2B2B",
  color: "#fff",
  scrollTrigger: {
    trigger: "#about",
    start: ".about_text:nth-of-type(1)",
    end: ".about_text:nth-of-type(3)",
    pin: true,
    invalidateOnRefresh: true,
    toggleActions: "restart none reset none",
  },
});

/* Website */

gsap.set(".website_box li", {
  y: 150,
  opacity: 0,
});

gsap.to(".website_box li", {
  y: 0,
  opacity: 1,
  duration: 1.3,
  stagger: 0.08,
  scrollTrigger: {
    trigger: "#website",
    start: "top top",
    end: "bottom 10%",
  },
});

/*
gsap.to(".panel .webbox", {
  transform: "rotate(-4deg)",
  marginBottom: "-5%",
  duration: 1.7,
  stagger: 2,
  scrollTrigger: {
    trigger: ".website_pro",
    start: ".website_imgbox 60%",
    end: "bottom",
  },
});
*/

/* Animation */

gsap.set(".animation_inner h2", {
  y: 90,
  opacity: 0,
});

gsap.to(".animation_inner h2", {
  y: 0,
  opacity: 1,
  duration: 1.5,
  ease: "expo",
  scrollTrigger: {
    trigger: ".third",
    start: "top",
  },
});

const text = document.getElementById("cir_text");
const rotate = new CircleType(text).radius(50);

window.addEventListener("scroll", function () {
  text.style.transform = "rotate(" + window.scrollY * 0.15 + "deg)";
});

/* Javascript */
/*
gsap.set(".project", { zIndex: (i, target, targets) => targets.length - i });

// Project stack FX
let projects = gsap.utils.toArray(".project");
// let projectImages = gsap.utils.toArray('.project .project-container__inner');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#javascript",
    start: () => "top top",
    end: () => "" + (projects.length - 1) * window.innerHeight,
    scrub: 0.8,
    pin: true,
    invalidateOnRefresh: true,
  },
});

projects.forEach((project, i) => {
  if (i !== projects.length - 1) {
    tl.to(project, {
      xPercent: -92 + (projects.length - 1),
      ease: "none",
      stagger: 0.5,
      scrub: 0.8,
    });
  }
});
*/

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".java-wrap", // 객체기준범위
      start: "top top", // 시작점
      end: () => `+=${document.querySelector(".java-wrap").offsetHeight}`, // 끝점
      scrub: 2.3, // 모션바운스
    },
  })
  .to(".java-wrap > div.j3", {
    duration: 3,
    x: 0,
  })
  .to(".java-wrap > div.j4", {
    duration: 3,
    x: 0,
  })
  .to(".java-wrap > div.j5", {
    duration: 3,
    x: 0,
  });

/* Slogan */

gsap.to(".slogan_line_box ul li", {
  duration: 2,
  marginTop: "0.6vw",
  ease: "back.inOut",
  scrollTrigger: {
    trigger: ".slogan_inner",
    end: "bottom top",
    toggleActions: "restart none none none",
  },
});

/* Smooth */

/*
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector("#smooth-wrapper");
  pageContainer.setAttribute("data-scroll-container", "");

  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    getDirection: true,
  });

  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed",
  });

  // Pinning and horizontal scrolling

  let horizontalSections = document.querySelectorAll(".horizontal-scroll");

  horizontalSections.forEach((horizontalSection) => {
    let pinWrap = horizontalSection.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        scrub: true,
        trigger: horizontalSection,
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true,
      },
      x: -horizontalScrollLength,
      ease: "none",
    });
  });
*/
/* COLOR CHANGER */
/*
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
      trigger: colorSection,
      scroller: "[data-scroll-container]",
      start: "top 50%",
      onEnter: () =>
        gsap.to("body", {
          backgroundColor: colorSection.dataset.bgcolor,
          color: colorSection.dataset.textcolor,
          overwrite: "auto",
        }),
      onLeaveBack: () =>
        gsap.to("body", {
          backgroundColor: prevBg,
          color: prevText,
          overwrite: "auto",
        }),
    });
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());

  ScrollTrigger.refresh();
});
*/

/* Slogan */

const webtext = document.querySelectorAll(".slogan_txt_text");
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

webtext.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8),
  });
});

document.addEventListener("mousemove", (e) => {
  webtext.forEach((el, i) => {
    TweenMax.to(el, 0.5, {
      x: (e.clientX - halfX) * (i + 1) * 0.01,
      y: (e.clientY - halfY) * (i + 1) * 0.01,
    });
  });
});

const aboutSections = document.querySelectorAll("#about .about_text > div");
const fingerEmoji = document.querySelector(".finger_emoji");

// 각 문단에 대응하는 손가락 모양
const fingerEmojis = ["☝️", "✌️", "🤟"]; // 1, 2, 3 모양

function updateFingerEmoji() {
  const viewportHeight = window.innerHeight;
  const triggerPoint = viewportHeight * 0.2; // 화면의 60% 지점

  aboutSections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    // 문단 상단이 triggerPoint를 지나고, 문단 하단이 triggerPoint보다 아래에 있을 때
    if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
      fingerEmoji.textContent = fingerEmojis[index] || "☝️";
    }
  });
}

window.addEventListener("scroll", updateFingerEmoji);
updateFingerEmoji(); // 초기 실행
