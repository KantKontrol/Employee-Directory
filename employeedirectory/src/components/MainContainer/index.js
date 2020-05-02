import React from "react";
import Header from "../Header";
import DataArea from "../DataArea";


function MainContainer(props){
    return (
        <div class="container">
            <Header />
            <DataArea />
        </div>
    );
}

export default MainContainer;