import React from "react";
import DataTable from "../DataTable";
import API from "../../utils/API";



class DataArea extends React.Component {

    state = {
        employees: []
    };


    componentDidMount = () => {
        this.getEmployeeList();
    }

    getEmployeeList = () => {
        API.getEmployees(10).then(res => {
            console.log(res.data.results);
            this.setState({ employees: res.data.results });
        });
    }

    render(){
        return (
            <div className="dataArea">
                <DataTable
                    eList={this.state.employees}
                />
            </div>
        );
    }
}


export default DataArea;