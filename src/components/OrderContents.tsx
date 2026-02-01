import { formatCurrency } from "../utils";
import type { OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: OrderItem["id"]) => void;
  updateQuantity: (id: OrderItem["id"], quantity: number) => void;
};

export default function OrderContents({
  order,
  removeItem,
  updateQuantity,
}: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-2xl sm:text-3xl md:text-4xl">Consumo</h2>
      <div className="space-y-3 mt-6 sm:mt-8 md:mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-3 sm:py-4 md:py-5 last-of-type:border-b"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base md:text-lg truncate">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <div className="flex items-center gap-1 sm:gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-teal-400 hover:bg-teal-500 text-white font-black w-7 h-7 sm:w-8 sm:h-8 rounded-full active:scale-[0.95] transition-transform"
                >
                  -
                </button>
                <span className="font-black mx-1 sm:mx-2 min-w-8 text-center text-sm sm:text-base">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-teal-400 hover:bg-teal-500 text-white font-black w-7 h-7 sm:w-8 sm:h-8 rounded-full active:scale-[0.95] transition-transform"
                >
                  +
                </button>
                <span className="ml-2 sm:ml-4 font-black text-sm sm:text-base">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 hover:bg-red-700 h-7 w-7 sm:h-8 sm:w-8 rounded-full text-white font-black ml-2 active:scale-[0.95] transition-transform"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
