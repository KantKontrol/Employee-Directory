import React from "react";
import DataRow from "../DataRow";


function DataBody(props){
    return (
        <tbody>
            {props.eList.map(e => {
                return <DataRow 
                    key={e.name.last}
                    employeeIMG={e.picture.medium}
                    employeeName={e.name}
                    employeeNumber={e.cell}
                    employeeEmail={e.email}
                    employeeDOB={e.dob.date}
                />
            })}
        </tbody>
    );
}

export default DataBody;