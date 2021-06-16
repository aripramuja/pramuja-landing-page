const navbarToggler = document.getElementById("navbar-toggler");
const navbarResponsive = document.getElementById("navbarResponsive");

navbarToggler.addEventListener("click", () => {
  navbarResponsive.classList.toggle("show");
});

function MouseOver(x) {
  x.style.height = "260px";
  x.style.width = "260px";
}

function MouseOut(x) {
  x.style.height = "250px";
  x.style.width = "250px";
}

const goToUp = document.getElementById("goto");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToUp.style.display = "block";
  } else {
    goToUp.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
