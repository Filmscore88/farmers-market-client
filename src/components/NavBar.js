import React from "react"
import { NavLink } from 'react-router-dom'


 const NavBar = () => {



   return(
     <div className= "NavBar">
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/markets'>Markets</NavLink>
     </div>
   )

 }

 export default NavBar;
 
