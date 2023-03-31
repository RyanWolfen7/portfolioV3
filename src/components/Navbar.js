"use client";
import '../styles/NavbarStyles.css'
import { useEffect, useState } from "react";
import useWindowSize from '@/hooks/useWindowSize';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { width } = useWindowSize();

    useEffect(() => { width > 767 ? setOpen(true) : setOpen(false)}, [width])

    return (
        <nav>
            <div class="navbar-wrapper">
                <div class="name-container">
                    <h1> Ryan Clark </h1>
                    <h3> Full Stack Developer </h3>
                </div>
                <button type="button" class="hamburger" onClick={() => setOpen(!open)}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </button>
                <div class={`link-container ${open ? 'open' : 'hidden'}`}>
                    <div class="nav-link"> About </div>
                    <div class="nav-link"> Projects </div>
                    <div class="nav-link"> Experience </div>
                    <div class="nav-link"> Contact </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
