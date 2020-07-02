
import React, {useState} from "react";
import NavigatorButton from "./navigatorButton";



const MyFridgeNavi = (props) => {
    const [componentClassName, setComponentClassName] = useState(props.componentClassName);

    return(
        <>
            <nav className={componentClassName}>
                <NavigatorButton buttonName="Produkty w lodówce"/>
                <NavigatorButton buttonName="Dodaj produkt"/>
                <NavigatorButton buttonName="Usuń produkt"/>
            </nav>
        </>
    )

}

export default MyFridgeNavi;