import Header from '../../components/Header'
import Head from 'next/head'
import excuteQuery from '../../libs/db'
import NotesNav from '../../components/Notes/Nav'
import Tags from '../../components/Tags'
import NotesList from '../../components/Notes/NotesList'
import Footer from '../../components/Footer'
import { TagsInterface  } from '../../interface'
import { useRouter } from 'next/router'
import { BreadcrumbItemInterface } from '../../interface'
interface Props {
  info: any
}

const NotesWithTag = ({ info }: Props) => {
  const { articles, tags, tag_name } = info

  const router = useRouter()

  const handleTag = (name:string) => {
    router.push(`/notes/${name}`)
  }

  const handleArticle = (tag_name: string) => {
    return (id: string | number) => router.push(`/notes/${tag_name}/${id}`)
  }

  const Breadcrumb:BreadcrumbItemInterface[] = [
    {
      name: 'notes',
      path: '/notes'
    },
    {
      name: tag_name,
      path: `/${tag_name}`
    }
  ]

  return (
    <div>
      <Head>
        <title>✌Every Little Code</title>
      </Head>
      <div className="flex flex-col min-h-screen dark:bg-dblock">
        <div className="dark:bg-dbnewblock">
          <Header path={Breadcrumb} height={56} title={tag_name} />
        </div>
        <div className="flex flex-col pb-12 flex-1 dark:bg-dblock sm:flex-row sm:justify-between sm:items-start sm:pt-12 sm:px-12 lg:w-1024px lg:mx-auto lg:items-start">
          {
            tags.length > 0 && <div className="px-6 sm:order-last"><Tags tags={tags} handleTag={handleTag} /></div>
          }
          <div className="px-6 mt-6 sm:mt-0"><NotesList articles={articles}  handleArticle={handleArticle(tag_name)} /></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticPaths() {

  const SQL:string = 'SELECT id, name FROM articles_tags;'
  const tags_list = JSON.parse(JSON.stringify(await excuteQuery(SQL)))

  return {
    fallback: false,
    paths: tags_list.map((tag:TagsInterface) => {
      return {
        params: {
          tag_id: tag.id,
          tag_name: tag.name
        },
      }
    })
  }
}

export async function getStaticProps(context:any) {
  const { tag_name } = context.params
  const SQL = `SELECT a.article_id, createdAt, author, title, description FROM articles_list a JOIN article_list_tag b ON a.article_id = b.article_id JOIN articles_tags c ON c.name = b.tag_key WHERE b.tag_key="${tag_name}" ORDER BY createdAt DESC;`
  const tags_query:string = 'SELECT id, name From articles_tags;'
  const articles = JSON.parse(JSON.stringify(await excuteQuery(SQL)))
  const tags:TagsInterface[] = JSON.parse(JSON.stringify(await excuteQuery(tags_query)))
  return {
    props: {
      info: {
        articles,
        tag_name,
        tags
      }
    },
    revalidate: 10,
  }
}

export default NotesWithTag