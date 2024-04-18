import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate = useNavigate()

const handleregister=()=>{
    navigate('/register')
}

  return (
    <div style={{height:'100vh'}} className='container  w-100 p-5'>
<div className='row'>
<div className="col-lg-8 mt-5">
    <h4> Welcome   </h4>
    <h1>Back To School</h1>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos culpa fugit placeat maiores ab unde repellat saepe reiciendis, aspernatur distinctio sequi ipsa dignissimos a explicabo dolorem iusto eligendi earum.</p>
<button onClick={handleregister}  className='btn btn-primary'>Register</button>
</div>
<div className="col-lg-4">
    <img height="100%" width="100%" src="https://media.istockphoto.com/id/186655818/vector/vector-school-building.jpg?s=612x612&w=0&k=20&c=R4E6i4SFNUehDmwK1R--QddAozO4yLhAfYxMdzL1kpk=" alt="" />
</div>
</div>
    </div>
  )
}

export default Home