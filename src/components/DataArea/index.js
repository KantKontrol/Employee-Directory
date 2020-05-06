import React from "react";
import DataTable from "../DataTable";
import SearchBar from "../SearchBar";
import API from "../../utils/API";


const EMPLOYEE_AMOUNT = 20; //Determines amount of employees to get from API

class DataArea extends React.Component {

    state = {
        employees: [],
        searchState: "",
        order: "ascend"
    };

    


    componentDidMount = () => {
        this.getEmployeeList();
    }

    getEmployeeList = () => {
        API.getEmployees(EMPLOYEE_AMOUNT).then(res => {
            this.setState({ employees: res.data.results });
            this.modifyEmployeeBySearch(""); //calls employee setup with no value so we can draw all employees on startup
        });
    }

    handleSearchInput = event => {
        let { value } = event.target;

        this.setState({ searchState: value });
        this.modifyEmployeeBySearch(value);
    }

    modifyEmployeeBySearch = (value) => {
        let eList = this.state.employees;

        if(/\S/.test(value)){ //if string is not empty
            eList.forEach(e => {
                if(e.name.last.includes(value)){
                    e.render = true;
                }
                else {
                    e.render = false;
                }
            });
        }
        else{ //If search is empty draw all
            eList.forEach(e => {
                e.render = true
            });
            
            this.setState({ employees: eList });
        }
    }

    changeSortDirection = () => {
        console.log("Sort!");
        this.state.order === "descend" ? this.setState({ order: "ascend" }) : this.setState({ order: "descend" });
    }   

    compareStr = (a, b) => {
        let heading = "name";
        if (this.state.order === "ascend") {
          // account for missing values
          if (a[heading] === undefined) {
            return 1;
          } else if (b[heading] === undefined) {
            return -1;
          }
          // numerically
          else if (heading === "name") {
            return a[heading].last.localeCompare(b[heading].last);
          } else {
            return a[heading] - b[heading];
          }
        } else {
          // account for missing values
          if (a[heading] === undefined) {
            return 1;
          } else if (b[heading] === undefined) {
            return -1;
          }
          // numerically
          else if (heading === "name") {
            return b[heading].last.localeCompare(a[heading].last);
          } else {
            return b[heading] - a[heading];
          }
        }
      }

    render(){
        return (
            <div className="dataArea">
                <SearchBar handleInput={this.handleSearchInput} currentInput={this.state.searchState} />
                <DataTable
                    eList={this.state.employees}
                    compareStr={this.compareStr}
                    sortDirection={this.state.order}
                    changeSortDirection={this.changeSortDirection}
                />
            </div>
        );
    }
}


export default DataArea;