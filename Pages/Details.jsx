import React, { useEffect, useState } from 'react'
import { getregisterApi } from '../Services/AllApi'

function Details() {

    const [registerdetail, setregisterdetail] = useState([])
    useEffect(() => {
        getallstudentdetails()
    }, [])

    const getallstudentdetails = async () => {
        try {
            const result = await getregisterApi()
            console.log(result);
            if (result.status == 200) {
                setregisterdetail(result.data)
                console.log(registerdetail);
            }

        } catch (err) {
            console.log(err);
        }

    }
    console.log(registerdetail);



    return (
        <div className='w-100  table table-striped container p-3'>

            <h3 className='text-center text-success'>List Of Students Registered</h3>
            <table className='w-100 mt-2'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th> Address</th>
                        <th> Mobile</th>
                        <th> Email</th>
                        <th> Gender</th>
                        <th> Date Of Birth</th>
                        <th> Course</th>
                    </tr>
                </thead>
                {registerdetail?.length>0?
                registerdetail?.map(details=>(<tbody>
                    <tr>
                        <td>{details.name}</td>
                        <td>{details.address}</td>
                        <td>{details.mobile}</td>
                        <td>{details.email}</td>
                        <td>{details.gender}</td>
                        <td>{details.dateofbirth}</td>
                        <td>{details.course}</td>
                    </tr>
                </tbody>)):
                <div>Nothing to display!!!!</div>
                   }
            </table>
        </div>
    )
}

export default Details