import { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from '../Navbar/spaceX logo.png'

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        conPass: ""
    })

    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let url = 'http://localhost:5000/user/login';
        try {
            console.log(data.email)
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                })
            })
            const result = await res.json()
            if(result.status === 'success'){
                localStorage.setItem('auth-token', result.token)
                setAuth({...auth, token: result.token});
                navigate('/');
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="login-container">
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <h1>Login Form</h1>
            <form className="login form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    onChange={(e)=> setData({...data, email: e.target.value})}
                    value={data.email}
                    placeholder="Email"
                    autoComplete="off"
                    required
                />
                <input
                    className="input"
                    type="password"
                    onChange={(e)=> setData({...data, password: e.target.value})}
                    value={data.password}
                    placeholder="Password"
                    autoComplete="off"
                    required
                />
                <input
                    className={`input ${data.password !== data.conPass ? 'red-border' : 'green-border'}`}
                    type="password"
                    onChange={(e)=> setData({...data, conPass: e.target.value})}
                    value={data.conPass}
                    placeholder="Confirm password"
                    autoComplete="off"
                    required
                />
                <button className="btn" disabled={data.password !== data.conPass? true : false}
                > Login</button>
            </form>
            <p>Don't have an account <Link to={'/register'}>Register</Link></p>
        </main>
    )
}
export default Login;