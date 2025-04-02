// components/Navbar.jsx
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/react.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <NavLink to="/">
                    <img src={logo} alt="Site Logosu" className="logo" />
                </NavLink>
            </div>
            <ul className="nav-links">

                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Ana Sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Hakkımızda
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        İletişim
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Galeri
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar