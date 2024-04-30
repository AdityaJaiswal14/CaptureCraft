import React from 'react'
import {Navbar, Login,Header, FormInput, Abcd, MyDashboard, Explore} from './components'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


 const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} >
            
          </Route>
          <Route path='/FormInput' element={<FormInput />} >
           
          </Route>
          <Route path='/Login' element={<Login />} >
            
          </Route>
          <Route path='/Upload' element={<Abcd />} >
            
          </Route>
          <Route path='/MyDashboard' element={<MyDashboard />} >
            
          </Route>
          <Route path='/Explore' element={<Explore />} >
            
          </Route>
        </Routes> 
      </div>
    </Router>  
  )
}

export default App