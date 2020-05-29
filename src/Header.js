import React, {useState} from "react";
import NavigatorButton from "./navigatorButton";


const Header = () => {
    const [userOnline,setUserOnline] = useState(true)
    return (
        <>
            <header className={"header col-12"}>

                <h1><span className={"logoDecoration"}>Cyber </span>Fridge</h1>
                <nav className={"headerNav"}>
                    {userOnline ? <NavigatorButton buttonName="Moje Konto"/> : <NavigatorButton buttonName="Rejestracja"/>}
                        {userOnline ? <NavigatorButton buttonName="Wyloguj"/> : <NavigatorButton buttonName="Zaloguj"/>}
                        <NavigatorButton buttonName="O nas"/>
                        <NavigatorButton buttonName="Strona główna"/>

                </nav>


            </header>
        </>
    );
};
export default Header;