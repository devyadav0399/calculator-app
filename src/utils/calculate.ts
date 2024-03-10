const convertToNumber = (str: string) => {
  return Number(str);
};

export const calculate = (
  leftOperand: string,
  operation: string,
  rightOperand: string
) => {
  console.log(leftOperand, operation, rightOperand);
  switch (operation) {
    case "+":
      return (
        convertToNumber(leftOperand) + convertToNumber(rightOperand)
      ).toString();

    case "-":
      return (
        convertToNumber(leftOperand) - convertToNumber(rightOperand)
      ).toString();

    case "x":
      return Math.floor(
        convertToNumber(leftOperand) * convertToNumber(rightOperand)
      ).toString();

    case "/":
      return Math.floor(
        convertToNumber(leftOperand) / convertToNumber(rightOperand)
      ).toString();
    default:
      return "0";
  }
};
