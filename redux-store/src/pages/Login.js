import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";

const Login = ()=>{
    const [user,setUser] = React.useState()
    const [pass,setPass] = React.useState()

    const account = useSelector((state)=>state.login)
    const logged = useSelector((state)=>state.logged)

    const dispatch = useDispatch()

    const validate = ()=>{
        if(user===account.log && pass===account.pass){
            dispatch({type:'SIGN_UP', payload: true})
        }
        else alert("Login or password incorrect")
    }
    return(
        <div>
            {!logged && <div className="login-panel">
            <p>Log in to your account</p>
                <input type="text" placeholder="Login" onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
                <button type="submit" onClick={validate}>Login</button>
                <p>You do not have account?</p>
                <Link to="/register">Create one!</Link>
            </div>}
            {logged && <h2 className="headings center space">Welcome {account.log}!</h2>}
            <Footer/>
        </div>
    )
}

export default Login
