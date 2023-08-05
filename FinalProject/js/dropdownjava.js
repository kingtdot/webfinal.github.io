document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", function () {
      dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function (event) {
      if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (const dropdown of dropdowns) {
          if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
          }
        }
      }
    });
  });