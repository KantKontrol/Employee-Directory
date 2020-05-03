import React from "react";
import TableHeader from "../TableHeader";
import DataBody from "../DataBody";


function DataTable(props){
    return (
        <div className="table-responsive w-auto">
            <table className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
                <TableHeader changeSortDirection={props.changeSortDirection}/>
                <DataBody eList={props.eList} sortDirection={props.sortDirection} compareStr={props.compareStr}/>
            </table>
        </div>
    );
}

export default DataTable;