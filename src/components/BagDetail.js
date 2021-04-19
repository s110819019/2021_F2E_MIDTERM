import { Modal, Button, Select } from "antd";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store"
import { BagIcon } from "./Icons";
import { addBagItem, removeBagItem, setPokeDetail } from "../actions";
const { Option } = Select;

export default function CartModal() {
   const { state: { bagItems }, dispatch } = useContext(StoreContext);
   // const handleCancel = () => toggleModal(!isModalVisible);
   // const getTotalPrice = () => {
   //    return (bagItems.length > 0) ?
   //       bagItems.reduce((sum, item) => sum + item.price * item.qty, 0)
   //       : 0;
   // }

   useEffect(() => {
      localStorage.setItem("bagItems", JSON.stringify(bagItems));
   }, [bagItems])

   return (
      <>
         {bagItems.length === 0 ? (
            <div>Bag is empty</div>
         ) : (
            bagItems.map(item => (
               <li key={item.id} className="cart-item">
                  <Link to={`/poke/${item.id}`}>
                     <div className="cart-image" onClick={()=>{
                        setPokeDetail(dispatch, item.id, item.qty);
                        // handleCancel();
                     }}>
                        <img src={item.image} alt={item.name} />
                     </div>
                  </Link>
                  <div className="cart-item-content">
                     <div className="cart-name">{item.name}</div>
                     <div className="product-qty">
                        Qty: {"   "}
                        {/* <Select
                           defaultValue={item.qty}
                           value={item.qty}
                           className="select-style"
                           onChange={(qty) => addCartItem(dispatch, item, qty)}
                        >
                           {[...Array(item.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select> */}
                     </div>
                  </div>
                  <div className="cart-item-end">
                     {/* <div className="cart-price">
                        ${item.price * item.qty}
                     </div> */}
                     <div className="cart-item-delete" onClick={() => removeBagItem(dispatch, item.id)}>
                        x
                     </div>
                  </div>

               </li>
            ))
         )}
         {/* <div className="cart-total-price-wrap">
            Total
            <div className="cart-total-price">${getTotalPrice()}</div>
         </div> */}
         <Button
            className="cart-modal-btn"
            type="primary"
         >
            <BagIcon size={20} />
            <span style={{ marginLeft: 12 }}>Start Checkout</span>
         </Button>
      </>
   );
}