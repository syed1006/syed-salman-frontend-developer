import { useState } from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import logo from '../Navbar/spaceX logo.png';

const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        conPass: ""
    })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = 'http://localhost:5000/user/register';
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    name:data.name,
                    email: data.email,
                    password: data.password
                })
            })
            const result = await res.json()
            console.log(result);
            if (result.status === 'success') {
                navigate('/login');
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="register-container">
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <h1>Registration Form</h1>
            <form className="login form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                    placeholder="Name"
                    autoComplete="off"
                    required
                />
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    value={data.email}
                    placeholder="Email"
                    autoComplete="off"
                    required
                />
                <input
                    className="input"
                    type="password"
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    value={data.password}
                    placeholder="Password"
                    autoComplete="off"
                    required
                />
                <input
                    className={`input ${data.password !== data.conPass ? 'red-border' : 'green-border'}`}
                    type="password"
                    onChange={(e) => setData({ ...data, conPass: e.target.value })}
                    value={data.conPass}
                    placeholder="Confirm password"
                    autoComplete="off"
                    required
                />
                <button className="btn" disabled={data.password !== data.conPass ? true : false}
                > Register</button>
            </form>
            <p>Already have an acoout <Link to={'/login'}>Login</Link></p>
        </main>
    )
}
export default Register;