/**
 * Formats a price.
 * @param {Object} props - The price to format.
 * @param {number} props.amount - The amount to format.
 * @param {string} props.region - The region to format for.
 * @param {string} props.currency - The currency to format for.
 */
const formatPrice = ({ amount = 0, region = 'en-US', currency = 'USD' }) => {
  return new Intl.NumberFormat(region, {
    style: 'currency',
    currency,
  }).format(amount);
};

export default formatPrice;
