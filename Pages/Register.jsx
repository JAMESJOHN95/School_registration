import React, { useState } from 'react'
import { registerApi } from '../Services/AllApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate()

    const [studentdetail, setstudentdetail] = useState({ name: "", address: "", mobile: "", email: "", gender: "", dateofbirth: "", course: "" })

    const handlesubmit = async () => {
        if (studentdetail.name && studentdetail.address && studentdetail.mobile && studentdetail.email && studentdetail.gender && studentdetail.dateofbirth && studentdetail.course)
            try {
                const result = await registerApi(studentdetail)
                console.log(result);
                if (result.status == 200) {
                    toast.success("Succesfully Registered")
                    setstudentdetail({ name: "", address: "", mobile: "", email: "", gender: "", dateofbirth: "", course: "" })
                    setTimeout(() => {
                        navigate('/details')
                    }, 2000);
                }

            } catch (err) {
                console.log(err);
            }
        else {
            toast.warning("Please Fill The Form Completely")
        }
        console.log(studentdetail);
    }
    const handleclose=()=>{
        setstudentdetail({ name: "", address: "", mobile: "", email: "", gender: "", dateofbirth: "", course: "" })
    }


    return (
        <div  className=' formbg   w-100 p-5'>

            <div className='row'>
                <div className='col-lg-6'>
                    <form action="">
                        <label className='ms-1' >Name</label><br />
                        <input value={studentdetail.name} onChange={(e) => setstudentdetail({ ...studentdetail, name: e.target.value })} className='mb-2 form-control' type="text" placeholder='Enter Your Name' /><br />
                        <label className='ms-1' >Address</label><br />
                        <textarea value={studentdetail.address} onChange={(e) => setstudentdetail({ ...studentdetail, address: e.target.value })} className='mb-2 form-control' type="text" placeholder='Enter Your Address' /><br />
                        <label value={studentdetail.mobile} onChange={(e) => setstudentdetail({ ...studentdetail, mobile: e.target.value })} className='ms-1' >Mobile No</label><br />
                        <input  value={studentdetail.mobile} onChange={(e) => setstudentdetail({ ...studentdetail, mobile: e.target.value })} className='mb-2 form-control' type="tel" placeholder='Enter Your Mobile Number' /><br />
                        <label  className='ms-1' >E-mail</label><br />
                        <input value={studentdetail.email} onChange={(e) => setstudentdetail({ ...studentdetail, email: e.target.value })} className='mb-2 form-control' type="email" placeholder='Enter Your Email' /><br />

                    </form>
                </div>
                <div className='col-lg-6'>
                    <label className='mt-1 ms-1' for="">Gender</label> <br />
                    <label className='me-2' for="m1">Male</label> <input  value="Male" onChange={(e) => setstudentdetail({ ...studentdetail, gender: e.target.value })} type="radio" id="m1" name="g1" />
                    <label className='ms-4 me-2 mb-5' for="f1">Female</label> <input value="Female" onChange={(e) => setstudentdetail({ ...studentdetail, gender: e.target.value })} type="radio" id="f1" name="g1" /> <br />

                    <label className='mt-3 ms-1' for="da1">Date Of Birth</label><br />
                    <input value={studentdetail.dateofbirth} onChange={(e) => setstudentdetail({ ...studentdetail, dateofbirth: e.target.value })} className='form-control' type="date" id="da1" /> <br></br>

                    <label className='ms-1' >Select A Course</label><br />
                    <select value={studentdetail.course} onChange={(e) => setstudentdetail({ ...studentdetail, course: e.target.value })} className='form-control' name="course" id="">
                        <option value="Biology">Biology</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Copmmerce">Copmmerce</option>
                        <option value="Humanities">Humanities</option>

                    </select>
                    <div className='mt-5 d-flex justify-content-around'>
                        <button onClick={handleclose} className=' btn btn-secondary'>Close</button>
                        <button onClick={handlesubmit} className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
            < ToastContainer position='top-center' theme='colored' autoClose={'1500'} />
        </div>
    )
}

export default Register