const target = document.getElementById("hide-menu");
target.addEventListener("click", function () {
  target.classList.toggle("open");
  const navs = document.getElementById("hide--item");
  navs.classList.toggle("in");
});

