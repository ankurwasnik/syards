import { Container, Navbar, Modal, Button, Form } from "react-bootstrap";
import { useState, React, useDebugValue, useContext, createContext } from "react";
import LoginForm from "./LoginForm";
import {userLoggedInContext} from '../App'
const NavigationBar = (props)=>{
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(userLoggedInContext);
    const [modalShow, setModalShow] = useState(false);
    const [userName,setUserName] = useState("");
    const handleLoginRequest = (user)=>{
        const bodyData = {
            username: user.username,
            password: user.password
        }
        fetch('http://localhost:8000/users/login',{
                method:'POST',
                mode:'cors',
                    cache:'no-cache',
                    credentials : 'same-origin',
                    'headers' : {
                        'Content-Type' : 'application/json'
                    },
                    redirect : 'follow',
                    referrerPolicy : 'no-referrer',
                body : JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(data => {
            if(!data) alert('Username or password is incorrect!')
            setUserName(data.username);
            setIsUserLoggedIn(true);
            props.handleLogin();
        })
        .catch(err => console.log('Error logging user',err));
        console.log('logged in user', isUserLoggedIn);
        setModalShow(false);
    }
    const handleLogoutRequest = (user)=>{
        const bodyData = {
            username : userName
        }
        // setUserLoggedIn(false);
        fetch('http://localhost:8000/users/logout',{
            method : 'POST',
            mode:'cors',
                    cache:'no-cache',
                    credentials : 'same-origin',
                    'headers' : {
                        'Content-Type' : 'application/json'
                    },
                    redirect : 'follow',
                    referrerPolicy : 'no-referrer',
            body : JSON.stringify(bodyData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsUserLoggedIn(false);
            props.handleLogin();
        })
        .catch(err => console.log(err));
        console.log('logged out user', isUserLoggedIn);

    }
   
    function LoginModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Login User</h4>
              <LoginForm 
              handleLoginRequest  = {handleLoginRequest}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    return (
            <Navbar  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <p>Movie Review App</p>
                    </Navbar.Brand>
                    {/* <Button variant="primary" onClick={()=>{
                        setModalShow(true);
                    }}>
                        {isUserLogin?"Logout":"Login"}
                    </Button> */}
                    {
                        !isUserLoggedIn ?
                        <Button variant="primary" onClick={()=>setModalShow(true)}>
                            Login
                            </Button>
                        :<Button variant="primary" onClick={()=>handleLogoutRequest()}>
                            Logout
                        </Button>
                    }
                    <LoginModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Container>
            </Navbar>        
    )
}

export default NavigationBar;