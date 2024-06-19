const formatPrice = ({ amount = 0, region = 'en-US', currency = 'USD' }) => {
  return new Intl.NumberFormat(region, {
    style: 'currency',
    currency,
  }).format(amount);
};

export default formatPrice;
