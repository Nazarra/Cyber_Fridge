import React, {useState} from "react";
import NavigatorButton from "./navigatorButton";



const RecipesNavi = (props) => {
    const [componentClassName, setComponentClassName] = useState(props.componentClassName);

    return(
        <>
            <nav className={componentClassName}>
                    <NavigatorButton buttonName="Dodaj przepis"/>
                    <NavigatorButton buttonName="Moje przepisy"/>
                    <NavigatorButton buttonName="Wyszukaj"/>
                    <NavigatorButton buttonName="Co mogę ugotować ?"/>
            </nav>
        </>
    )

}

export default RecipesNavi;