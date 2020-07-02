import React, {Component} from "react";
import FormButtons from "./formButton";



export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            repeatPassword: '',
            buttonText: this.props.buttonText,
            login: " ",
            logoBackground: 'registerImage',
            eyeDisplay: 'block',
            leftEyeBasePosition: 230,
            leftEyeMovePosition: 230,
            rightEyeBasePosition: 321,
            rightEyeMovePosition: 321,
            currentError: null,
        };
    }



    loginFormClick=()=>{this.setState({logoBackground:'registerImage', eyeDisplay: 'block',})};
    passwordFormClick=()=>{this.setState({logoBackground: 'passwordImage', eyeDisplay: 'none',})};



    handleLoginChange=(event)=>{
        this.setState({login: event.target.value})
        this.setState({
            leftEyeMovePosition: this.state.leftEyeBasePosition + event.target.value.length,
            rightEyeMovePosition: this.state.rightEyeBasePosition + event.target.value.length,
        })};


    handleLoginValidation = (event) =>{
        const reg = "/^[A-Z][a-z0-9_-]{4,7}/"
        if(reg.test(event.target.value)){
            this.setState({
                currentError:null
            });
        }else{
            this.setState({
                currentError: "Login musi zaczynać się z dużej litery i mieć co najmniej 4 znaki"
            });
        }
    }

    handlePasswordChange=(event)=>{this.setState({password: event.target.value})}

    handleRepeatPasswordChange=(event)=>{this.setState({repeatPassword: event.target.value})}

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
            <form className={'registerForm '}>

                <div className={"formlogoImage " + this.state.logoBackground}>
                    <div style={leftEyeStyle} className={"eye left"}> </div>
                    <div style={rightEyeStyle} className={"eye right"}> </div>
                </div>

                <p>{this.state.currentError}</p>
                <label htmlFor={"formLogin"}>Login</label>
                <input type={'text'} id={'loginInput'}
                       value={this.state.login}
                       maxLength={7}
                       onClick={this.loginFormClick}
                       onChange={this.handleLoginChange}
                       onBlur={this.handleLoginValidation}
                />

                <label htmlFor={"formPassword"}>Hasło</label>

                <input type={'password'}
                       name={'password'}
                       value={this.state.password}
                       onFocus={this.passwordFormClick}
                       onChange={this.handlePasswordChange}
                />


                <label htmlFor={"formPassword"}>Powtórz hasło</label>

                <input type={'password'}
                       name={'repeatPassword'}
                       value={this.state.repeatPassword}
                       onFocus={this.passwordFormClick}
                       onChange={this.handleRepeatPasswordChange}

                />

                <FormButtons buttonText={this.props.buttonText}></FormButtons>

            </form>
        </>
    )}
}