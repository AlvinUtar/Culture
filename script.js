document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
  
    // Toggle the "active" class on click
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  
    // Add an event listener to close the mobile menu when a navbar item is clicked
    navbar.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("click", function () {
        navbar.classList.remove("active");
      });
    });
  
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", window.scrollY > 60);
    });
  
    // Add an event listener to show/hide the menu icon based on screen width
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 768) {
        menuIcon.style.display = "block";
        navbar.classList.remove("active"); // Close the menu on resize
      } else {
        menuIcon.style.display = "none";
        navbar.classList.remove("active"); // Hide the menu icon on larger screens
      }
    });
  
    // Initial check for screen width on page load
    if (window.innerWidth <= 768) {
      menuIcon.style.display = "block";
    }
  });
  