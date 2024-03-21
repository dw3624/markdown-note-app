import React, { ComponentProps } from 'react'
import { DeleteNoteButton, NewNoteButton } from './button'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
