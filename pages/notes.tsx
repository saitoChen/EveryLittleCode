import Header from '../components/Header'
import Head from 'next/head'
import Tags from '../components/Tags'
import NotesList from '../components/Notes/NotesList'
import Footer from '../components/Footer'
import excuteQuery from '../lib/db'
import { ArticleInterface, TagsInterface } from '../interface/index'
import { useRouter } from 'next/router'
interface Props {
  articles: ArticleInterface[]
  tags: TagsInterface[]
}

const Notes = ({ articles, tags }: Props) => {

  const router = useRouter()

  const handleTag = (name:string) => {
    router.push(`/notes/${name}`)
  }

  const handleArticle = (id: string) => {
    router.push(`/notes/All/${id}`)
  }

  return (
    <div>
      <Head>
        <title>✌Every Little Code</title>
      </Head>
      <div className="flex flex-col min-h-screen dark:bg-dblock ">
        <div className="dark:bg-dbnewblock">
          <Header path='/ notes' height={56} title={'ALL PUBLISHED'} />
        </div>
        <div className="flex flex-col h-full pb-12 flex-1 dark:bg-dblock sm:flex-row sm:justify-between sm:items-start sm:pt-12 sm:px-12 lg:w-1024px lg:mx-auto lg:items-start">
          {
            tags.length > 0 && <div className="px-6 sm:order-last"><Tags tags={tags} handleTag={handleTag} /></div>
          }
          <div className="px-6 mt-6 sm:mt-0"><NotesList articles={articles} handleArticle={handleArticle} /></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps(context:any) {
  const article_query:string = 'SELECT article_id, createdAt, author, title, description From articles_list ORDER BY createdAt DESC;'
  const tags_query:string = 'SELECT id, name From articles_tags;'
  let articles:ArticleInterface[] = []
  let tags: TagsInterface[] = []
  try {
    const articles_list = await excuteQuery(article_query)
    const tags_list = await excuteQuery(tags_query)
    articles = JSON.parse(JSON.stringify(articles_list))
    tags = JSON.parse(JSON.stringify(tags_list))
  } catch (err:any) {
    throw new Error(err)
  }
  return {
    props: {
      articles,
      tags
    },
    revalidate: 10,
  }
}

export default Notes