import { ActionButton, ActionButtonPropsType } from '@/components'
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { Trash2 } from 'lucide-react'

export const DeleteNoteButton = ({ ...props }: ActionButtonPropsType) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <Trash2 className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
