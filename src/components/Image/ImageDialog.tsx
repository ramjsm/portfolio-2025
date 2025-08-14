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
        className="mx-auto my-auto h-full max-h-screen w-full max-w-screen border-none bg-transparent outline-none backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:items-center open:justify-center focus:outline-none lg:w-2/3 lg:max-w-[1920px]"
      >
        {/* Image */}
        <img
          src={src}
          alt={alt || src}
          className="h-auto max-h-screen w-auto max-w-screen cursor-pointer object-contain lg:max-h-full lg:max-w-full"
          onClick={closeDialog}
        />
      </dialog>
    )
  }
)

ImageDialog.displayName = 'ImageDialog'
