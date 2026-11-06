/**
 * Currency and Date Formatters for Sherpa Escapes
 * 
 * Configured for Indian Market (INR) with Indian number grouping (lakhs & thousands)
 * E.g. ₹25,000, ₹1,25,000, ₹2,50,000
 */

/**
 * Documented base exchange-rate assumption for reference or future international conversions
 * 1 USD ~ 85 INR
 */
export const USD_TO_INR_RATE = 85;

/**
 * Formats a numeric price into Indian Rupees (INR) using Indian number grouping (lakhs & thousands)
 * @param {number} amount - Numeric price
 * @param {string} currency - Defaults to 'INR'
 * @param {string} locale - Defaults to 'en-IN'
 * @returns {string} Formatted Indian Rupee string
 */
export const formatCurrency = (amount, currency = 'INR', locale = 'en-IN') => {
  if (amount == null || isNaN(amount)) return '₹0';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats a date string into readable format
 * @param {string|Date} date
 * @returns {string}
 */
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
};
