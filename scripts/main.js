function toggleBurgerMenu() {
    let menuContainer = document.getElementById("menu-container");
    if (menuContainer.classList.contains("responsive")) {
        menuContainer.classList.remove("responsive");
    } else {
        menuContainer.classList.add("responsive");
    }
}

function setActiveMenuItem(clickedElement) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    clickedElement.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('main-navbar');
    const heroSection = document.getElementById('hero-page');

    if (!navbar || !heroSection) {
        console.error('Navbar or Hero Section not found. Check your HTML IDs.');
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '-50px 0px 0px 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.classList.remove('scrolled');
            } else {
                navbar.classList.add('scrolled');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(heroSection);
});