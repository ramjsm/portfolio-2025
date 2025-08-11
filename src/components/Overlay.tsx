import { Link } from "react-router";
import Logo from "../assets/logo_white.svg?react";
import Menu from "../assets/menu.svg?react";
import { useState } from "react";


export function Overlay() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible)
    return (
        <>
            <div className="fixed flex text-xs tracking-wider w-full justify-between py-5 px-5 z-99 bg-linear-to-b from-[#101010] to-transparent font-pp-neue-montreal">
                <Link to="/" className="flex-1 opacity-60 text-nowrap">
                    <div className="uppercase font-[100]">Ramses Salas</div>
                    <div className="uppercase font-[100]">Creative Techonologist</div>
                </Link>
                <Link to="/" className="flex flex-1 justify-center">
                    <Logo width="33px" height="33px" />
                </Link>
                <div className="flex-1 uppercase font-[100] text-right text-nowrap opacity-60">
                    <div>
                        <span className="w-3 h-3 rounded-full bg-green-500 animate-ping relative">
                            <span className="absolute w-full h-full rounded-full bg-green-500 opacity-75"></span>
                        </span>
                        <span>Available for Projects</span>
                    </div>
                    <a href="https://calendly.com/me-ramsessalas/30min" target="_blank" rel="noopener noreferrer">Schedule a Call &#8594;</a>
                </div>
            </div>
            <div className="fixed bottom-5 right-5">
                <Menu width="80px" height="80px" onClick={toggleMenu} />
            </div>
            {isMenuVisible && (
                <div className="flex flex-col fixed bottom-30 right-5 bg-transparent text-right">
                    <Link to="/about">About</Link>
                    <Link to="/#co-creations">Co-Creations</Link>
                    <Link to="/#clients-work">Clients Work</Link>
                    <p>Comming Soon / Playground</p>
                </div>
            )}
        
        </>
    )
}