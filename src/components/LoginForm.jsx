import {React, useState, useContext}from "react";
const LoginForm = (props)=>{
    const [userDetails, setUserDetials] = useState({username:"", password:"" , loggedIn:false});
    const handleUserLogInRequest = (event)=>{
        console.log('handling user login request')
        props.handleLoginRequest(userDetails);
        event.preventDefault();
        
    }
    return (
        <form onSubmit={handleUserLogInRequest}>
                <label htmlFor="username"> Username</label>
                <input type="text" name="username" id="username" placeholder="Enter Username"
                value={userDetails.username}
                onChange={e=>setUserDetials({...userDetails, username:e.target.value})}
                />
                <label htmlFor="password"> passsword</label>
                <input type="password" name="password" id="password" placeholder="Enter password" 
                value={userDetails.password}
                onChange={e=>setUserDetials({...userDetails, password:e.target.value})}
                />
                <input type="submit" value="Login"/>
        </form>
    )
}
export default LoginForm;