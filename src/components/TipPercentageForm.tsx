import { useCallback } from "react";
import { TIP_PERCENTAGES } from "../constants";

// Tip option interface
interface TipOption {
  id: string;
  value: number;
  label: string;
}

// Tip options configuration
const tipOptions: TipOption[] = [
  {
    id: "tip-low",
    value: TIP_PERCENTAGES.LOW,
    label: "10%",
  },
  {
    id: "tip-medium",
    value: TIP_PERCENTAGES.MEDIUM,
    label: "20%",
  },
  {
    id: "tip-high",
    value: TIP_PERCENTAGES.HIGH,
    label: "50%",
  },
];

// Props for TipPercentageForm component
type TipPercentageFormProps = {
  setTip: (tip: number) => void;
  tip: number;
};

/**
 * Component for selecting tip percentage
 * Provides visual buttons for common tip amounts
 */
export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  // Handle tip selection
  const handleTipChange = useCallback((newTip: number) => {
    setTip(newTip);
  }, [setTip]);

  return (
    <div className="space-y-4">
      <h3 className="font-black text-xl sm:text-2xl">Propina:</h3>
      <div className="flex justify-center gap-2 sm:gap-4" role="radiogroup" aria-label="Seleccionar propina">
        {tipOptions.map((tipOption) => (
          <label
            key={tipOption.id}
            className={`flex-1 flex items-center justify-center px-2 py-2 sm:px-6 sm:py-3 rounded-lg border-2 cursor-pointer transition-all max-w-[100px] sm:max-w-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 ${
              tipOption.value === tip
                ? "border-teal-500 bg-teal-50 text-teal-700 font-black"
                : "border-gray-300 hover:border-gray-400"
            }`}
            role="radio"
            aria-checked={tipOption.value === tip}
            aria-label={`Propina del ${tipOption.label}`}
            tabIndex={tipOption.value === tip ? 0 : -1}
          >
            <input
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={() => handleTipChange(tipOption.value)}
              checked={tipOption.value === tip}
              className="sr-only"
            />
            {tipOption.label}
          </label>
        ))}
      </div>
    </div>
  );
}
