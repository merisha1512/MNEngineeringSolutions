import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.length);
        if(name.length === 0 || email.length === 0 || password.length === 0){
            setError(true);
        }else{

        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }));
    }
    }


    return (
        <div className="login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input 
                    type="namr" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                {error && name.length <= 0 ? <p className="text-danger">Name is Required</p>: ""}
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                /> 
                {error && email.length <= 0 ? <p className="text-danger">Email is Required</p>: ""}
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                />
                {error && password.length <=0 ? <p className="text-danger">Password is Required</p>: ""}
                <button type="submit" className="submit__btn">Login</button>
            </form>
        </div>
    )
}

export default Login;