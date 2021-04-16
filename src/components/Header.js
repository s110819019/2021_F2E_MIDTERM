import { useContext } from "react";
import { Link } from "react-router-dom";
// import { StoreContext } from "../store";
// import PokeBag from "./PokeBag";
// import { pageContentsSet, activeNavItemSet } from "../actions";
// import { getJSON } from "../api";

export default function Header() {
    return(
        <>
            {/* <header className="header">
                <div className="header__logo">
                    <img src={logo} />
                </div>
                <Menu className="header__menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">關都</Menu.Item>
                    <Menu.Item key="2">成都</Menu.Item>
                    <Menu.Item key="3">豐緣</Menu.Item>
                    <Menu.Item key="4">神奧</Menu.Item>
                    <Menu.Item key="5">合眾</Menu.Item>
                    <Menu.Item key="6">卡洛斯</Menu.Item>
                    <Menu.Item key="7">伽勒爾</Menu.Item>
                </Menu>
            </header> */}
            <header className="header">
                <div className="header__wrap">
                    <div className="header__text" >
                    <Link to="/">
                        <h1 className="header__title">Pokémon Go</h1>
                    </Link>
                    <p className="header-slogan">Start Trade !!</p>
                    </div>
                    {/* <PokeBag /> */}
                </div>

                <hr className="hr-header-line" />
            </header>
        </>
    );
}