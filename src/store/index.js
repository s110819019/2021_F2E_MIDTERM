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
  pokeDetail: {
    poke: {},
  },
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
    case SET_POKE_DETAIL:
      return {
        ...state,
        pokeDetail: {
          poke: action.payload,
        },
      };
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
