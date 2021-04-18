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
       	<Row gutter={[32, 32]} justify="space-around">
         	<Col
            	lg={{ span: 8, offset: 2 }}
         	>
            	<img className="poke__image"
					alt=""
					src={ poke.image }
            	/>
         	</Col>
         	<Col
            	lg={{ span: 12 }}
         	>
            	<div className="pokeDetail__wrap">
               		<h1 className="pokeDetail__name">
                  		{poke.name}
               		</h1>
					<h2 className="pokeDetail__category">
						{poke.category}
					</h2>
					<div className="pokeDetail__type-wrap">
						<h1 className="pokeDetail__type-title">
							屬性：
						</h1>
						<h2 className={`pokeDetail__type ${poke.type1__class}`}>
							{poke.type1}
						</h2>
						<h2 className={`pokeDetail__type pokeDetail__type2 ${poke.type2__class}`}>
							{poke.type2}
						</h2>
					</div>
               		<p className="pokeDetail__about">
						{poke.about}
					</p>
               		{/* <div className="product-price-wrap">
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