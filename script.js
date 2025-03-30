"use strict";

// Opening or closing side bar
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Enabling filter button for larger screens
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const selectValue = document.querySelector("[data-select-value]");

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Enabling Contact Form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Enabling Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() == pages[j].dataset.page) {
        pages[j].classList.add("active");
        pages[j].style.animation = "slideIn 0.5s ease";
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        pages[j].style.animation = "";
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// Adding slide-in animation
const style = document.createElement("style");
style.innerHTML = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Update map location to Punjab, India
const mapIframe = document.querySelector("[data-mapbox] iframe");
mapIframe.src =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13712.639123456789!2d76.401123456789!3d30.339123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028123456789%3A0x123456789abcdef!2sPunjab%2C%20India!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin";

// Fetch data from CodePen by ID
async function fetchCodePenData(id) {
  const response = await fetch(
    `https://codepen.io/your-work?grid_type=grid$%7Bid%7D${id}`
  );
  const data = await response.json();
  return data;
}

// Fetch data from GitHub by ID
async function fetchGitHubData(id) {
  const response = await fetch(`https://api.github.com/users/${id}`);
  const data = await response.json();
  return data;
}

// Fetch data from LinkedIn by ID
async function fetchLinkedInData(id) {
  const response = await fetch(`https://api.linkedin.com/v2/people/(id:${id})`);
  const data = await response.json();
  return data;
}

// Example usage
fetchCodePenData("ayushisharma-the-scripter").then((data) => {
  const codepenLink = document.getElementById("codepen-link");
  codepenLink.href = data.html_url;
  codepenLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.open(data.html_url, "_blank");
  });
});
fetchGitHubData("AyushiSharma45").then((data) => {
  const githubLink = document.getElementById("github-link");
  githubLink.href = data.html_url;
  githubLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.open(data.html_url, "_blank");
  });
});
fetchLinkedInData("ayushi-sharma-26393b32b").then((data) => {
  const linkedinLink = document.getElementById("linkedin-link");
  linkedinLink.href = data.html_url;
  linkedinLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.open(data.html_url, "_blank");
  });
});
