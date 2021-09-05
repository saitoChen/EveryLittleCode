import type { NextComponentType } from 'next'
interface Props {
  title?: String
}
const NotesNav = ({title='ALL PUBLISHED'}:Props) => {

  return (
    <div className="font-mono">
      <div className="mt-20 text-title text-2xl text-center px-4 overflow-x-auto sm:px-0">{title}</div>
    </div>
  )
}

export default NotesNav