import React from "react";


function DataBody(props){
    return (
        <li className="dataBody">
            <img className="" src={props.employeeIMG} alt="..." />
        </li>
    );
}

export default DataBody;