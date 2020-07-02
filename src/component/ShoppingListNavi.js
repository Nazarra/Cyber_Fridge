
import React, {useState} from "react";
import NavigatorButton from "./navigatorButton";



const ShoppingListNavi = (props) => {
    const [componentClassName, setComponentClassName] = useState(props.componentClassName);

    return(
        <>
            <nav className={componentClassName}>
                <NavigatorButton buttonName="Stwórz listę"/>
                <NavigatorButton buttonName="Moje listy"/>
                <NavigatorButton buttonName="Usuń listę"/>
            </nav>
        </>
    )

}

export default ShoppingListNavi;