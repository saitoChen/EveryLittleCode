import { ArticleInterface } from '../../interface/index'
import { format } from '../../lib/time'
interface Props {
  article: ArticleInterface
}
const Article = ({ article }: Props) => {
  return (
    <div className="px-4">
      <div className="flex flex-col items-center text-sm text-grey sm:flex-row sm:items-start">
        <div className="mt-2">{format(article.createdAt)}</div>
      </div>
      <div className="mt-8 overflow-auto" dangerouslySetInnerHTML={{__html: String(article.content)}}></div>
    </div>
  )
}

export default Article