const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});


// navigation photo js


const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 400, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -400, behavior: "smooth" });
});









// Animation simple au clic
document.querySelectorAll('.product').forEach((item) => {
  item.addEventListener('click', () => {
    alert('Découvrez ce modèle de peignoir sur notre boutique 🛍️');
  });
});


// Animation légère à l’apparition
const cards = document.querySelectorAll(".product-card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.1;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});








// function changeMainImage(imgElement) {
//   const mainImage = document.getElementById("mainImage");

//   mainImage.style.opacity = "0"; // effet fondu
//   setTimeout(() => {
//     mainImage.src = imgElement.src;
//     mainImage.style.opacity = "1";
//   }, 300);
// }




