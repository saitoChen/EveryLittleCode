import { ArticleInterface } from "../../interface"
import { format } from "../../lib/time"
interface Props {
  articles: ArticleInterface[]
  handleArticle: Function
}
const NotesList = ({ articles, handleArticle }: Props) => {

  return (
    <ul className="font-sans">
      {
        articles.map((item:ArticleInterface) => {
          return (
            <li key={String(item.article_id)} className="font-sans mb-4 break-all">
              <div className="text-title dark:text-dbase dark:hover:text-title sm:dark:hover:text-highlight text-sm leading-3 cursor-pointer underline" onClick={() => handleArticle(item.article_id)}>{item.title}</div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NotesList