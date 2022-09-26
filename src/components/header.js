import "./header.css";
import { Link, NavLink } from "react-router-dom";
import SearchForm from "./searchForm";
import Logo from "./logo";

const Header = () => {

    return (
        <nav id="navbar" className="navbar navbar-expand-lg py-0 px-5">
            <div className="container-fluid">
                <NavLink id="title" className="navbar-brand" to="/">
                    <Logo width="90px" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item mx-4">
                            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-link"} to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-link"} to="/register">Register</NavLink>
                        </li>  
                        <li className="nav-item mx-4">
                            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-link"} to="/login">Login</NavLink>
                        </li> 
                        <li className="nav-item mx-4">
                            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-link"} to="/product-list">Products</NavLink>
                        </li>                              
                    </ul>
                    
                    <Link to="/cart" id="cart"><i className="bi bi-cart4 mx-5" /></Link>
                    <SearchForm />
                </div>
            </div>
        </nav> 
    );
}

export default Header;