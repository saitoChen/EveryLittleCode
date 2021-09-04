import React, { useState } from 'react'
import GithubSvg from './Icons/Github'
import Twitter from './Icons/Twitter'
import Breadcrumb from '../components/Breadcrumb/index'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { HeaderInterface } from '../interface/index'
const Header = ({ path='/ home', height=72 }: HeaderInterface) => {

  const [ darkModeOn, setDarkMode ] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkModeOn)
  }

  return (
    <React.Fragment>
      <div className={`w-100% h-${height} bg-block absolute top-0 -z-1`}></div>
      <div className="flex flex-col font-mono text-base items-center mt-4 sm:flex-row sm:justify-between sm:px-4 lg:w-1024px lg:mx-auto">
        <div className="flex w-200px cursor-pointer fill-current justify-evenly text-highlight sm:order-last">
          <Twitter />
          <GithubSvg />
          <div className="header-icon text-grey" onClick={ toggleDarkMode }>
            { darkModeOn ? <SunIcon/> : <MoonIcon /> }
          </div>
        </div>
        <Breadcrumb path={path} />
      </div>
    </React.Fragment>
  )

}

export default Header