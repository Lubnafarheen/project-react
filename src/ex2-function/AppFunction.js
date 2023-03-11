
import React from "react";

function Header(){
    return(
        <div>
            Header
        </div>
    );
}

function Content(){
    return(
        <div>
            Content: <Welcome name="Dory" message=" Welcome to my page" />
        </div>
    );
}

function Footer(){
    return(
        <div>
            Footer
        </div>
    );
}

function Welcome(props){
    return(
        <div>
            Hello {props.name},{props.message}
        </div>
    );
}

function AppFunction(){
    return(
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default AppFunction;