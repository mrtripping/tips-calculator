import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
  className?: string;
};

export default function MenuItem({ item, addItem, className = "" }: MenuItemProps) {
  return (
    <button
      onClick={() => addItem(item)}
      className={`border-2 border-teal-400 hover:bg-teal-200 w-full p-3 sm:p-4 flex justify-between items-center active:scale-[0.98] transition-transform ${className}`}
    >
      <p className="text-sm sm:text-base text-left">{item.name}</p>
      <p className="font-black text-sm sm:text-base">${item.price}</p>
    </button>
  );
}
