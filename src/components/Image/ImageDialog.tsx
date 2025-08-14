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
        className="fixed inset-0 h-screen w-screen overflow-hidden border-none bg-transparent p-4 outline-none backdrop:bg-black/80 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center focus:outline-none"
      >
        {/* Image */}
        <img
          src={src}
          alt={alt || src}
          className="h-auto max-h-full w-auto max-w-full cursor-zoom-out object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </dialog>
    )
  }
)

ImageDialog.displayName = 'ImageDialog'
