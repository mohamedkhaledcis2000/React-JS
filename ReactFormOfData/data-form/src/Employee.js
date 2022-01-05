import { Component } from "react";

// class component for employee 

export default class Employee extends Component{
    // Employee State 

    state= {
    Employee:[
        {id : 1 , name : 'mohamed', salary :2000 , department: 'IS',address:'mansoura'},
        {id : 2 , name : 'Abdelaziz', salary :3000 , department: 'EDU',address:'mansoura'},
        {id : 3 , name : 'Ahmed', salary :4000 , department: 'CI',address:'mansoura'},
        {id : 4 , name : 'mostafa', salary :5000 , department: 'TR',address:'mansoura'}


    ]
}



// render(){
    // return(
    //     <>
    //         <table id="tbl">
    //     <tr>
    //       <th>Id</th>
    //       <th>Name</th>
    //       <th>Salary</th>
    //       <th>Department</th>
    //       <th>Address</th>
    //     </tr>
    //     <tr>
    //       <th>{this.state.Employee.id}</th>
    //       <th>{this.state.Employee.name}</th>
    //       <th>{this.state.Employee.salary}</th>
    //       <th>{this.state.Employee.department}</th>
    //       <th>{this.state.Employee.address}</th>
    //     </tr>
    // </table>
    //     </>
    // )
// }






}