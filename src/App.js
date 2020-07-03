import React, {useState} from 'react';
import RegisterForm from "./component/registerForm";
import Header from "./component/Header";
import LoginNavi from "./component/LoginNavi";
import RecipeForm from "./component/RecipeForm";
import LoginForm from "./component/LoginForm";
import './scss/main.scss';
// import Burger from 'react-css-burger';
import Footer from "./component/footer";





function App() {
    const [userOnline,setUserOnline] = useState(true)

  return (
<>
    <body>
        <Header userOnline={userOnline}/>
        <section className={"contentContainer"}>
        <LoginNavi loginNaviClassName={"LoginNaviContainer"} userOnline={userOnline} />
        <LoginForm   LogoClassName={"registerImage"} buttonText={"Zaloguj"}></LoginForm>
        {/*<RegisterForm userOnline={userOnline}  buttonText={"Rejestracja"}/>*/}
            {/*<article>*/}
            {/*    <RecipeForm/>*/}
            {/*</article>*/}
            {/*<RegisterForm   LogoClassName={"registerImage"} buttonText={"Rejestracja"}></RegisterForm>*/}
            {/*<LoginForm   LogoClassName={"registerImage"} buttonText={"Zaloguj"}></LoginForm>*/}





        </section>
        {/*<RegisterForm   LogoClassName={"registerImage"} buttonText={"Rejestracja"}></RegisterForm>*/}
        </body>
    <Footer />
    </>


  );
}

export default App;
