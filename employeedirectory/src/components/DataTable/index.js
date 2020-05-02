import React from "react";
import DataBody from "../DataBody";


function DataTable(props){
    return (
        <ol>
            {props.eList.map(e => {
                return <DataBody 
                    key={e.name.last}
                    employeeIMG={e.picture.medium}
                    employeeName={e.name}
                    employeeNumber={e.cell}
                    employeeEmail={e.email}
                />
            })}
        </ol>
    );
}

export default DataTable;