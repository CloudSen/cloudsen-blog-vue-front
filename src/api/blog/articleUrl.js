import { USE_EOLINKER } from '@/common/env'

const articleUrl = {
  // 获取全部文章列表
  articleSummaryUrl () {
    const eolinkerUrl = ''
    const url = '/cloudable-blog/blog/article'
    return USE_EOLINKER ? eolinkerUrl : url
  },
  // 分页条件查询文章摘要列表
  pageArticleSummaryUrl () {
    const eolinkerUrl = ''
    const url = '/cloudable-blog/blog/article/page'
    return USE_EOLINKER ? eolinkerUrl : url
  },
  // 根据文章ID，查询文章详情
  findArticleDetailById (articleId) {
    const eolinkerUrl = ''
    const url = `/cloudable-blog/blog/article/${articleId}`
    return USE_EOLINKER ? eolinkerUrl : url
  },
}

export default articleUrl
