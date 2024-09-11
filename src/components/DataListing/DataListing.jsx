import data from '../../data/etsy.json'
import filterList from '../../utils/filterList';
import Listing from '../Listing/Listing';

function DataListing() {
  const offersList = filterList(data);
  console.log(offersList);

  return (
    <div className="item-list">
      {offersList.map(({listing_id, ...offer}) => (
        <Listing key={listing_id} {...offer} />
      ))}
    </div>
  )
}

export default DataListing;
