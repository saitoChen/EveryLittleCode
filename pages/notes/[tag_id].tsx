import type { NextComponentType } from 'next'
import Header from '../../components/Header'
import Head from 'next/head'
const Post:NextComponentType = () => {
  return (
    <div>
      <Head>
        <title>✌Every Little Code</title>
      </Head>
      <Header path='notes / 1'/>
      <div>this is tag_id</div>
    </div>
  )
}

export async function getStaticPaths() {

  const ids = ['1']
  return {
    fallback: false,
    paths: ids.map((id:any) => {
      return {
        params: {
          tag_id: id
        }
      }
    })
  }
}

export async function getStaticProps(context:any) {
  console.log(context.params)
  return {
    props: {
      info: context.params.tag_id
    }
  }
}

export default Post