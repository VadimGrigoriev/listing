type ListingProps = {
  url: string;
  mainImage: string;
  title: string;
  price: string;
  quantity: number;
  quantityClass: string;
}

function Listing({url, mainImage, title, price, quantity, quantityClass}: ListingProps) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={mainImage} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={`item-quantity ${quantityClass}`}>{quantity} left</p>
      </div>
    </div>
  );
}

export default Listing;
