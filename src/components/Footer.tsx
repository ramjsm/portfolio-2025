import { handleScrambleHover } from '../utils/scrambleText'

export function Footer() {
  return (
    <div className="font-pp-neue-montreal mt-16 flex items-end px-5 py-5 text-xs tracking-[0.3em] text-gray-500 uppercase">
      <div className="flex-1">
        <ul className="justify-bottom flex flex-col gap-2">
          <li>
            <a
              href="https://www.linkedin.com/in/ramsessalas/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleScrambleHover}
              className="transition-colors duration-300 hover:text-white"
            >
              <span data-scramble="Linkedin">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ramjsm"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleScrambleHover}
              className="transition-colors duration-300 hover:text-white"
            >
              <span data-scramble="Github">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ramsessalas_"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleScrambleHover}
              className="transition-colors duration-300 hover:text-white"
            >
              <span data-scramble="Instagram">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/ramsessalas"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleScrambleHover}
              className="transition-colors duration-300 hover:text-white"
            >
              <span data-scramble="Behance">Behance</span>
            </a>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="flex flex-1 flex-col items-center">
        <a
          href="mailto:hello@ramsessalas.com"
          data-cursor-text="CONTACT"
          onMouseEnter={handleScrambleHover}
          className="transition-colors duration-300 hover:text-white"
        >
          <span data-scramble="hello@ramsessalas.com">
            hello@ramsessalas.com
          </span>
        </a>
        <span>Ramses Salas 2025 ©</span>
      </div>
      <div className="flex-1"></div>
    </div>
  )
}
