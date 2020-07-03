import React  from "react";


const Footer = () => {
    return(
        <>
            <footer>
                <div className={"footerImage"}> </div>
                <div className={'footerContent'}>
                    <ul>
                        <li className={"footerContactHeader"}>KONTAKT</li>
                        <ol>
                            <li>loremIpsum@gmail.com</li>
                            <li>885487784</li>
                        </ol>
                    </ul>
                    <p>&copy; Copyright 2020</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;