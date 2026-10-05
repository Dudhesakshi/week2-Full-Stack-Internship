// Display current year automatically
const currentYear = new Date().getFullYear();

const copyrightElement = document.querySelector(".copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} TechNova Solutions. All rights reserved.`;
}


// Confirm that JavaScript is loaded
console.log("TechNova Solutions website loaded successfully!");
