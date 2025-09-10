import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar({navlinks}) {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-links">
                    {navlinks.map((link, id) => 
                        (
                            <li key={id}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={link.to}>
                                {link.label}
                                </NavLink>
                            </li>
                        ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;