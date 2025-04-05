
export default function openModal({id, displayStyle}: ModalData) {

    const modal = document.getElementById(id);

    if (modal !== null) modal.style.display = displayStyle;
}
