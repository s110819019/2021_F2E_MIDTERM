import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import pokes from "../json/pokes.json";
import {
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_BAG_ITEM,
  REMOVE_BAG_ITEM,
  SET_POKE_DETAIL,
} from "../utils/constants";

export const StoreContext = createContext();
// let bagItems = localStorage.getItem("bagItems")
//   ? JSON.parse(localStorage.getItem("bagtItems"))
//   : [];

const initialState = {
  page: {
    pokes,
  },
  navBar: {
    activeItem: "/",
  },
  // bagItems,
  // pokeDetail: {
  //   poke: {},
  //   qty: 1,
  // },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_PAGE_CONTENT:
      return {
        ...state,
        page: {
          pokes: action.payload,
        },
      };
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
      };
    // case ADD_BAG_ITEM:
    //   const item = action.payload;
    //   const poke = state.bagItems.find((x) => x.id === item.id);
    //   if (poke) {
    //     bagItems = state.bagItems.map((x) =>
    //       x.id === poke.id ? item : x
    //     );
    //     return { ...state, bagItems };
    //   }
    //   bagItems = [...state.bagItems, item];
    //   return { ...state, bagItems };
    // case REMOVE_BAG_ITEM:
    //   bagItems = state.bagItems.filter((x) => x.id !== action.payload);
    //   return { ...state, bagItems };
    // case SET_POKE_DETAIL:
    //   return { ...state, pokeDetail: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
