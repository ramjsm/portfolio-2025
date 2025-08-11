import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import Router from './router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useGSAP } from '@gsap/react'
import '@14islands/r3f-scroll-rig/css'
import { Overlay } from './components/Overlay'
import { useRef } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { RoughEase } from 'gsap/EasePack'

gsap.registerPlugin(
  ScrollTrigger,
  SplitText,
  ScrambleTextPlugin,
  RoughEase,
  useGSAP
)

function App() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className="mx-auto w-full antialiased">
      <GlobalCanvas
        dpr={[1, 2]}
        eventSource={ref} // rebind event source to a parent DOM element
        eventPrefix="client" // use clientX/Y for a scrolling page
        style={{
          pointerEvents: 'none', // delegate events to wrapper
        }}
        globalRender={false}
      >
        <ambientLight intensity={2} />
      </GlobalCanvas>
      <SmoothScrollbar />
      <Overlay />
      <div className="mx-auto max-w-[1920px] md:w-full lg:w-2/3">
        <Router />
      </div>
      <Footer />
      {/*   <Cursor /> */}
    </div>
  )
}

export default App
