import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
// import PokeBag from "./PokeBag";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";

export default function Header() {
    const { dispatch } = useContext(StoreContext);
    const onClickHeader = () => {
        pageContentsSet(dispatch, getJSON("/"));
        activeNavItemSet(dispatch, "/");
    };
    return(
        <>
            <header className="header">
                <div className="header__wrap">
                    <div className="header__text" onClick={onClickHeader}>
                    <Link to="/">
                        <h1 className="header__title">Pokémon Go</h1>
                    </Link>
                    <p className="header__slogan">圖鑑</p>
                    </div>
                    {/* <PokeBag /> */}
                </div>

                <hr className="hr-header-line" />
            </header>
        </>
    );
}