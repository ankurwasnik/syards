import React from "react";
import { Container, Navbar } from "react-bootstrap";
const NavigationBar = ()=>{
    return (
            <Navbar  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <p>Square Yards Task Project</p>
                    </Navbar.Brand>

                </Container>
            </Navbar>        
    )
}

export default NavigationBar;