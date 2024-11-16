import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"
import { CiMenuBurger } from "react-icons/ci";


const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className='header'>
            <h2>Employee Management System</h2>
            <div className="links">
                <Link className='link' to={"/"}>Home</Link>
                <Link className='link' to={"/create-employee"}>Create Employee</Link>
            </div>
            <div className="ham">
                <CiMenuBurger className='ico' onClick={() => setMenu(!menu)} />
            </div>
            {
                menu ? <div className="menu-items">
                    <Link className='link' to={"/"}>Home</Link>
                    <Link className='link' to={"/create-employee"}>Create Employee</Link>
                </div> : null
            }

        </div>
    )
}

export default Header
