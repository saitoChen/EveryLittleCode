import React, { useState } from 'react'
import GithubSvg from './Icons/Github'
import Twitter from './Icons/Twitter'
import Breadcrumb from '../components/Breadcrumb/index'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { HeaderInterface } from '../interface/index'
import Link from 'next/link'
import NotesNav from '../components/Notes/Nav'
const Header = ({ path='/ home', height=72, title='' }: HeaderInterface) => {

  const [ darkModeOn, setDarkMode ] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkModeOn)
    const dom = document.querySelector('html') as HTMLElement
    if (darkModeOn) {
      dom.classList.remove('dark')
    } else {
      dom.classList.add('dark')
    }
  }

  const toGitHub = () => { window.location.href = 'https://github.com/saitoChen' }

  return (
    <div className="h-56">
      <div className={`w-100% h-${height} bg-block absolute top-0 -z-1 dark:bg-dbnewblock`}></div>
      <div className="flex flex-col font-mono text-base items-center mt-4 sm:flex-row sm:justify-between sm:px-4 lg:w-1024px lg:mx-auto">
        <div className="flex w-200px cursor-pointer fill-current justify-evenly text-highlight dark:text-grey sm:order-last">
          <div className="dark:hover:text-dbase"><Twitter /></div>
          <div className="dark:hover:text-dbase" onClick={ toGitHub }><GithubSvg /></div>
          <div className="header-icon text-grey" onClick={ toggleDarkMode }>
            { darkModeOn ? <SunIcon/> : <MoonIcon /> }
          </div>
        </div>
        <Breadcrumb path={path} />
      </div>
      <NotesNav title={title} />
    </div>
  )

}

export default Header