export interface HeaderInterface {
  path?: String | BreadcrumbItemInterface[]
  height?: Number,
  title?: String
}

export interface TagsInterface {
  id: Number
  name: String
}

export interface ArticleInterface {
  article_id:Number
  createdAt:String
  author: String
  title: String
  description: String
  content?:String
}

export interface BreadcrumbItemInterface {
  path: String
  name: String
}