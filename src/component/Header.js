import React, {useState} from "react";
import Burger from 'react-css-burger';
import HeaderNavigation from './headerNavigation'



const Header = (props) => {
    const [userOnline,setUserOnline] = useState(props.userOnline);
    const [active,setActive] = useState(false)
    // const [burgerColor , setBurgerColor] = useState(!active ? "rgb(0, 51, 204)" : 'white')


    return (
        <>
            <header className={"header col-12"}>


                <Burger active={active}
                        color={!active ? "rgb(0, 51, 204)" : 'white'}
                        burger="elastic"
                        onClick={() => setActive(!active) }
                        hoverOpacity={0.8}
                        scale={1}

                />
                <h1><span className={"logoDecoration"}>Cyber </span>Fridge</h1>
               <HeaderNavigation headerNavClassName={'headerNav'} buttonClassName={'navigatorButton'} />
                {!active ? null : <div className={'menu-warp'} >
                    <HeaderNavigation headerNavClassName={'mobileHeaderNav'} buttonClassName={'mobileNavigatorButton'}/>

                </div>}
            </header>
        </>
    );
};
export default Header;