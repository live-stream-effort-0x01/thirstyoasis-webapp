
export default function selectPriceOption(element: Element) {
    // Remove active class from all price options
    const priceOptions = document.querySelectorAll('.price-option');
    priceOptions.forEach(option => option.classList.remove('active'));

    // Add active class to the clicked price option
    element.classList.add('active');
}