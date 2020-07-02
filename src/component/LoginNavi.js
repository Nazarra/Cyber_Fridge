import React, {useState} from "react";
import NavigatorButton from "./navigatorButton";
import MyAccountNavi from "./MyAccountNavi";
import MyFridgeNavi from "./MyFridgeNavi";
import RecipesNavi from "./RecipesNavi";
import ShoppingListNavi from "./ShoppingListNavi"
import HeaderNavigation from "./headerNavigation";


const LoginNavi = (props) => {
    const [userOnline, setUserOnline] = useState(props.userOnline);
    const [expandMyAccount, setExpandMyAccount] = useState(false)
    const [expandMyFridge, setExpandMyFridge] = useState(false)
    const [expandShoppingList, setExpandShoppingList] = useState(false)
    const [expandRecipes, setExpandRecipes] = useState(false)
    const [loginNaviClassName, setLoginNaviClassName] = useState(props.loginNaviClassName)
    const [active, setActive] = useState(false)
    const [mobileNaviActive, setMobileNaviActive] = useState(0)

    const handleAccountClick = () => {
        setExpandMyAccount(!expandMyAccount);
        setExpandMyFridge(false);
        setExpandShoppingList(false);
        setExpandRecipes(false);
        setMobileNaviActive(1)
        setActive(!active)
    }
    const handleFridgeClick = () => {
        setExpandMyAccount(false)
        setExpandMyFridge(!expandMyFridge)
        setExpandShoppingList(false)
        setExpandRecipes(false)
        setMobileNaviActive(2)
        setActive(!active)

    }
    const handleShoppingListClick = () => {
        setExpandMyAccount(false)
        setExpandMyFridge(false)
        setExpandShoppingList(!expandShoppingList)
        setExpandRecipes(false)
        setMobileNaviActive(3)
        setActive(!active)
    }
    const handleRecipesClick = () => {
        setExpandMyAccount(false);
        setExpandMyFridge(false);
        setExpandShoppingList(false);
        setExpandRecipes(!expandRecipes);
        setMobileNaviActive(4)
        setActive(!active)
    }

    const handleBackClick = () => {
        setActive(!active)
        setMobileNaviActive(0)
    }





    let mobileNaviElement = null;

    if (mobileNaviActive === 1) {
        mobileNaviElement = <MyAccountNavi componentClassName={"MyAccountNaviPhone"}/>
    } else if (mobileNaviActive === 2) {
        mobileNaviElement = <MyFridgeNavi componentClassName={"MyFridgeNaviPhone"}/>;
    } else if (mobileNaviActive === 3) {
        mobileNaviElement = <ShoppingListNavi componentClassName={"ShoppingListPhone"}/>;
    } else if (mobileNaviActive === 4) {
        mobileNaviElement = <RecipesNavi componentClassName={"RecipesPhone"}/>
    } else {
        mobileNaviElement =  null
    }




    return (
        <>
            <section className={loginNaviClassName}>
                {!userOnline ? null : <nav className={"LoginNavi"}>


                    {!active ? null : <div className={'menu-warp'}>
                        <button className={"backButton"} onClick={() => setActive(!active)}>
                            Powrót
                        </button>
                        {mobileNaviElement}
                    </div>
                    }

                    <NavigatorButton buttonName="Moje konto" onClick={handleAccountClick}/>

                    <NavigatorButton buttonName="Moja lodówka" onClick={handleFridgeClick}/>

                    <NavigatorButton buttonName="Lista zakupów" onClick={handleShoppingListClick}/>

                    <NavigatorButton buttonName="Przepisy" onClick={handleRecipesClick}/>


                </nav>
                }
                {!expandMyAccount ? null : <MyAccountNavi componentClassName={"MyAccountNavi extend"}/>}

                {!expandMyFridge ? null : <MyFridgeNavi componentClassName={"MyFridgeNavi extend"}/>}

                {!expandShoppingList ? null : <ShoppingListNavi componentClassName={"ShoppingList extend"}/>}

                {!expandRecipes ? null : <RecipesNavi componentClassName={"Recipes extend"}/>}


            </section>
        </>
    )

}

export default LoginNavi;

