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
    const overlayRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      open: () => {
        if (dialogRef.current) {
          dialogRef.current.showModal()
          // Focus the overlay to ensure it can capture keyboard events
          setTimeout(() => {
            overlayRef.current?.focus()
          }, 100)
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        closeDialog()
      }
    }

    return (
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        tabIndex={-1}
        className="mx-auto my-auto max-h-screen w-full max-w-[1920px] border-none bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center focus:outline-none lg:w-2/3"
      >
        <div
          ref={overlayRef}
          className="z-10 mx-auto aspect-video max-h-screen w-full lg:max-h-full"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label="Video dialog - press escape to close"
        >
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
      </dialog>
    )
  }
)

VideoDialog.displayName = 'VideoDialog'
