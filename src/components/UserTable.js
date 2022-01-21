import React, { useState } from 'react'

function UserTable(props) {
   const clearLocal=()=>{
      props.setActualUserDetails([])
    localStorage.clear()
   }
    return (
        <div >
            <div className='card'>
                <div className='card-body'>
                    <table className='table table-bordered table-dark text-center ' >
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Gender</th>
                               <button className='btn btn-danger' onClick={()=>{clearLocal()}}>clear</button>
                            </tr>
                        </thead>
                        <tbody>
                            {props.actualUserDetails.map((data,index)    => {
                                return (<tr key={index}>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.age}</td>
                                    <td>{data.phoneNo}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                    <td>{data.gender}</td>
                                </tr>)
                            })}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserTable
