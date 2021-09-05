import { ArticleInterface } from "../../interface"
import { format } from "../../lib/time"
interface Props {
  articles: ArticleInterface[]
  handleArticle: Function
}
const NotesList = ({ articles, handleArticle }: Props) => {

  return (
    <ul className="font-mono">
      {
        articles.map((item:ArticleInterface) => {
          return (
            <li key={String(item.article_id)} className="mb-6 break-all">
              <div className="text-title text-lg font-semibold leading-3 cursor-pointer sm:hover:underline" onClick={() => handleArticle(item.article_id)}>{item.title}</div>
              <div className="text-notes-grey text-xs mt-4">{format(item.createdAt)}</div>
              <div className="text-notes text-sm mt-4">{item.description}</div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NotesList