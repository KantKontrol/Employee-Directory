import React from "react";
import DataRow from "../DataRow";


function DataBody(props){


    let friends = props.eList.sort(props.compareStr);


    return (
        <tbody>
            {friends.map(e => {
                return <DataRow 
                    key={e.name.last}
                    employeeIMG={e.picture.thumbnail}
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