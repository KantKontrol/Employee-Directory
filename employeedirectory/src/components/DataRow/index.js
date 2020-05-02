import React from "react";


function DataRow(props){
    return (
        <tr className="dataRow">
            <td><img className="" src={props.employeeIMG} width="75px" height="75px" alt="..." /></td>
            <td>{props.employeeName.first}</td>
            <td>{props.employeeName.last}</td>
            <td>{props.employeeNumber}</td>
            <td>{props.employeeEmail}</td>
            <td>{props.employeeDOB}</td>
        </tr>
    );
}

export default DataRow;