export default function closeOverlay() {

    let overlay = document.getElementById('age-verification-overlay');
    
    if (overlay !== null) overlay.style.display = 'none';
}