import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { notesMock } from '@/store/mocks'
import { cn } from '@renderer/utils'
import React, { ComponentProps } from 'react'

export const NotePreviewList = ({
  className,
  ...props
}: ComponentProps<'ul'>) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({})

  if (notes.length === 0) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notesMock.map((note, i) => (
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
