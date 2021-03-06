import axios from '@/common/axiosConfig'
import articleUrl from '@/api/blog/articleUrl'

const articleApi = {
  // 获取全部文章摘要列表
  articleSummaryList () {
    return axios.get(articleUrl.articleSummaryUrl())
  },
  // 分页条件查询文章摘要列表
  pageArticleSummaryByCondition (page, condition = null) {
    return axios.post(
      articleUrl.pageArticleSummaryUrl(),
      {
        page,
        condition,
      },
    )
  },
  // 根据文章ID，查询文章详情
  findArticleDetailById (articleId) {
    return axios.get(articleUrl.findArticleDetailById(articleId))
  },
}

export default articleApi
