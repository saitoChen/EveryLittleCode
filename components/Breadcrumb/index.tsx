import { BreadcrumbItemInterface } from '../../interface'
import { useRouter } from 'next/router'
interface Props {
  path:String |BreadcrumbItemInterface[]
}

const Breadcrumb = ({ path }:Props) => {

  const router = useRouter()

  const handlePath = (isBtn:Boolean = false, path:BreadcrumbItemInterface[], index: number) => {
    if (isBtn) {
      const pathList:BreadcrumbItemInterface[] = path.slice(0, index + 1)
      let paths = ''
      pathList.forEach((item:BreadcrumbItemInterface) => paths+=item.path)
      router.push(paths)
    }
  }

  return (
    <div className="mt-4 select-none dark:text-dbase sm:order-1 sm:mt-0">
      {
        typeof path === 'string' && path
      }
      {
        path instanceof Array && path.map((item, index) => {
          const length = path.length
          const isBtn = index !== path.length - 1
          return (
            item.name !== 'All' && <span key={index} className={isBtn ? 'cursor-pointer text-highlight dark:text-dbase dark:hover:text-highlight' : ''  } onClick={() => handlePath(true, path, index )}>{` / ${item.name}`}</span>     
          )
        })
      }
    </div>
  )
}

export default Breadcrumb