import React from "react";


function DataRow(props){
    return (
        <tr className="dataRow">
            <td><img className="" src={props.employeeIMG} width="75px" height="75px" alt="..." /></td>
            <td>{props.employeeName.last}, {props.employeeName.first}</td>
            <td>{props.employeeNumber}</td>
            <td>{props.employeeEmail}</td>
            <td>{props.employeeDOB.substring(0, props.employeeDOB.length-14)}</td>
        </tr>
    );
}

export default DataRow;