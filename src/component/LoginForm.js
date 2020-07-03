import React, {Component} from "react";
import FormButtons from "./formButton";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            buttonText: this.props.buttonText,
            login: " ",
            logoBackground: 'registerImage',
            eyeDisplay: 'block',
            leftEyeBasePosition: 230,
            leftEyeMovePosition: 230,
            rightEyeBasePosition: 321,
            rightEyeMovePosition: 321,
            currentError: "",
            textLength: 0,
            dataLogin: 'login',
            dataPassword: 'Password1'
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

    handleFormVali = (event) =>{
        if(this.props.login === this.props.dataLogin || this.props.password === this.props.dataPassword){
            this.setState({currentError: ""})
            console.log("dada")
        }else {
            event.preventDefault();
            this.setState({currentError: "Login lub hasło są nieprawidłowe!"})

        }
    }





    handlePasswordChange=(event)=>{this.setState({password: event.target.value})}



    componentDidMount ()  {

        this.intervalId = setInterval(() => {
            console.log(this.state.currentError.length)
            if( this.state.currentError.length != this.state.textLength){
                this.setState({ textLength:  this.state.textLength + 1})
                console.log("jedziemy")
            }else if(this.state.textLength === this.state.currentError.length && this.state.textLength != 0){
                console.log("koniec")

                clearInterval(this.intervalId);
            }


        }, 100,);
    };


    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT");
        // this.setState({ textLength: 0})
        clearInterval(this.intervalId);
    }


    render(){


        let leftEyeStyle = {
            display: this.state.eyeDisplay,
            left: this.state.leftEyeMovePosition+"px",
        }
        let rightEyeStyle = {
            display: this.state.eyeDisplay,
            left: this.state.rightEyeMovePosition+"px",
        }

        let ErrorCount

        if (this.state.currentError === ""){
            ErrorCount = {display: 'none',}
        }else{
            ErrorCount = {display: 'block',}
        }




        return (
            <>
                <form className={'registerForm '}>

                    <div className={"formlogoImage " + this.state.logoBackground}>
                        <div style={leftEyeStyle} className={"eye left"}> </div>
                        <div style={rightEyeStyle} className={"eye right"}> </div>
                    </div>

                    <div className={"ErrorContainer"} style={ErrorCount}>
                        {this.currentError ? null : <p>{this.state.currentError.substring(0, this.state.textLength)}</p>}
                    </div>
                    <label htmlFor={"formLogin"}>Login</label>
                    <input type={'text'} id={'loginInput'}
                           value={this.state.login}
                           maxLength={7}
                           onClick={this.loginFormClick}
                           onChange={this.handleLoginChange}
                    />

                    <label htmlFor={"formPassword"}>Hasło</label>

                    <input type={'password'}
                           name={'password'}
                           value={this.state.password}
                           onFocus={this.passwordFormClick}
                           onChange={this.handlePasswordChange}
                    />


                    <FormButtons buttonText={this.props.buttonText} onClick={this.handleFormVali}></FormButtons>

                </form>
            </>
        )}
}