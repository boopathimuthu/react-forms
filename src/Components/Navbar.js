import './Navbar.css'
import React , {useState}from 'react'
import {Link} from 'react-router-dom'
import {FaBars , FaTimes}from 'react-icons/fa'
function Navbar() {
    const [icon , seticon]=useState(false)
    const handleClick = ()=>{
        seticon(!icon)
    }
    const closeSideDrawer = ()=>{
        seticon(false)
    }
    
    return (
        <>
         <nav className='navbar'>
           
            <Link to='/' className='nav-logo' onClick={closeSideDrawer}>LOGO</Link>
            <div className='menu-icon' onClick={handleClick}>
                {
                 icon ? <FaTimes
                 className='fa-times'></FaTimes>:<FaBars className='fa-bars'></FaBars>
                }
            </div>
            
            
            <ul className={
                 icon ? 'nav-menu active':'nav-menu'}>
                <Link to='/' className='nav-links' onClick={closeSideDrawer}>Home</Link>
                <li><Link to='/about' className='nav-links' onClick={closeSideDrawer}>About</Link></li>
                <li><Link to='/services' className='nav-links' onClick={closeSideDrawer}>Services</Link></li>
                <li><Link to='/products' className='nav-links' onClick={closeSideDrawer}>Products</Link></li>
                <li><Link to='/contactus' className='nav-links' onClick={closeSideDrawer}>Contactus</Link></li>
                <li><Link to='/signup' className='nav-links' onClick={closeSideDrawer}>Signup</Link></li>
            </ul>
            
                
              
                
            
         </nav>
        </>
    )
}

export default Navbar;