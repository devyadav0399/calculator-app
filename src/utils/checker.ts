export const isSingleDigit = (str: string) => {
  const singleDigitRegex = /^[0-9]$/;
  return singleDigitRegex.test(str);
};
