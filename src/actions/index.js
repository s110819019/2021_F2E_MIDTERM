import {
    SET_PAGE_CONTENT,
    SET_NAVBAR_ACTIVEITEM,
    ADD_BAG_ITEM,
    REMOVE_BAG_ITEM,
    SET_POKE_DETAIL,
  } from "../utils/constants";
  
  import allpoke from "../json/allpoke.json";
  
  export const addBagItem = (dispatch, poke, qty) => {
    const item = {
      id: poke.id,
      name: poke.name,
      image: poke.image,
      qty,
    };
    dispatch({
      type: ADD_BAG_ITEM,
      payload: item,
    });
  };
  
  export const removeBagItem = (dispatch, pokeId) => {
    dispatch({
      type: REMOVE_BAG_ITEM,
      payload: pokeId,
    });
  };
  
  
//   export const setPokeDetail = (dispatch, pokeId, qty) => {
//     const poke = allpoke.find(
//       x => x.id === pokeId
//     );
    
//     if(qty === 0 && product.countInStock > 0)
//         qty = 1;
  
//     dispatch({
//       type: SET_PRODUCT_DETAIL,
//       payload: {
//         product,
//         qty,
//       }
//     })
//   }
  
  export const pageContentsSet = (dispatch, title, poke) => {
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, poke },
    });
  };
  
  export const activeNavItemSet = (dispatch, activeNavItem) => {
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: activeNavItem,
    });
  };
  