/**
 * @function formatCurrency
 * Format number a currency (US Dollars)
 *
 * @param {number} amount
 * @returns {string} number formatted as currency.
 *
 * @example
 *   formatCurrency(0)
 *   // => $0.00
 *
 * * @example
 *   formatCurrency(1.5)
 *   // => $1.5
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
}
