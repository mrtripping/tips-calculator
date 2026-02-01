// Utility functions for the tips calculator application

/**
 * Format number as currency string using USD locale
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Format date for display in saved orders
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return date.toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

/**
 * Safely save data to localStorage with error handling
 * @param key - Storage key
 * @param data - Data to save
 * @returns True if successful, false otherwise
 */
export function saveToLocalStorage<T>(key: string, data: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Failed to save to localStorage for key "${key}":`, error);
    return false;
  }
}

/**
 * Safely retrieve data from localStorage with error handling
 * @param key - Storage key
 * @param defaultValue - Default value if not found or error
 * @returns Retrieved data or default value
 */
export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error(`Failed to retrieve from localStorage for key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Generate a unique ID using timestamp
 * @returns Unique ID string
 */
export function generateId(): string {
  return Date.now().toString();
}

/**
 * Validate quantity input to ensure it's a positive number
 * @param quantity - Quantity to validate
 * @returns True if valid, false otherwise
 */
export function isValidQuantity(quantity: number): boolean {
  return Number.isInteger(quantity) && quantity > 0;
}