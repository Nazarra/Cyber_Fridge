import React, {Component} from "react";


const PasswordImput = (props) => {

    return (
        <>
            <input type={'password'}
                   name={props.name}
                   value={props.value}
                   onFocus={props.handlePasswordFocus}
                   onChange={props.handleRepeatChange}
            />
        </>
    )

}

export default PasswordImput;