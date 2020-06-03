import React from 'react';
import RegisterForm from "./registerForm";
import Header from "./Header";
import './scss/main.scss';


function App() {

  return (

      <div className={"grid-container"}>
        <Header/>
        {/*<RegisterForm className={ 'col-'} LogoClassName={"registerImage"} buttonText={"Rejestracja"}></RegisterForm>*/}
      </div>


  );
}

export default App;
