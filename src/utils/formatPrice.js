function formatPrice(currency_code, price) {
  switch (currency_code) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
   default:
      return `${price} ${currency_code}`
  }
}

export default formatPrice;
