import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import SavedOrders from "./components/SavedOrders";
import ToastContainer, { useToast } from "./components/Toast";
import Footer from "./components/Footer";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { useGitHubProfile } from "./hooks/useGitHubProfile";
import type { SavedOrder } from "./types/order";

function App() {
  const { order, tip, setTip, addItem, removeItem, updateQuantity, placeOrder, savedOrders, loadOrder, deleteOrder, activeOrderId, clearActiveOrder } = useOrder();
  const { toasts, addToast, removeToast } = useToast();
  const { profile, loading } = useGitHubProfile("mrtripping");

  const handlePlaceOrder = () => {
    const result = placeOrder();
    if (result) {
      addToast(result.message, result.type);
    }
  };

  const handleLoadOrder = (order: SavedOrder) => {
    const result = loadOrder(order);
    addToast(result.message, result.type);
  };

  const handleDeleteOrder = (id: string) => {
    const result = deleteOrder(id);
    addToast(result.message, result.type);
  };

  return (
    <>
      <header className="bg-teal-400 py-4 sm:py-5">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-black px-2">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-8 sm:py-12 md:py-20 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Menú</h2>
            <SavedOrders 
              savedOrders={savedOrders}
              loadOrder={handleLoadOrder}
              deleteOrder={handleDeleteOrder}
              activeOrderId={activeOrderId}
            />
          </div>

          {activeOrderId && (
            <div className="mb-4 p-3 bg-orange-100 border border-orange-300 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="text-sm text-orange-800 font-black">
                  📝 Editando orden guardada
                </p>
                <button
                  onClick={() => {
                    const result = clearActiveOrder();
                    addToast(result.message, result.type);
                  }}
                  className="text-xs bg-orange-400 hover:bg-orange-500 text-white px-2 py-1 rounded font-black"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          <div className="space-y-3 mt-6 sm:mt-8 md:mt-10">
            {menuItems.map((item, index) => (
              <MenuItem 
                key={item.id} 
                item={item} 
                addItem={addItem}
                className={index === menuItems.length - 1 ? "lg:mb-6" : ""}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-4 sm:p-5 rounded-lg space-y-6 sm:space-y-8 md:space-y-10 lg:pt-6">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} updateQuantity={updateQuantity} />

              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={handlePlaceOrder} />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
      
      <Footer profile={profile} loading={loading} />
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  );
}

export default App;
