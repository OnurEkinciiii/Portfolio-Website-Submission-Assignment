
document.addEventListener("DOMContentLoaded", function () {
    console.log("Custom Portfolio Loaded.");

    // Scroll to section smoothly
    const menuItems = document.querySelectorAll(".navigation a");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const destination = document.querySelector(this.getAttribute("href"));
            if (destination) {
                destination.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Hover animation for project cards
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.03)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
