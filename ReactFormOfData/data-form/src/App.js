import './App.css';
// import './Employee.js';

function App() {
        let employee = [{id:1,name:'mohamed',salary:1000,department:'Is',address:'mansoura'},
                        {id:2,name:'Abdelaziz',salary:2000,department:'EDU',address:'mansoura'},
                        {id:3,name:'Ahmed',salary:3000,department:'CI',address:'mansoura'}
                      ];
  
  return (
    <div className="App">
      <table id="tbl">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
      </table>
    
    </div>
  );
  {
    employee.map((emp,index)=>{
      return(
        <tr>
          <td>{index+1}</td>
          <td>{emp.name}</td>
          <td>{emp.salary}</td>
          <td>{emp.department}</td>
          <td>{emp.address}</td>
          <td><input type="button" value='Edit'/></td>
          <td><input type="button" value='Delete'/></td>


        </tr>
      )

    })
  }
  
}

export default App;
