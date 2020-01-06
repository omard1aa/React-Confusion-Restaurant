import React, {Component} from "react";
import {Navbar, NavbarBrand} from 'reactstrap';

class NavbarComponent extends Component{
    render(){
        return(
            <Navbar dark color={"primary"}>
                <NavbarBrand href={"/"}>Confusion Restaurant</NavbarBrand>
            </Navbar>
        );
    }
}

export default NavbarComponent;
