import React from "react";


export default function FormButton(props) {

    return(
        <>
         <button className={"formButton"}>
            <div id={"translate"}></div>
            <a href={'#'}>{props.buttonText}</a>
         </button>
            </>
    )};