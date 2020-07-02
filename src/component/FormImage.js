import React, {Component} from "react";

export default class FormImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoBackground: 'registerImage',
            eyeDisplay: 'block',
            leftEyeBasePosition: 230,
            leftEyeMovePosition: 230,
            rightEyeBasePosition: 321,
            rightEyeMovePosition: 321,
        }

    }


    loginFormClick=()=>{this.setState({logoBackground:'registerImage', eyeDisplay: 'block',})};

    passwordFormClick=()=>{this.setState({logoBackground: 'passwordImage', eyeDisplay: 'none',})};

    handleLoginChange=(event)=>{
        this.setState({login: event.target.value})
        this.setState({
            leftEyeMovePosition: this.state.leftEyeBasePosition + event.target.value.length,
            rightEyeMovePosition: this.state.rightEyeBasePosition + event.target.value.length,
        })};


    render() {

        let leftEyeStyle = {
            display: this.state.eyeDisplay,
            left: this.state.leftEyeMovePosition + "px",
        }
        let rightEyeStyle = {
            display: this.state.eyeDisplay,
            left: this.state.rightEyeMovePosition + "px",
        }


        return (
            <>
                <div className={"formlogoImage " + this.state.logoBackground}>
                    <div style={leftEyeStyle} className={"eye left"}> </div>
                    <div style={rightEyeStyle} className={"eye right"}> </div>
                </div>
            </>

        )
    }



}