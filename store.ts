import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { calculate } from "./src/utils/calculate";

interface CalculatorState {
  value: string;
  operation: string;
  leftOperand: string;
  updateValue: (digit: string) => void;
  resetValue: () => void;
  startOperation: (operation: string) => void;
  finishOperation: () => void;
}

const store = (set: any) => ({
  value: "0",
  operation: "",
  leftOperand: "",
  updateValue: (digit: string) => {
    set((state: CalculatorState) => ({
      value: state.value === "0" ? digit : state.value.concat(digit),
    }));
  },
  resetValue: () => {
    set(() => ({ value: "0" }));
  },
  startOperation: (operation: string) => {
    set((state: CalculatorState) => ({
      leftOperand: state.value,
      operation: operation,
      value: "0",
    }));
  },
  finishOperation: () => {
    set((state: CalculatorState) => ({
      value: calculate(state.leftOperand, state.operation, state.value),
    }));
  },
});

export const useStore = create<CalculatorState>(store);
