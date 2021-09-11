import Header from '../../../components/Header'
import Head from 'next/head'
import excuteQuery from '../../../lib/db'
import { ArticleInterface, TagsInterface } from '../../../interface/index'
import Article from '../../../components/Article/index'
import Footer from '../../../components/Footer'
interface Props {
  info: {
    id: String | Number
    tag_name: String
    article: ArticleInterface
  }
}

const NotesItem = ( { info }:Props ) => {
  const {tag_name, article, id } = info
  const Breadcrumb = [
    {
      path: '/notes',
      name: 'notes'
    },
    {
      path: `/${tag_name}`,
      name: tag_name
    },
    {
      path: `/${id}`,
      name: `${id}`
    }
  ]

  return (
    <div>
      <Head>
        <title>✌Every Little Code</title>
      </Head>
      <div className="flex flex-col pb-12 min-h-screen font-mono text-base dark:bg-dblock">
        <div className="dark:bg-dbnewblock">
          <Header path='/ notes' height={56} title={'ALL PUBLISHED'} />
        </div>
        <div className="flex-1"><Article article={article} /></div>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticPaths() {

  const ARTICLE_SQL:string = 'SELECT article_id,author, title, description, content FROM articles_list;'
  const articles_list = JSON.parse(JSON.stringify(await excuteQuery(ARTICLE_SQL)))
  const TAG_SQL:string = 'SELECT id, name FROM articles_tags;'
  const tags_list = JSON.parse(JSON.stringify(await excuteQuery(TAG_SQL)))
  const paths = articles_list.map((article:ArticleInterface) => {
    return tags_list.map((tag:TagsInterface) => ({ params: { id: String(article.article_id), tag_name: tag.name} }))
  }).flat()
  return {
    fallback: false,
    paths
  }

}

export async function getStaticProps(context:any) {
  const { id, tag_name } = context.params
  const SQL = `SELECT article_id, createdAt, author, title, description, content FROM articles_list WHERE article_id = ${id}`
  const article = JSON.parse(JSON.stringify(await excuteQuery(SQL)))[0]
  return {
    props: {
      info: {
        article,
        id,
        tag_name
      }
    },
    revalidate: 10,
  }
}

export default NotesItem