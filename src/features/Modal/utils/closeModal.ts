// src/utils/closeModal.ts (or part of modalUtils.ts)

// Define the type for the object containing setModalKey
interface ModalControlProps {
    setModalKey: React.Dispatch<React.SetStateAction<string | null>>;
  }
  
  // Update the function signature to accept the ModalControlProps object
  export default function closeModal(modalId: string, { setModalKey }: ModalControlProps): void {
    // Instead of directly manipulating the DOM, you update the React state.
    // Setting modalKey to null will tell your main Modal component to hide itself.
    setModalKey(null);
  
    // You can remove the direct DOM manipulation if your Modal component correctly
    // uses the modalKey state to control display.
    // const modal = document.getElementById(modalId);
    // if (modal !== null) modal.style.display = 'none';
  }