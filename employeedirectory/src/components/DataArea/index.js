import React from "react";
import DataTable from "../DataTable";
import SearchBar from "../SearchBar";
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
            this.setState({ employees: res.data.results });
        });
    }

    render(){
        return (
            <div className="dataArea">
                <SearchBar />
                <DataTable
                    eList={this.state.employees}
                />
            </div>
        );
    }
}


export default DataArea;