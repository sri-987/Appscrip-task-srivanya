// Select elements
const hideBtn = document.querySelector(".hide-btn");
const sidebar = document.getElementById("filterSidebar");

// Toggle show/hide
hideBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");

    // Change button text
    if (sidebar.classList.contains("open")) {
        hideBtn.textContent = "HIDE FILTERS";
    } else {
        hideBtn.textContent = "SHOW FILTERS";
    }
});