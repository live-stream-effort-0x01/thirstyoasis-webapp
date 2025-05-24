// src/utils/modalUtils.ts

import { ModalKey, ModalIdString } from '../config/modalsConfig'; // Import both types

// Props needed to control modal state.
// This interface defines the contract for passing modal state management to utilities.
interface ModalControlProps {
  currentModalKey: ModalKey; // The currently active modal KEY (e.g., 'LOGIN' or null)
  setModalKey: React.Dispatch<React.SetStateAction<ModalKey>>; // The setter for the ModalKey state
}

/**
 * Closes the currently active modal by setting the modalKey state to null.
 *
 * @param {ModalIdString} modalDomId - The actual DOM ID of the modal being closed (for context/logging, not direct DOM manipulation).
 * @param {ModalControlProps} { setModalKey } - Object containing the state setter function.
 */
export const closeModal = (modalDomId: ModalIdString, { setModalKey }: ModalControlProps): void => {
  // This is the core action: setting the React state to null hides the modal.
  setModalKey(null);

  // You can optionally use modalDomId here if you had special cleanup for a specific DOM element,
  // but if your `Modal.tsx` simply doesn't render when `modalKey` is null, this is unnecessary.
  // console.log(`Attempting to close modal with DOM ID: ${modalDomId}`);
};

/**
 * Handles clicks to open or manage modals based on their ModalKey.
 *
 * @param {ModalKey} newModalKey - The KEY of the modal to open (e.g., 'LOGIN', 'SIGNUP').
 * @param {ModalControlProps} { currentModalKey, setModalKey } - Object containing current modal state and setter.
 */
export const handleModalClick = (
  newModalKey: ModalKey, // This is the KEY from your MODALS object
  { currentModalKey, setModalKey }: ModalControlProps
) => {
  // If the target modal is already open, do nothing (or close it, depending on desired UX)
  if (currentModalKey === newModalKey) {
    console.log(`Modal ${newModalKey} is already open.`);
    return;
  }
  // Otherwise, set the new modal key to open the desired modal
  setModalKey(newModalKey);
};