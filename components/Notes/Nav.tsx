import type { NextComponentType } from 'next'
interface Props {
  title?: String
}
const NotesNav = ({title=''}:Props) => {

  return (
    <div className="font-sans">
      <div className="mt-16 text-title dark:text-dbase text-2xl text-center px-4 overflow-x-auto sm:px-0 sm:mt-24">{title}</div>
    </div>
  )
}

export default NotesNav