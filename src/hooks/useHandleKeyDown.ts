import { useCalculatorStore } from "./useCalculatorStore";

export const useHandleKeyDown = () => {
  const { updateValue, resetValue, startOperation, finishOperation } =
    useCalculatorStore();

  const handleKeyDown = (event: any) => {
    const { key } = event;

    switch (key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        updateValue(key);
        break;
      case "+":
        startOperation("+");
        break;
      case "-":
        startOperation("-");
        break;
      case "*":
        startOperation("*");
        break;
      case "/":
        startOperation("/");
        break;
      case "Enter":
        finishOperation();
        break;
      case "Backspace":
        resetValue();
        break;
      default:
        break;
    }
  };
  return { handleKeyDown };
};
