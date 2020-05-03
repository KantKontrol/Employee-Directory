import React from "react";



function TableHeader(){
    return (
        <thead>
            <tr>
                <th className="th-sm" scope="col">{/* profile pic */}</th>
                <th className="th-sm" scope="col">Name</th>
                <th className="th-sm" scope="col">Number</th>
                <th className="th-sm" scope="col">Email</th>
                <th className="th-sm" scope="col">DOB</th>
            </tr>
        </thead>
    );
}

export default TableHeader;