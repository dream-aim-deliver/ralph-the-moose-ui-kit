export const formatNumber = (number: number) => {
  return Intl.NumberFormat(`en-US`).format(number);
};
