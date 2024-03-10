import { useStore } from "../../store";

export const useCalculatorStore = () => {
  const value = useStore((store) => store.value);
  const updateValue = useStore((store) => store.updateValue);
  const resetValue = useStore((store) => store.resetValue);
  const startOperation = useStore((store) => store.startOperation);
  const finishOperation = useStore((store) => store.finishOperation);

  return { value, updateValue, resetValue, startOperation, finishOperation };
};
