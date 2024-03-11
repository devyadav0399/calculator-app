import { useStore } from "../../store";

export const useCalculatorStore = () =>
  useStore((state) => ({
    value: state.value,
    leftOperand: state.leftOperand,
    operation: state.operation,
    updateValue: state.updateValue,
    resetValue: state.resetValue,
    startOperation: state.startOperation,
    finishOperation: state.finishOperation,
  }));
