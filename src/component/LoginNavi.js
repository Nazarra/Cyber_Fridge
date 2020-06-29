import React, {useState} from "react";
import NavigatorButton from "./navigatorButton";
import Header from "./Header";


const LoginNavi = (props) => {
    const [userOnline, setUserOnline] = useState(props.userOnline);
    const [expandMyAccount, setExpandMyAccount] = useState(false)
    const [expandMyFridge, setExpandMyFridge] = useState(false)
    const [expandShoppingList, setExpandShoppingList] = useState(false)
    const [expandRecipes, setExpandRecipes] = useState(false)
    const [loginNaviClassName, setLoginNaviClassName] = useState(props.loginNaviClassName)

    const handleAccountClick = ()=>{
        setExpandMyAccount(!expandMyAccount);
        setExpandMyFridge(false);
        setExpandShoppingList(false);
        setExpandRecipes(false);
    }
    const handleFridgeClick = ()=>{
        setExpandMyAccount(false)
        setExpandMyFridge(!expandMyFridge)
        setExpandShoppingList(false)
        setExpandRecipes(false)
    }
    const handleShoppingListClick = () =>{
        setExpandMyAccount(false)
        setExpandMyFridge(false)
        setExpandShoppingList(!expandShoppingList)
        setExpandRecipes(false)
    }
    const handleRecipesClick = () =>{
        setExpandMyAccount(false);
        setExpandMyFridge(false);
        setExpandShoppingList(false);
        setExpandRecipes(!expandRecipes);
    }



    return(
        <>
            <section className={loginNaviClassName}>
        {!userOnline ? null :
            <nav className={"LoginNavi"} >
                <NavigatorButton buttonName="Moje konto"
                                 onClick={handleAccountClick}
                />
                <NavigatorButton buttonName="Moja lodówka"
                                 onClick={handleFridgeClick}
                />
                <NavigatorButton buttonName="Lista zakupów"
                                 onClick={handleShoppingListClick}
                />
                <NavigatorButton buttonName="Przepisy"
                                 onClick={handleRecipesClick}
                />
            </nav>
        }
        {!expandMyAccount ? null :
                    <nav className={"MyAccount"}>
                        <NavigatorButton buttonName="Zmień login"/>
                        <NavigatorButton buttonName="Zmień hasło"/>
                        <NavigatorButton buttonName="Usuń konto"/>
                    </nav>
        }
        {!expandMyFridge ? null :
                    <nav className={"MyFridge"}>
                        <NavigatorButton buttonName="Produkty w lodówce"/>
                        <NavigatorButton buttonName="Dodaj produkt"/>
                        <NavigatorButton buttonName="Usuń produkt"/>
                    </nav>
                }
        {!expandShoppingList ? null :
                    <nav className={"ShoppingList"}>
                        <NavigatorButton buttonName="Stwórz listę"/>
                        <NavigatorButton buttonName="Moje listy"/>
                        <NavigatorButton buttonName="Usuń listę"/>
                    </nav>
                }
        {!expandRecipes ? null :
                    <nav className={"Recipes"}>
                        <NavigatorButton buttonName="Dodaj przepis"/>
                        <NavigatorButton buttonName="Moje przepisy"/>
                        <NavigatorButton buttonName="Wyszukaj"/>
                        <NavigatorButton buttonName="Co mogę ugotować ?"/>
                    </nav>
        }
            </section>
        </>
    )

}

export default LoginNavi;

