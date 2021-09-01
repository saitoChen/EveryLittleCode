export interface HeaderInterface {
  path?: String
  height?: Number
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