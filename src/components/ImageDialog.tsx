import { useRef, forwardRef, useImperativeHandle } from 'react'

interface ImageDialogProps {
  src: string
  alt?: string
}

export interface ImageDialogRef {
  open: () => void
  close: () => void
}

export const ImageDialog = forwardRef<ImageDialogRef, ImageDialogProps>(
  ({ src, alt }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useImperativeHandle(ref, () => ({
      open: () => {
        if (dialogRef.current) {
          dialogRef.current.showModal()
        }
      },
      close: () => {
        if (dialogRef.current) {
          dialogRef.current.close()
        }
      },
    }))

    const closeDialog = () => {
      if (dialogRef.current) {
        dialogRef.current.close()
      }
    }

    const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.currentTarget === e.target) {
        closeDialog()
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
      if (e.key === 'Escape') {
        closeDialog()
      }
    }

    return (
      <dialog
        ref={dialogRef}
        onClick={handleClickOutside}
        onKeyDown={handleKeyDown}
        className="fixed inset-0 w-screen h-screen border-none bg-transparent backdrop:bg-black/80 backdrop:backdrop-blur-sm overflow-hidden outline-none focus:outline-none p-4 open:flex open:items-center open:justify-center"
      >
        {/* Image */}
        <img
          src={src}
          alt={alt || src}
          className="max-w-full max-h-full w-auto h-auto object-contain cursor-zoom-out"
          onClick={(e) => e.stopPropagation()}
        />
      </dialog>
    )
  }
)

ImageDialog.displayName = 'ImageDialog'
