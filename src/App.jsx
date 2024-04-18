import Details from '../Pages/Details'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/register' element = {<Register/>}/>
    <Route path='/details' element = {<Details/>}/>
    </Routes>
    </>
  )
}

export default App
