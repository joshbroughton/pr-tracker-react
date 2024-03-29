import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import './Header.css';
import { useAuth0 } from "@auth0/auth0-react";

interface headerProps {
    sidebar: boolean,
    setSidebar: (newSidebar: boolean) => void
}

function Header({sidebar, setSidebar}:headerProps) {
    const { isAuthenticated } = useAuth0();
    let authButton;

    const menuHandler = () => {
        if (sidebar) {
            setSidebar(false);
        } else {
            setSidebar(true);
        }
    }

    if (isAuthenticated) {
        authButton = <LogoutButton className="nav-link"/>
    } else {
        authButton = <LoginButton className="nav-link"/>
    }

    return(
        <header className="Header">
            <h1>PR Tracker</h1>
            <div>
                { authButton }
            </div>
            <button className='hamburger' onClick={menuHandler}></button>
        </header>
    )
}

export default Header;
