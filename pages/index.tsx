import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Home/index'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>✌Every Little Code</title>
      </Head>
      <Header path="/ home" height={56} />
      <div className="flex justify-center -mt-32">
        <Content />
      </div>
    </div>
  )
}

export default Home
