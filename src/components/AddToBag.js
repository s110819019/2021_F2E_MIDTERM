import { useEffect, useContext } from "react";
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { BagIcon } from "./Icons";
import { addBagItem } from "../actions";

export default function AddToBag() {
  const { state: { bagItems, pokeDetail: { poke, qty } }, dispatch } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: 'Bag Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${poke.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement: 'bottomRight'
    });
  };

  const addToBag = () => {
    openNotification();
    addBagItem(dispatch, poke, qty);
  };

  useEffect(()=>{
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
  }, [bagItems])

  return (
    <Button type="primary" className="btn-tocar" onClick={addToBag}>
      <BagIcon size={20} />
      <span style={{ marginLeft: 12 }}>Add To pokemon Bag</span>
    </Button>
  );
}
