export default function closeModal(modalId: string) :void {

    const modal = document.getElementById(modalId);
    
    if (modal !== null) modal.style.display = 'none';
}