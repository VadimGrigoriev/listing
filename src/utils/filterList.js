import formatPrice from './formatPrice';
import getLevelClass from './getLevelClass';
import formatTitle from './formatTitle';

function filterList(data) {
  const filteredData = data.filter(item => item.state === 'active');

  const dataListing = filteredData.map(item => ({
    listing_id: item.listing_id,
    url: item.url,
    mainImage: item.MainImage.url_570xN,
    title: formatTitle(item.title),
    price: formatPrice(item.currency_code, item.price),
    quantity: item.quantity,
    quantityClass: getLevelClass(item.quantity)
  }));

  return dataListing;
}

export default filterList;
