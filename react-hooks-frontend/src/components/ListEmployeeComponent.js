//import { Button } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
     
    const navigate=useNavigate()
    useEffect(() => {

        getAllEmployees();
    },[])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <body>

            <br/>
            <br/>
            <div class="container gym-class mb-5">
        <div class="row px-3">
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i class="flaticon-six-pack"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                    <p>
                        bodybuilding, a regimen of exercises designed to enhance the human body's muscular development and promote general health and fitness.
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i class="flaticon-bodybuilding"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                        The muscle building process is driven by several factors, including hormones like testosterone and growth hormone, as well as the availability of amino acids and other nutrients.
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
        </div>
    </div>





            <h2 className = "text-center text-white"> List Employees </h2>
            <button onClick={()=>navigate("/add-employee/")} className = "btn btn-primary mb-2" > Add Employee </button>
            <table className="table table-bordered table-striped">
                <thead className='text'>
                    <th class="bg-secondary"> Employee Id </th>
                    <th class="bg-secondary"> Employee First Name </th>
                    <th class="bg-secondary"> Employee Last Name </th>
                    <th class="bg-secondary"> Employee Email Id </th>
                    <th class="bg-secondary"> Actions </th>
                </thead>
                <tbody className='text1'>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td class="text-light bg-secondary"> {employee.id} </td>
                                <td class="text-light bg-secondary"> {employee.firstName} </td>
                                <td class="text-light bg-secondary">{employee.lastName}</td>
                                <td class="text-light bg-secondary">{employee.emailId}</td>
                                <td>
                                    <Link className="btn btn-info bg-secondary" to={`/add-employee/${employee.id}`} >Update</Link>
                                    <Link className = "btn btn-danger bg-secondary" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </body>
        </div>
    );
}

export default ListEmployeeComponent