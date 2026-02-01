import { formatCurrency } from "../utils";
import type { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  // Calculate order totals - memoization not needed for simple calculations
  const subtotal = order.reduce((total, item) => total + item.price * item.quantity, 0);
  const tipAmount = subtotal * tip;
  const totalAmount = subtotal + tipAmount;
  return (
    <>
      <div className="space-y-2 sm:space-y-3">
        <h2 className="font-black text-xl sm:text-2xl">Totales y Propina:</h2>
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-base">Subtotal:</span>
            <span className="font-black text-sm sm:text-base">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-base">Propina:</span>
            <span className="font-black text-sm sm:text-base">{formatCurrency(tipAmount)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between items-center">
            <span className="text-base sm:text-lg font-black">Total:</span>
            <span className="font-black text-lg sm:text-xl text-teal-600">{formatCurrency(totalAmount)}</span>
          </div>
        </div>
      </div>
      <button
        className="w-full bg-black hover:bg-gray-800 p-3 sm:p-4 uppercase text-white font-black mt-6 sm:mt-10 rounded-lg transition-colors active:scale-[0.98] disabled:opacity-10 disabled:cursor-not-allowed"
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
