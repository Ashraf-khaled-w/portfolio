document.addEventListener("DOMContentLoaded", function (event) {
  alert(
    `to get the smooth scroll animation You will need to make sure that it's be enabled by your windows setting
check preformance options and from ur browser settings check the flags chrome://flags/#smooth-scrolling  `
  );
   const dropdownMenu = document.querySelector(".dropdown_menu");
   const menuToggle = document.querySelector(".toggle_btn");
   let sections = document.querySelectorAll("section");
   let navLinks = document.querySelectorAll("header nav a");

   const loader = document.querySelector("#loading .loader");
   const loading = document.querySelector("#loading");

    
  function fadeOut(element, duration, callback) {
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = "0";
    setTimeout(callback, duration);
  }

  fadeOut(loader, 2000, () => {
    fadeOut(loading, 1000, () => {
      loading.remove();
      document.body.style.overflow = "auto";
    });
  });

 
  menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
  });

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
        });
      }
    });
  };
});
