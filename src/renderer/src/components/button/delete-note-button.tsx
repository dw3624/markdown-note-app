import { ActionButton, ActionButtonPropsType } from '@/components'
import { Trash2 } from 'lucide-react'

export const DeleteNoteButton = ({ ...props }: ActionButtonPropsType) => {
  return (
    <ActionButton {...props}>
      <Trash2 className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
