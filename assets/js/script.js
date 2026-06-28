// sidebar toggle

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    const isOpen = sidebar.classList.contains("active");
    const label = sidebarBtn.querySelector("span");

    if (label) label.textContent = isOpen ? "Hide Contacts" : "Show Contacts";
    sidebarBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

// page navigation variables

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {

  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {

      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {

        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);

      } else {

        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");

      }

    }

  });

}
