"use client";
import { useState } from 'react';
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Header = () => {
    const [notHero, setNotHero] = useState(false);

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);


  return (
    <header className="absolute top-4 right-4 z-20 bg-none">
        <ThemeToggle />
        {notHero ? 
<div></div> : null}
    </header>
  )
}

export default Header