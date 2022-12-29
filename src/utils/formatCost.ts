export const formatCost = (cost: string, currency: string): string => {
  return `${cost.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${currency}`;
};
