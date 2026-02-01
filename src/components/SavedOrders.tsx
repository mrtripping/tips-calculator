import { useState } from "react";
import type { SavedOrder } from "../types/order";
import { formatCurrency } from "../utils";

type SavedOrdersProps = {
  savedOrders: SavedOrder[];
  loadOrder: (order: SavedOrder) => void;
  deleteOrder: (id: string) => void;
  activeOrderId: string | null;
};

export default function SavedOrders({
  savedOrders,
  loadOrder,
  deleteOrder,
  activeOrderId,
}: SavedOrdersProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 sm:px-4 rounded-lg font-black flex items-center gap-2 text-sm sm:text-base active:scale-[0.95] transition-transform"
      >
        📋 Órdenes ({savedOrders.length})
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-black text-lg">Órdenes Guardadas</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {savedOrders.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No hay órdenes guardadas
              </div>
            ) : (
              savedOrders.map((order) => (
                <div
                  key={order.id}
                  className={`p-4 border-b border-gray-100 hover:bg-gray-50 last:border-b-0 ${activeOrderId === order.id ? 'ring-2 ring-teal-500 bg-teal-50' : ''}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-black text-sm">{order.date}</p>
                      <p className="text-xs text-gray-500">
                        {order.items.length} productos
                      </p>
                      {activeOrderId === order.id && (
                        <p className="text-xs text-teal-600 font-black mt-1">📝 Editando</p>
                      )}
                    </div>
                    <p className="font-black">{formatCurrency(order.total)}</p>
                  </div>

                  <div className="space-y-1 mb-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="text-xs text-gray-600">
                        {item.quantity}x {item.name}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        loadOrder(order);
                        setIsOpen(false);
                      }}
                      className={`flex-1 py-1.5 px-2 rounded text-xs sm:text-sm font-black active:scale-[0.95] transition-transform ${
                        activeOrderId === order.id 
                          ? 'bg-orange-400 hover:bg-orange-500 text-white' 
                          : 'bg-teal-400 hover:bg-teal-500 text-white'
                      }`}
                    >
                      {activeOrderId === order.id ? 'Editando' : 'Cargar'}
                    </button>
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1.5 px-2 rounded text-xs sm:text-sm font-black active:scale-[0.95] transition-transform"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}