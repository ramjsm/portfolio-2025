import { Link } from 'react-router-dom'
import Logo from '../assets/logo_white.svg?react'
import Menu from '../assets/menu.svg?react'
import { useState } from 'react'

export function Overlay() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  return (
    <>
      <div className="font-pp-neue-montreal fixed z-99 flex w-full justify-between bg-linear-to-b from-[#101010] to-transparent px-5 py-5 text-xs tracking-wider">
        <Link
          to="/"
          className="flex-1 text-nowrap opacity-60"
          data-cursor-text="HOME"
        >
          <div className="font-[100] uppercase">Ramses Salas</div>
          <div className="font-[100] uppercase">Creative Technologist</div>
        </Link>
        <Link
          to="/"
          className="flex flex-1 justify-center"
          data-cursor-text="HOME"
        >
          <Logo className="h-[2rem] w-[2rem] lg:h-[33px] lg:w-[33px]" />
        </Link>
        <div className="flex-1 text-right font-[100] text-nowrap uppercase opacity-60">
          <div>
            <span className="relative h-3 w-3 animate-ping rounded-full bg-green-500">
              <span className="absolute h-full w-full rounded-full bg-green-500 opacity-75"></span>
            </span>
            <span>Available for Projects</span>
          </div>
          <a
            href="https://calendly.com/me-ramsessalas/30min"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="CONTACT"
          >
            Schedule a Call &#8594;
          </a>
        </div>
      </div>
      <div className="fixed right-5 bottom-5 z-9999">
        <Menu
          className="cursor-hover h-[5rem] w-[5rem] lg:h-[80px] lg:w-[80px]"
          data-cursor-text="MENU"
          onClick={toggleMenu}
        />
      </div>
      {isMenuVisible && (
        <div className="fixed right-5 bottom-30 flex flex-col bg-transparent text-right">
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/#co-creations" onClick={toggleMenu}>
            Co-Creations
          </Link>
          <Link to="/#clients-work" onClick={toggleMenu}>
            Clients Work
          </Link>
        </div>
      )}
    </>
  )
}
