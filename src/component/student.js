import React from "react";
import BasicTable from "./table";
import './style.css'



const StudentData=()=>{
    return(
        <div className="App">
                <div>
                    <div className="flexData">
                        <h1>Student details</h1>
                        <button >Add New Student</button>
                    </div>

                    <div className="tableData">
                        <BasicTable/>
                    </div>
                </div>
        </div>
    )
}
export default StudentData;