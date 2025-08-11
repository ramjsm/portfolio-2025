import { useRef } from 'react'
import ReactPlayer from 'react-player'

interface VideoDialogProps {
  src: string
}

export function VideoDialog({ src }: VideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const videoRef = useRef<any>(null)

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
      if (videoRef.current) videoRef.current.getInternalPlayer()?.play()
    }
  }

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
      if (videoRef.current) videoRef.current.getInternalPlayer()?.pause()
    }
  }

  const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.currentTarget === e.target) {
      closeDialog()
    }
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openDialog}
        className="text-l font-pp-neue-montreal bg-white/3 px-4 py-2 transition hover:cursor-pointer"
      >
        /WATCH
      </button>

      {/* Native Dialog Element */}
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        className="max-w-[1920px]border-none mx-auto my-auto w-2/3 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center"
      >
        <div className="relative w-full px-10 shadow-lg">
          {/* Close Button */}
          {/* <button
            onClick={closeDialog}
            className="absolute top-0 right-0 transition font-syne text-4xl text-transparent text-stroke-gray-100 text-stroke-1"
            aria-label="Close video"
          >
            x
          </button> */}

          {/* Video Player */}
          <div className="mx-auto aspect-video">
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
