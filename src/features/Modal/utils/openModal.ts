
export default function openModal({id, displayStyle}: ModalData) :void {

    //render modal
    
    
    //change class
    const modal = document.getElementById(id);

    if (modal !== null) modal.style.display = displayStyle;
}
