export default function toggleMenu() {
    const navContainer = document.querySelectorAll('.header__nav-list')
    if (navContainer !== null) {
        navContainer.forEach(el => {
            el.classList.toggle('header__nav-list--active');
        });
    };
}