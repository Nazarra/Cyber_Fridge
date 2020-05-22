import React, {Component} from "react";
import FormButtons from "./formButton";


export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: this.props.buttonText,
            logoBackground: 'registerImage',
            eyeDisplay: 'block',
            leftEyeBasePosition: 230,
            leftEyeMovePosition: 230,
            rightEyeBasePosition: 321,
            rightEyeMovePosition: 321,
            registerInputValue: '',
        };
    }

    handleChange=(event)=>{
        console.log(this.state.registerInputValue)
        this.setState({registerInputValue: event.target.value ,
            leftEyeMovePosition: this.state.leftEyeBasePosition + this.state.registerInputValue.length,
            rightEyeMovePosition: this.state.rightEyeBasePosition + this.state.registerInputValue.length,
        })
    }

    loginFormClick=()=>{
        this.setState({
            logoBackground:'registerImage',
            eyeDisplay: 'block',
        })};

    passwordFormClick=()=>{
        this.setState({
            logoBackground: 'passwordImage',
            eyeDisplay: 'none',
        })};


        render(){

            let leftEyeStyle = {
                display: this.state.eyeDisplay,
                left: this.state.leftEyeMovePosition+"px",
            }
            let rightEyeStyle = {
                display: this.state.eyeDisplay,
                left: this.state.rightEyeMovePosition+"px",
            }


    return (
        <>
            <form className={'registerForm'}>
                <div className={"formlogoImage " + this.state.logoBackground} >
                    <div style={leftEyeStyle} className={"eye left"}></div>
                    <div style={rightEyeStyle} className={"eye right"}></div>
                </div>
                <label for={"formLogin"}>Login</label>
                <input type={'text'} id={'loginInput'} value={this.state.registerInputValue} onClick={this.loginFormClick} onChange={this.handleChange} />
                <label htmlFor={"formPassword"}>Hasło</label>
                <input type={'password'} id={'formPassword'}  onFocus={this.passwordFormClick}/>
                <FormButtons buttonText={this.props.buttonText}></FormButtons>
            </form>
        </>
    )}
}