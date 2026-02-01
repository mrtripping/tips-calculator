import { useState, useEffect, useCallback } from "react";
import type { MenuItem, OrderItem } from "../types";
import type { SavedOrder } from "../types/order";
import { saveToLocalStorage, getFromLocalStorage, generateId, formatDate } from "../utils";
import { LOCAL_STORAGE_KEYS } from "../constants";

// Return type for order operations
type OrderResult = {
  message: string;
  type: "success" | "error" | "info";
};

export default function useOrder() {
  // State management
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState<number>(0);
  const [savedOrders, setSavedOrders] = useState<SavedOrder[]>([]);
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);

  // Load saved orders from localStorage on component mount
  useEffect(() => {
    const loadedOrders = getFromLocalStorage<SavedOrder[]>(LOCAL_STORAGE_KEYS.SAVED_ORDERS, []);
    setSavedOrders(loadedOrders);
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage(LOCAL_STORAGE_KEYS.SAVED_ORDERS, savedOrders);
  }, [savedOrders]);

  // Calculate total amount for an order
  const calculateTotal = useCallback((items: OrderItem[], tipAmount: number): number => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return subtotal + tipAmount;
  }, []);

  // Add item to current order or increment quantity if exists
  const addItem = useCallback((item: MenuItem) => {
    setOrder(prevOrder => {
      const existingItem = prevOrder.find(orderItem => orderItem.id === item.id);
      
      if (existingItem) {
        // Increment quantity of existing item
        return prevOrder.map(orderItem =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        // Add new item with quantity 1
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  }, []);

  // Remove item completely from current order
  const removeItem = useCallback((id: MenuItem["id"]) => {
    setOrder(prevOrder => prevOrder.filter(orderItem => orderItem.id !== id));
  }, []);

  // Update quantity of a specific item
  const updateQuantity = useCallback((id: MenuItem["id"], quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setOrder(prevOrder =>
        prevOrder.map(orderItem =>
          orderItem.id === id
            ? { ...orderItem, quantity }
            : orderItem
        )
      );
    }
  }, [removeItem]);

  // Save or update current order
  const placeOrder = useCallback((): OrderResult | void => {
    if (order.length === 0) {
      return { message: "La orden está vacía", type: "error" };
    }

    const total = calculateTotal(order, tip);
    const orderData = {
      items: order.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      tip,
      total,
      date: formatDate(new Date()),
    };

    if (activeOrderId) {
      // Update existing saved order
      setSavedOrders(prevOrders =>
        prevOrders.map(savedOrder =>
          savedOrder.id === activeOrderId
            ? { ...savedOrder, ...orderData }
            : savedOrder
        )
      );
      setActiveOrderId(null);
      setOrder([]);
      setTip(0);
      return { message: "Orden actualizada con éxito!", type: "success" };
    } else {
      // Create new saved order
      const newSavedOrder: SavedOrder = {
        ...orderData,
        id: generateId(),
      };

      setSavedOrders(prevOrders => [newSavedOrder, ...prevOrders]);
      setOrder([]);
      setTip(0);
      return { message: "Orden guardada con éxito!", type: "success" };
    }
  }, [order, tip, activeOrderId, calculateTotal]);

  // Load a saved order for editing
  const loadOrder = useCallback((savedOrder: SavedOrder): OrderResult => {
    setOrder(savedOrder.items.map(item => ({ ...item })));
    setTip(savedOrder.tip);
    setActiveOrderId(savedOrder.id);
    return { message: "Orden cargada con éxito!", type: "info" };
  }, []);

  // Delete a saved order
  const deleteOrder = useCallback((id: string): OrderResult => {
    setSavedOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    
    // Clear active order if it was the deleted one
    if (activeOrderId === id) {
      setActiveOrderId(null);
      setOrder([]);
      setTip(0);
    }
    
    return { message: "Orden eliminada", type: "info" };
  }, [activeOrderId]);

  // Clear the currently active order
  const clearActiveOrder = useCallback((): OrderResult => {
    setActiveOrderId(null);
    setOrder([]);
    setTip(0);
    return { message: "Orden activa limpiada", type: "info" };
  }, []);

  return {
    // State
    order,
    tip,
    savedOrders,
    activeOrderId,
    
    // Actions
    setTip,
    addItem,
    removeItem,
    updateQuantity,
    placeOrder,
    loadOrder,
    deleteOrder,
    clearActiveOrder,
  };
}