import React from "react";
import TableHeader from "../TableHeader";
import DataBody from "../DataBody";


function DataTable(props){
    return (
        <table className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
            <TableHeader />
            <DataBody eList={props.eList} />
        </table>
    );
}

export default DataTable;