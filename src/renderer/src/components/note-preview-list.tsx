import { notesMock } from '@renderer/store/mocks'
import { cn } from '@renderer/utils'
import React, { ComponentProps } from 'react'
import { NotePreview } from './note-preview'

const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}

export default NotePreviewList
