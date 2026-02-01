import { useState, useCallback } from "react";
import { ANIMATION_DURATION, TOAST_DURATION } from "../constants";

// Toast notification interface
interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

// Custom hook for managing toast notifications
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Remove a toast notification by ID
  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  // Add a new toast notification
  const addToast = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = Date.now().toString();
    const newToast = { id, message, type };

    setToasts(prev => [...prev, newToast]);

    // Auto-remove toast after duration
    setTimeout(() => {
      removeToast(id);
    }, TOAST_DURATION);
  }, [removeToast]);

  return { toasts, addToast, removeToast };
}

// Toast container component for displaying notifications
interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

export default function ToastContainer({ toasts, removeToast }: ToastContainerProps) {
  return (
    <div 
      className="fixed top-4 right-4 left-4 sm:left-auto sm:right-4 z-50 space-y-2 max-w-sm mx-auto sm:mx-0"
      role="alert"
      aria-live="polite"
    >
      {toasts.map((toast) => {
        const toastColors = {
          success: "bg-green-500",
          error: "bg-red-500",
          info: "bg-blue-500",
        };

        return (
          <div
            key={toast.id}
            className={`p-3 sm:p-4 rounded-lg shadow-lg text-white transform transition-all duration-${ANIMATION_DURATION.TOAST} ease-in-out max-w-full ${toastColors[toast.type]}`}
            role="alert"
            aria-label={`${toast.type} notification: ${toast.message}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base pr-2">{toast.message}</span>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white hover:text-gray-200 text-xl leading-none flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
                aria-label="Dismiss notification"
              >
                ×
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}