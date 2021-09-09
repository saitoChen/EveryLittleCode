import { ArticleInterface } from '../../interface/index'
import { format } from '../../lib/time'
import DarkContentBg from '../../components/DarkContentBg'
import dynamic from 'next/dynamic';
import '@uiw/react-markdown-preview/markdown.css';

const MarkdownPreview = dynamic(
  ():any => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);
interface Props {
  article: ArticleInterface
}
const Article = ({ article }: Props) => {

  return (
    <div className="px-4">
      <div className="flex flex-col items-center text-sm text-grey sm:flex-row sm:items-start sm: justify-center sm:text-lg">
        <div className="mt-2 sm:mt-8">{format(article.createdAt)}</div>
      </div>
      {/* <div className="mt-8 overflow-auto dark:text-dbase sm:px-12 lg:w-1024px lg:mx-auto" dangerouslySetInnerHTML={{__html: String(article.content)}}></div> */}
      <div className="mt-8 overflow-auto dark:text-dbase sm:px-12 lg:w-1024px lg:mx-auto">
        <MarkdownPreview source={article.content} />
      </div>
      <DarkContentBg />
    </div>
  )
}

export default Article