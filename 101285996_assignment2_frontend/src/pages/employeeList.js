import React, { Component, useEffect, useState } from 'react'
import EmployeeService from '../employeeServices'
import { Link, useNavigate,useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaAddressBook, FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Table } from 'react-bootstrap';



const EmployeeList = () =>{

    const [data,setData]=useState([]);

    const history=useHistory();

    useEffect(()=>{
        getEmployees();
    },[])
    const getEmployees = async()=>{
        const res= await EmployeeService.getEmployees();
        if(res.status===200){
            setData(res.data);
        }
                        
            
        
    };
    const onDeleteEmployee = async(id)=>{
        if(window.confirm("Are you sure that you wanted to delete that use record?")){
            const res= await EmployeeService.deleteEmployee(id);
            if(res.status===200){
                toast.success("Record successfully Deleted");
                getEmployees();
            }
            
        }
                   
                        
            
        
    };
    const addEmployee=()=>{
        history.push("/addEmployee");
    }
    console.log(data);
    return (
        <div className="container-fluid">
             <h2 className="text-center">Employees List</h2>
             <div className = "row">
                <button style={{width:"150px"}} onClick={ () => addEmployee()} className="btn btn-primary"><FaPlus/> Add Employee</button>
             </div>
             <br></br>
             <div className = "row">
                    <Table className = "table table-bordered "size="sm">

                        <thead>
                            <tr>
                                <th> First Name</th>
                                <th>Last Name</th>
                                <th> Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data && data.map((item,index)=>{
                                return(
                                    <tr key = {index}>
                                         <td> {item.firstName} </td>   
                                         <td> {item.lastName}</td>
                                         <td> {item.emailId}</td>
                                         <td>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-12">
                                            <Link to ={`/updateEmployee/${item._id}`}>
                                            <button style={{width:"100px",margin:"5px"}} className="btn btn-info"><FaEdit/>Update </button>
                                                </Link>
                                                </div>
                                              <div className="col-md-4 col-sm-12">  
                                             <button style={{width:"100px",margin:"5px"}} onClick={ () => onDeleteEmployee(item._id)} className="btn btn-danger"><FaTrash/>Delete </button>
                                             </div>
                                             <div className="col-md-4 col-sm-12">
                                             <Link to ={`/viewEmployee/${item._id}`}>
                                             <button style={{width:"100px",margin:"5px"}} className="btn btn-info"><FaAddressBook/>View </button>
                                         </Link>
                                         </div>

                                            </div>
                                         </td>
                                    </tr>
                            )
                            })}
                            
                        </tbody>
                    </Table>

             </div>

        </div>
    );
}

export default EmployeeList;