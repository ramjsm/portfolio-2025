import { useRef, forwardRef, useImperativeHandle } from 'react'
import ReactPlayer from 'react-player'

interface VideoDialogProps {
  src: string
}

export interface VideoDialogRef {
  open: () => void
  close: () => void
}

export const VideoDialog = forwardRef<VideoDialogRef, VideoDialogProps>(
  ({ src }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const videoRef = useRef<any>(null)

    useImperativeHandle(ref, () => ({
      open: () => {
        if (dialogRef.current) {
          dialogRef.current.showModal()
          if (videoRef.current) videoRef.current.play()
        }
      },
      close: () => {
        if (dialogRef.current) {
          dialogRef.current.close()
          if (videoRef.current) videoRef.current.pause()
        }
      },
    }))

    const closeDialog = () => {
      if (dialogRef.current) {
        dialogRef.current.close()
        if (videoRef.current) videoRef.current.pause()
      }
    }

    const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.currentTarget === e.target) {
        closeDialog()
      }
    }

    return (
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        onKeyDown={closeDialog}
        className="mx-auto my-auto max-h-screen w-full max-w-[1920px] border-none bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center lg:w-2/3"
      >
        <div className="relative w-full shadow-lg lg:px-10">
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
    )
  }
)

VideoDialog.displayName = 'VideoDialog'
