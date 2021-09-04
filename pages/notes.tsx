import Header from '../components/Header'
import Head from 'next/head'
import NotesNav from '../components/Notes/Nav'
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

  return (
    <div>
      <Head>
        <title>✌Every Little Code</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header path='/ notes' height={56} />
        <NotesNav />
        <div className="flex flex-col mb-32 flex-1 sm:flex-row sm:justify-between sm:items-start sm:mt-28 sm:px-12 lg:w-1024px lg:mx-auto lg:items-start">
          {
            tags.length > 0 && <div className="px-6 sm:order-last"><Tags tags={tags} handleTag={handleTag} /></div>
          }
          <div className="px-6 mt-6 sm:mt-0"><NotesList articles={articles} /></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export async function getServerSideProps(context:any) {
  const article_query:string = 'SELECT article_id, createdAt, author, title, description From articles_list;'
  const tags_query:string = 'SELECT id, name From articles_tags;'
  let articles:ArticleInterface[] = []
  let tags: TagsInterface[] = []
  try {
    const articles_list = await excuteQuery(article_query)
    const tags_list = await excuteQuery(tags_query)
    articles = JSON.parse(JSON.stringify(articles_list))
    tags = JSON.parse(JSON.stringify(tags_list))
  } catch (err) {
    throw new Error(err)
  }
  return {
    props: {
      articles,
      tags
    }
  }
}

export default Notes