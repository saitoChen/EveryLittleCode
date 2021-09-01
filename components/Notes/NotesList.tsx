import { ArticleInterface } from "../../interface"
interface Props {
  articles: ArticleInterface[]
}
const NotesList = ({ articles }: Props) => {

  return (
    <ul className="font-mono">
      {
        articles.map((item:ArticleInterface) => {
          return (
            <li key={String(item.article_id)} className="mb-6 break-all">
              <div className="text-title text-lg font-semibold leading-3 cursor-pointer sm:hover:underline">{item.title}</div>
              <div className="text-notes-grey text-xs mt-4">{item.createdAt.toString()}</div>
              <div className="text-notes text-sm mt-4">{item.description}</div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NotesList