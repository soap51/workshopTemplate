import React from 'react';
import {Navbar , NavItem ,  Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
const Header = (props) => (
    <div>
        <Navbar> 
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/">Home</NavLink>                    
                </Navbar.Brand>               
            </Navbar.Header>
        </Navbar>;
    </div>
)

export default Header;