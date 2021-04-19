import { useContext } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import { StoreContext } from "../store"
import { setPokeDetail } from "../actions";
import AddToBag from "./AddToBag";

const { Option } = Select;

function PokeDetail() {
   const { state: { pokeDetail: { poke, qty} }, dispatch } = useContext(StoreContext);

    return (
		<>
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
					</div>
				</Col>
		</Row >
		<Row gutter={[32, 32]} justify="space-around">
			<Col
				lg={{ span: 8, offset: 2 }}
			>
				<div className="pokeDetail__style-wrap">
					<AddToBag />
				</div>
			</Col>
		</Row>
	  </>
   );
}

export default PokeDetail;