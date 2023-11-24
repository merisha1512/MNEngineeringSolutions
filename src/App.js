import React from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const App = () => {
    const user = useSelector(selectUser);
    console.log(user);
    
    return (
        <div>
           {(user) ? <Logout /> : <Login />}
        </div>
    )
}

export default App;