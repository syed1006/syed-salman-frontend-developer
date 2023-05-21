import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './spaceX logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Navbar = () => {
    const [visible, setVisible] = useState('');
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        setAuth({...auth, token: ""});
        localStorage.removeItem('auth-token');
    }

    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        const x = window.matchMedia("(max-width: 700px)")
        function myFunction(e) {
            setNavOpen(navOpen => !navOpen);
        };
        x.addListener(myFunction)
        return () => x.removeListener(myFunction);
    }, []);
    return (
        <header className='header'>
            <button className="nav-btn open-btn" onClick={() => setVisible('visible')}>
                <i className="fas fa-bars"></i>
            </button>
            <div className="main-logo"><img src={logo} alt="Logo" className="logo" /></div>
            <div className={`nav nav-black ${visible}`}>
                <div className={`nav nav-red ${visible}`}>
                    <nav className={`nav nav-white ${visible}`}>
                        <button className="nav-btn close-btn" onClick={() => setVisible('')}>
                            <i className="fas fa-times"></i>
                        </button>

                        <img src={logo} alt="Logo" className="logo" />

                        <ul className="list">
                            {navOpen && <ul className="main-nav">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/'}>Career</Link></li>
                                <li><Link to={'/'}>Contact Us</Link></li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>}
                            <li><Link to={'/'}>Teams</Link></li>
                            <li><Link to={'/'}>Locations</Link></li>
                            <li><Link to={'/'}>Life at SpaceX</Link></li>
                            <li>
                                <ul>
                                    <li>
                                        <Link to={'/'}>SpaceX culture memo</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Work life balance</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Inclusions and diversity</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>Blogs</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {!navOpen && <nav>
                <ul className="main-nav">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>Career</Link></li>
                    <li><Link to={'/'}>Contact Us</Link></li>
                    <li onClick={handleLogout} className='logout'>Logout</li>
                </ul>
            </nav>}
        </header>
    )
}

export default Navbar;