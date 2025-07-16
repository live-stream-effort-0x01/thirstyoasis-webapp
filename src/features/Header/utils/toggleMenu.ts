export default function toggleMenu() {
    const navContainer = document.querySelector('.header__nav-container');
    if (navContainer) {
        // Toggle the active class on the nav container
        navContainer.classList.toggle('header__nav-container--active');
        
        // Also toggle on all nav lists within the container
        const navLists = navContainer.querySelectorAll('.header__nav-list');
        navLists.forEach(el => {
            el.classList.toggle('header__nav-list--active');
        });
    }
}