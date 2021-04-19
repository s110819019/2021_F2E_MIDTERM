import {
    SET_PAGE_CONTENT,
    SET_NAVBAR_ACTIVEITEM,
    ADD_BAG_ITEM,
    REMOVE_BAG_ITEM,
    SET_POKE_DETAIL,
    SET_POKE_SHINY,
} from "../utils/constants";
  
import pokes from "../json/pokes.json";
  
export const addBagItem = (dispatch, poke, qty, shiny) => {
    const item = {
		id: poke.id,
		no: poke.no,
		name: poke.name,
		image: poke.image,
		shinyimage: poke.shinyimage,
		qty,
		shiny,
    };
    dispatch({
		type: ADD_BAG_ITEM,
		payload: item,
    });
};
  
export const removeBagItem = (dispatch, poke, shiny) => {
    const removedItem = {
		id: poke.id,
		name: poke.name,
		image: poke.image,
		shinyimage: poke.shinyimage,
		shiny,
    }
    dispatch({
		type: REMOVE_BAG_ITEM,
		payload: removedItem,
    });
};
  
  
export const setPokeDetail = (dispatch, pokeId, qty) => {
    const poke = pokes.find(
      	x => x.id === pokeId
    );
    if ( qty === 0 )
      	qty = 1;
    dispatch({
		type: SET_POKE_DETAIL,
		payload: { poke, qty},
    });
};

export const setPokeShiny = (dispatch, shiny) => {
    dispatch({
		type: SET_POKE_SHINY,
		payload: shiny,
    });
}

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
  