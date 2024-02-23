import { DATA } from "../constDATA/DATA";
import { checkName } from "../conditions/conditions";
import { getCurrencySymbol } from "../conditions/conditions";
import { getLeft } from "../conditions/conditions";

type ListingType = {
    items?: typeof DATA;
};

export const Listing: React.FC<ListingType> = ({items = []}) => {

    return (
        <div className="item-list">
            {items.map( item => {
                return (
                    item.title &&
                    <div className="item" key={item.listing_id}>
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage?.url_570xN} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{checkName(item.title)}</p>
                            <p className="item-price">{getCurrencySymbol(item.currency_code)}{item.price}</p>
                            <p className={getLeft(item.quantity)}>{item.quantity} left</p>
                        </div>
                    </div>
            )} )}
        </div>        
    )
}