import { useState, useContext } from "react";
import { Badge } from "antd";
import { BagIcon } from "./Icons";
import { StoreContext } from "../store"
import { Link } from "react-router-dom";

export default function BagSummary() {

  const { state: { bagItems } } = useContext(StoreContext);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const toggleModal = () => setIsModalVisible(!isModalVisible);

//   const count = (bagItems.length > 0) ?
//     cartItems.reduce((sum, item) => sum + item.qty, 0)
//     : 0;

  return (
    <>
      <Link to="/pokebag" className="header__bag-summary">
        <Badge count={6} size={"small"} style={{ color: 'white', backgroundColor: '#6366F2' }}>
          <BagIcon size={32} />
        </Badge>
        <p className="header__cart-summary-text"> Pokémon bag </p>
      </Link>
    </>
  );
}
