import type { NextComponentType } from 'next'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import DarkContentBg from '../../components/DarkContentBg'
const HomeContaniner: NextComponentType = () => {

  return (
    <div className="flex flex-col items-center select-none text-base font-mono">
      <div className="mt-12 text-3xl font-mono dark:text-dbase">Every Little Code</div>
      <div className="mt-12">
        <Image src={"/avator.jpg"} className="rounded-full" width={180} height={180} alt="avator" />
      </div>
       <div className="text-l mt-8 text-center dark:text-dbase sm:ml-4">
        <p>👋 HI THERE</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="mt-2 dark:text-dbase">I'M Jeff</p>
        <p className="mt-2 dark:text-dbase">Software Engineer in China</p>
        <ul className="mt-8">
          <li>
            <Link href="/notes">
              <a className="text-highlight underline dark:text-dbase dark:hover:text-highlight">Notes/文章</a>
            </Link>
          </li>
          <li>
            <Link href="https://marketplace.visualstudio.com/search?term=create-easy&target=VSCode&category=All%20categories&sortBy=Relevance">
              <a className="text-highlight underline dark:text-dbase dark:hover:text-highlight">Create-Easy/vscode extension</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/saitoChen/vue-awesome-textarea">
              <a className="text-highlight underline dark:text-dbase dark:hover:text-highlight">Vue-awesome-textarea/a component for Vue2.x</a>
            </Link>
          </li>
        </ul>
       </div>
       <DarkContentBg />
    </div>
  )

}

export default HomeContaniner