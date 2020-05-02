import React from "react";


function DataBody(props){
    return (
        <li className="dataBody">
            <img className="" src={props.employeeImage} alt="..." />
        </li>
    );
}

export default DataBody;