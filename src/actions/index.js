import {
    SET_PAGE_CONTENT,
    SET_NAVBAR_ACTIVEITEM,
    ADD_BAG_ITEM,
    REMOVE_BAG_ITEM,
    SET_POKE_DETAIL,
  } from "../utils/constants";
  
  import pokes from "../json/pokes.json";
  
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
  
  
  export const setPokeDetail = (dispatch, pokeId) => {
    const poke = pokes.find(
      x => x.id === pokeId
    );
    dispatch({
      type: SET_POKE_DETAIL,
      payload: poke,
    });
  };
  
  export const pageContentsSet = (dispatch, pokes) => {
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: pokes,
    });
  };
  
  export const activeNavItemSet = (dispatch, activeNavItem) => {
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: activeNavItem,
    });
  };
  