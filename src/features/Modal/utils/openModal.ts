
export default function openModal({id, displayStyle}: ModalData) :void {

    //change class
    const modal = document.getElementById(id);

    if (modal !== null) modal.style.display = displayStyle;
}
