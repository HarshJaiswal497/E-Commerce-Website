const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.nextElementSibling.classList.toggle('show-dropdown');
    });
});

const categoryItems = document.querySelectorAll('.category-item');

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log(`Clicked on category: ${item.querySelector('h3').textContent}`);
    });
});

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log(`Clicked on product: ${card.querySelector('h3').textContent}`);
    });
});

const newArrivalCards = document.querySelectorAll('.new-arrival-card');

newArrivalCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log(`Clicked on new arrival: ${card.querySelector('h3').textContent}`);
    });
});

const dealCards = document.querySelectorAll('.deal-card');

dealCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log(`Clicked on deal: ${card.querySelector('h3').textContent}`);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("contactModal");
    var btn = document.getElementById("openContactModal");
    var span = document.getElementsByClassName("close")[0];

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    btn.onclick = openModal;
    span.onclick = closeModal;
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };
});
