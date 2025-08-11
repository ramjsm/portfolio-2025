import { useRef } from 'react'
import ReactPlayer from 'react-player'

export function VideoDialog({ src }) {
  const dialogRef = useRef(null)
  const videoRef = useRef(null)

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
      videoRef.current.play()
    }
  }

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
      videoRef.current.pause()
    }
  }

  const handleClickOutside = (e) => {
    if (e.currentTarget === e.target) {
      closeDialog()
    }
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openDialog}
        className="px-4 py-2 transition text-l font-pp-neue-montreal bg-white/3 hover:cursor-pointer"
      >
        /WATCH
      </button>

      {/* Native Dialog Element */}
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        className="bg-transparent mx-auto my-auto w-2/3 max-w-[1920px]border-none backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center"
      >
        <div className="relative shadow-lg px-10 w-full">
          {/* Close Button */}
          {/* <button
            onClick={closeDialog}
            className="absolute top-0 right-0 transition font-syne text-4xl text-transparent text-stroke-gray-100 text-stroke-1"
            aria-label="Close video"
          >
            x
          </button> */}

          {/* Video Player */}
          <div className="aspect-video mx-auto">
            <ReactPlayer
              ref={videoRef}
              src={src}
              width="100%"
              height="100%"
              muted={false}
              controls
              playsInline
              loop
            />
          </div>
        </div>
      </dialog>
    </>
  )
}
