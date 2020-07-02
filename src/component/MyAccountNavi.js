
import React, {useState} from "react";
import NavigatorButton from "./navigatorButton";



const MyAccountNavi = (props) => {
    const [componentClassName, setComponentClassName] = useState(props.componentClassName);

    return(
        <>
            <nav className={componentClassName}>
                <NavigatorButton buttonName="Zmień login"/>
                <NavigatorButton buttonName="Zmień hasło"/>
                <NavigatorButton buttonName="Usuń konto"/>
            </nav>
        </>
    )

}

export default MyAccountNavi;