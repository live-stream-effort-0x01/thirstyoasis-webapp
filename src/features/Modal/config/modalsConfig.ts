// src/config/modalsConfig.ts

export interface ModalData {
    id: string; // The actual DOM ID string for the modal element
    displayStyle: 'flex' | 'block';
}

// Define the MODALS object with 'as const' to infer literal types for its keys
export const MODALS = {
    SIGNUP: {
        id: "signup-modal",
        displayStyle: "flex"
    },
    LOGIN: {
        id: "login-modal",
        displayStyle: "flex"
    },
    STREAM_NOW: {
        id: "stream-now-modal",
        displayStyle: "block"
    },
    BUY_TOKENS: {
        id: "buy-tokens-modal",
        displayStyle: "block"
    },
    BUY_NOW: {
        id: "buy-now-modal",
        displayStyle: "block"
    },
    PROFILE: {
        id: "profile-modal",
        displayStyle: "block"
    },
    PURCHASE_ROOM: {
        id: "purchase-room-modal",
        displayStyle: "block"
    }
} as const; // IMPORTANT: 'as const' makes the keys literal types

// Define ModalKey as a union of the string literal KEYS of the MODALS object.
// This is the type you should use for your `modalKey` state variable.
export type ModalKey = keyof typeof MODALS | null; // e.g., 'SIGNUP' | 'LOGIN' | ... | null

// Optional: Define a type for the actual DOM ID strings, if needed for functions like getElementById.
// This type is a union of all 'id' properties.
export type ModalIdString = typeof MODALS[keyof typeof MODALS]['id']; // e.g., 'signup-modal' | 'login-modal' | ...