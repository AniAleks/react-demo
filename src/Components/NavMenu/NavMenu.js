import React from 'react';
import {
    Navbar,
    Nav,
    // Form,
    // FormControl
    // Button,
} from 'react-bootstrap';
import classes from './style.module.css';
import {NavLink,withRouter} from 'react-router-dom';


function NavMenu(props) {
  
        return (
            <>
                <Navbar bg="light" variant="light" fixed="top" className={classes.navBar}>
                    <Navbar.Brand href="/" className={classes.navBrand}>TaskBOOK</Navbar.Brand >
                    <Nav className="mr-auto">
                        <NavLink to="/"  activeClassName={classes.active} exact className={classes.navRouter}>Home</NavLink>
                        <NavLink to="/about"  activeClassName={classes.active}  isActive={()=>props.location.pathname==='/about'} className={classes.navRouter}>About</NavLink>
                        <NavLink to="/contact"   activeClassName={classes.active} className={classes.navRouter}>Contact Us</NavLink>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form> */}
                </Navbar>
            </>
        )

}


export default withRouter(NavMenu);