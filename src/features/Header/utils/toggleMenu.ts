export default function toggleMenu() {
    const navContainer = document.querySelector('.header__nav-container')
    if (navContainer !== null) navContainer.classList.toggle('active');
}