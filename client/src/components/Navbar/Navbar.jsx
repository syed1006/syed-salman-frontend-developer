import { useState } from 'react';
import './Navbar.css';
import logo from './spaceX logo.png';
const Navbar = ()=>{
    const [visible, setVisible] = useState('');
    return(
        <header className='header'>
            <button className="nav-btn open-btn" onClick={()=>setVisible('visible')}>
            <i className="fas fa-bars"></i>
            </button>
            <div className="main-logo"><img src={logo} alt="Logo" className="logo"/></div>
            <div className={`nav nav-black ${visible}`}>
                <div className={`nav nav-red ${visible}`}>
                    <nav className={`nav nav-white ${visible}`}>
                        <button className="nav-btn close-btn" onClick={()=>setVisible('')}>
                            <i className="fas fa-times"></i>
                        </button>

                        <img src={logo} alt="Logo" className="logo"/>

                        <ul className="list">
                            <li><a href="/">Teams</a></li>
                            <li><a href="/">Locations</a></li>
                            <li><a href="/">Life at SpaceX</a></li>
                            <li>
                                <ul>
                                    <li>
                                        <a href="/">SpaceX culture memo</a>
                                    </li>
                                    <li>
                                        <a href="/">Work life balance</a>
                                    </li>
                                    <li>
                                        <a href="/">Inclusions and diversity</a>
                                    </li>
                                    <li>
                                        <a href="/">Blogs</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;