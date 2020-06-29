import React, {useState} from 'react';
import RegisterForm from "./component/registerForm";
import Header from "./component/Header";
import LoginNavi from "./component/LoginNavi";
import RecipeForm from "./component/RecipeForm";
import './scss/main.scss';
import Burger from 'react-css-burger';






function App() {
    const [userOnline,setUserOnline] = useState(true)

  return (
<>
    <body>
        <Header userOnline={userOnline}/>
        <section className={"contentContainer"}>

            {/*/>*/}


        {/*<LoginNavi userOnline={userOnline} loginNaviClassName={"LoginNaviContainer"}/>*/}
        {/*    <article>*/}
        {/*        <RecipeForm/>*/}
        {/*    </article>*/}



        </section>
        {/*<RegisterForm   LogoClassName={"registerImage"} buttonText={"Rejestracja"}></RegisterForm>*/}
        </body>
    <footer></footer>
    </>


  );
}

export default App;
