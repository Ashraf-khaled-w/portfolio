$(document).ready(function () {
  // loading screen
  $(`#loading .loader`).fadeOut(2000, function () {
    $(`#loading`).fadeOut(1000, function () {
      $(`#loading`).remove();
      $(`body`).css(`overflow`, `auto`);
    });
  });

  const toggleBtn = $(`.toggle_btn`);
  const toggleBtnIcon = $(`.toggle_btn i`);
  const dropDownMenu = $(`.dropdown_menu`);
  const aboutOffset = $(`#about`).offset().top;
  const navBar = $(`#nav-bar`);

  dropDownMenu.hide();
  toggleBtn.on(`click`, () => {
    dropDownMenu.slideToggle();
    toggleBtnIcon.toggleClass(`fa-bars fa-xmark`);
  });

  // Smooth scroll effect for anchor links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    const target = $(this.getAttribute("href"));

    if (target.length) {
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
    }
  });
  // Add smooth scroll to the dropdown menu
  $(".dropdown_menu a").on("click", function (e) {
    e.preventDefault();
    dropDownMenu.slideToggle();
    toggleBtnIcon.toggleClass(`fa-bars fa-xmark`);
    const target = $(this.getAttribute("href"));

    if (target.length) {
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
    }
  });

  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > aboutOffset) {
      navBar.stop().animate(
        {
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Change to your desired background color
          padding: "0.5rem 2rem", // Adjust padding as needed
          height: "50px", // Adjust height as needed
        },
        300
      );
      navBar.addClass(`shadow`);
    } else {
      navBar.stop().animate(
        {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Change to your desired background color
          padding: "0 2rem", // Adjust padding as needed
          height: "60px", // Adjust height as needed
        },
        300
      );
      navBar.removeClass(`shadow`);
    }
    // Add active state to the navigation links
    $("section").each(function () {
      if (windowScroll >= $(this).offset().top - 100) {
        let sectionId = $(this).attr("id");
        $(`.links a`).removeClass("active");
        $(`.links a[href="#${sectionId}"]`).addClass("active");
        $(`.dropdown_menu a`).removeClass("active");
        $(`.dropdown_menu a[href="#${sectionId}"]`).addClass("active");
      }
    });
  });
});
