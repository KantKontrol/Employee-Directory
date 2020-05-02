import React from "react";



function TableHeader(){
    return (
        <thead>
            <tr>
    <th className="th-sm">{/* profile pic */}</th>
                <th className="th-sm">First Name</th>
                <th className="th-sm">Last Name</th>
                <th className="th-sm">Number</th>
                <th className="th-sm">Email</th>
                <th className="th-sm">DOB</th>
            </tr>
        </thead>
    );
}

export default TableHeader;