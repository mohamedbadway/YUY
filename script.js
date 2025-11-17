/* ============================
      Smooth Scroll
============================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ============================
     Fade-In On Scroll
============================ */
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -60px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(element => appearOnScroll.observe(element));

/* ============================
        Back To Top
============================ */
const backTop = document.createElement("button");
backTop.id = "backTopBtn";
backTop.innerHTML = "▲";
document.body.appendChild(backTop);

backTop.style.cssText = `
  position: fixed;
  bottom: 25px;
  right: 25px;
  padding: 12px 15px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: none;
  background: #0066ff;
  color: #fff;
  z-index: 99999;
`;

window.addEventListener("scroll", () => {
  backTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================
        Mobile Menu
============================ */
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });
}

/* ============================
        Image Hover Zoom
============================ */
document.querySelectorAll("img").forEach(img => {
  img.style.transition = "0.4s";
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

/* ============================
      Simple Slider (Optional)
============================ */
let slideIndex = 0;

function autoSlider() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
  setTimeout(autoSlider, 3500);
}

if (document.querySelector(".slide")) autoSlider();

