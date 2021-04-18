import { useContext } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
// import AddToBag from "./AddToBag"
import { StoreContext } from "../store"
import { setPokeDetail } from "../actions";

const { Option } = Select;

function PokeDetail() {
   const { state: { pokeDetail: { poke } }, dispatch } = useContext(StoreContext);

   return (
      <Row gutter={[32, 32]}>
         <Col
            lg={{ span: 10, offset: 1 }}
         >
            <img className="poke__image"
					alt=""
					src={ poke.image }
            />
         </Col>
         <Col
            lg={{ span: 12 }}
         >
            <div className="poke__info--detail">
               	<h2 className="poke__area">
                  	{poke.area}
              	</h2>
               <h1 className="poke__name poke__name--large">
                  {poke.name}
               </h1>
               {/* <p className="poke__description">{poke.description_long}</p>
               <div className="product-price-wrap">
                  <p className="product-price product-price--large">
                     ${product.price}.00
               </p>
                  <p className="product-status">
                     Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                  </p>
                  <div className="product-qty">
                     Qty: {"   "}
                     <Select
                        defaultValue={qty}
                        value={qty}
                        className="select-style"
                        onChange={val => setProductDetail(dispatch, product.id, val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </div>
                  <p className="product-qty">
                     Total Price: ${product.price * qty}
                  </p>
                  <AddToCart />
               </div> */}
            </div>
         </Col>
      </Row>
   );
}

export default PokeDetail;