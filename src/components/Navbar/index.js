import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/02/mortal-kombat-logo.jpg?fit=1936%2C1254&ssl=1" alt="" width="120px" height="80px"/>
                </NavLink>
                < Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                    About
                    </NavLink>

                    <NavLink to="/services" activeStyle>
                    Services
                    </NavLink>

                    <NavLink to="/contact-us" activeStyle>
                    Contact Us
                    </NavLink>

                    <NavLink to="/sign-up" activeStyle>
                    SIgn Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar