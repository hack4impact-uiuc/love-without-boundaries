import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
type Props = {
    /**/ 
}
class NavBarComponent extends React.Component<Props> {
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <a href="/"> <img src="./assets/lovewithout_logo.png" alt="Love Without Boundaries" ></img></a>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/student">
                    Students
                    </NavItem>

                    <NavItem eventKey={2} href="/teacher">
                    Teacher
                    </NavItem>

                    <NavItem eventKey={3} href="/admin">
                    Admin
                    </NavItem>
                </Nav>                                
            </Navbar>
        );
    }
}
export default NavBarComponent;