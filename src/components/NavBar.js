import { useState } from "react";
import { Drawer } from "antd";
import NavItem from "./NavItem";
import HamMenu from "./HamMenu";

export default function NavBar() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <div className="navBar navBar__collapse--mobile">
                <NavItem to="/Kanto" className="nav__item" activeClassName="nav__item--active">
                    關都
                </NavItem>
                <NavItem to="/johto" className="nav__item" activeClassName="nav__item--active">
                    成都
                </NavItem>
                <NavItem to="/hoenn" className="nav__tem" activeClassName="nav__item--active">
                    豐原
                </NavItem>
                <NavItem to="/sinnoh" className="nav__item" activeClassName="nav__item--active">
                    神奧
                </NavItem>
                <NavItem to="/unova" className="nav__item" activeClassName="nav__item--active">
                    合眾
                </NavItem>
                <NavItem to="/kalos" className="nav__item" activeClassName="nav__item--active">
                    卡洛斯
                </NavItem>
                <NavItem to="/galar" className="nav__item" activeClassName="nav__item--active">
                    伽勒爾
                </NavItem>
            </div>
            <Drawer
                title=" "
                placement={"left"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"left"}
                width={400}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#111828" }}
                headerStyle={{ backgroundColor: "#111828", color: "#fff" }}
            >
                <NavItem onClose={handleCloseDrawer} to="/Kanto" className="nav__item" activeClassName="nav__item--active">
                    關都
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/johto" className="nav__item" activeClassName="nav__item--active">
                    成都
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/hoenn" className="nav__tem" activeClassName="nav__item--active">
                    豐原
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/sinnoh" className="nav__item" activeClassName="nav__item--active">
                    神奧
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/unova" className="nav__item" activeClassName="nav__item--active">
                    合眾
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/kalos" className="nav__item" activeClassName="nav__item--active">
                    卡洛斯
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/galar" className="nav__item" activeClassName="nav__item--active">
                    伽勒爾
                </NavItem>
            </Drawer>
        </div>
    );
}