import React, {useState} from "react";


export default function NavigatorButton(props) {

    const [buttonClassName, setButtonClassName] = useState(props.buttonClasName);

    return(
        <>
            <button className={buttonClassName} onClick={props.onClick}>{props.buttonName}</button>
        </>
    )};