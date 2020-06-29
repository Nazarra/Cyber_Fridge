import React, {useState} from "react";
import NavigatorButton from "./navigatorButton";


const HeaderNavigation = (props) => {
    const [userOnline,setUserOnline] = useState(props.userOnline);
    const [headerNavClassName, setHeaderNavClassName] = useState(props.headerNavClassName)
    const [buttonClassName, setButtonClassName] = useState(props.buttonClassName);


    return (
        <>
                <nav className={headerNavClassName}>
                    {userOnline ? null : <NavigatorButton buttonName="Rejestracja" buttonClasName={buttonClassName}/>}
                    {userOnline ? <NavigatorButton buttonName="Wyloguj" buttonClasName={buttonClassName}/>
                    : <NavigatorButton buttonName="Zaloguj" buttonClasName={buttonClassName}/>}
                    <NavigatorButton buttonName="O nas" buttonClasName={buttonClassName}/>
                    <NavigatorButton buttonName="Strona główna"  buttonClasName={buttonClassName}/>
                </nav>
        </>
    );
};
export default HeaderNavigation;