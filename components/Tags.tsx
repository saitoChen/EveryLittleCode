import type { NextComponentType } from 'next'
import { TagsInterface } from '../interface/index'
interface Props {
  tags: TagsInterface[]
  handleTag: Function
}

const Tags = ({ tags, handleTag }:Props) => {

  return (
    <div className="font-mono mt-12 sm:order-last sm:mt-0">
      <ul className="flex mx-auto overflow-auto sm:w-240px sm:flex-wrap">
        {
          tags.map((item, index) => item.id !== 99 && <li className="rounded-full whitespace-nowrap px-3 py-1 bg-block dark:bg-dtag dark:text-dbase mr-4 text-xs sm:mb-3 sm:cursor-pointer sm:hover:text-highlight sm:dark:hover:text-dbase" key={index} onClick={() => handleTag(item.name)}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default Tags