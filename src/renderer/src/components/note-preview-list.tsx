import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { cn } from '@renderer/utils'
import React, { ComponentProps } from 'react'

export type NotePreviewListPropsType = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({
  onSelect,
  className,
  ...props
}: NotePreviewListPropsType) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({
    onSelect,
  })

  if (!notes) return null

  if (notes.length === 0) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notes.map((note, i) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === i}
          onClick={handleNoteSelect(i)}
          {...note}
        />
      ))}
    </ul>
  )
}
