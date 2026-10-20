// components/Navbar.jsx
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import '../styles/Navbar.css'
import logo from "../../public/images/mainlogo.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className="navbar">
            <div className="logo-container">
                <NavLink to="/" onClick={closeMenu}>
                    <img src={logo} alt="Site Logosu" className="logo" />
                </NavLink>
            </div>
            <button
                className="menu-toggle"
                type="button"
                aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>

                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                        onClick={closeMenu}
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
                        onClick={closeMenu}
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
                        onClick={closeMenu}
                    >
                        İletişim
                    </NavLink>
                </li>
                {/*<li>*/}
                {/*    <NavLink*/}
                {/*        to="/gallery"*/}
                {/*        className={({ isActive }) =>*/}
                {/*            isActive ? 'nav-link active' : 'nav-link'*/}
                {/*        }*/}
                {/*    >*/}
                {/*        Galeri*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
            </ul>
        </nav>
    )
}

export default Navbar
