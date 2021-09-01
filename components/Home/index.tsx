import type { NextComponentType } from 'next'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
const HomeContaniner: NextComponentType = () => {

  return (
    <div className="flex flex-col items-center select-none text-base font-mono">
      <div className="mt-24 text-3xl font-mono">Every Little Code</div>
      <div className="mt-12">
        <Image src={"/avator.jpg"} className="rounded-full" width={180} height={180} alt="avator" />
      </div>
       <div className=" text-l mt-8 text-center sm:ml-4">
        <p>👋 HI THERE</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="mt-2">I'M Jeff</p>
        <p className="mt-2">Software Engineer in China</p>
        <ul className="mt-12">
          <li>
            <Link href="/notes">
              <a className="text-highlight underline">Notes/文章</a>
            </Link>
          </li>
        </ul>
       </div>
    </div>
  )

}

export default HomeContaniner