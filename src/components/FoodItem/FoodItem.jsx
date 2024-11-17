
// import { useContext } from 'react';
// import { assets } from '../../assets/assets'
// import './FoodItem.css'
// import PropTypes from 'prop-types';
// import { StoreContext } from '../../context/StoreContext';

// const FoodItem = ({id,name,price,description,image}) => {

//    // const [itemCount , setItemCount]=useState(0)
//     const [cartItems,addToCart,removeFromCart] =useContext(StoreContext);
//   return (
//     <div className='food-item' id={id}> {/* Using id in the div */}
//         <div className='food-item-image-container'>
//             <img className='food-item-image' src={image} alt=""/>
//             {
//                 !cartItems[id]
//           ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
//                 :<div className='food-item-coutner'>

//                   <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
//                   <p>{cartItems(id)}</p>
//                   <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
//                     </div>
//             }

//         </div>
//         <div className='food-item-info'>
//             <div className='food-item-name-rating'>
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt=""/>
//             </div>
//             <p className='food-item-desc'>{description}</p>
//             <p className='food-item-price'>${price}</p>

//         </div>
      
//     </div>
//   )
// }
// // Validate props with PropTypes
// FoodItem.propTypes = {
//     id: PropTypes.string.isRequired,           // Added id prop validation
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//   };

// export default FoodItem
import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css';
import PropTypes from 'prop-types';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);  // Correctly destructure as object

    return (
        <div className='food-item' id={id}> {/* Using id in the div */}
            <div className='food-item-image-container'>
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id] ? (
                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
                ) : (
                    <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from Cart" />
                        <p>{cartItems[id]}</p> {/* Access cartItems by id */}
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more" />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

// Validate props with PropTypes
FoodItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};

export default FoodItem;
