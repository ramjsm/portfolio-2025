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
        <Link to="/" className="flex-1 text-nowrap opacity-60">
          <div className="font-[100] uppercase">Ramses Salas</div>
          <div className="font-[100] uppercase">Creative Techonologist</div>
        </Link>
        <Link to="/" className="flex flex-1 justify-center">
          <Logo width="33px" height="33px" />
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
          >
            Schedule a Call &#8594;
          </a>
        </div>
      </div>
      <div className="fixed right-5 bottom-5">
        <Menu width="80px" height="80px" onClick={toggleMenu} />
      </div>
      {isMenuVisible && (
        <div className="fixed right-5 bottom-30 flex flex-col bg-transparent text-right">
          <Link to="/about">About</Link>
          <Link to="/#co-creations">Co-Creations</Link>
          <Link to="/#clients-work">Clients Work</Link>
          <p>Comming Soon / Playground</p>
        </div>
      )}
    </>
  )
}
