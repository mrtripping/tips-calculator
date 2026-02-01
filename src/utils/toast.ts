import { TOAST_DURATION } from "../constants";

// Utility functions for toast management
export const generateToastId = () => Date.now().toString();

export const autoRemoveToast = (removeFn: () => void) => {
  setTimeout(() => {
    removeFn();
  }, TOAST_DURATION);
};

// Export TOAST_DURATION for components
export { TOAST_DURATION };