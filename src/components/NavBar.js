import React from "react"
import { NavLink } from 'react-router-dom'


 const NavBar = () => {



   return(
     <div style={{background: '#e9e3d4', borderBottom: '2px solid black', paddingTop: '10px', paddingBottom: '10px', marginBottom: '12px', textAlign: 'center'}}>
     <NavLink style={{marginRight : '40px'}} to='/'>
       Home
       <span className="glyphicon glyphicon-home"></span>
     </NavLink>
     <NavLink style={{marginRight : '40px'}} to='/markets'>
        Markets
        <span className="glyphicon glyphicon glyphicon-sunglasses"></span>
     </NavLink>
     </div>
   )

 }

 export default NavBar;
