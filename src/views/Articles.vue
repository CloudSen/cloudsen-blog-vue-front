<template>
  <div>
    <ArticleList :cards="this.articleListCards"></ArticleList>
    <PaginationBar :page="this.articleListPage"></PaginationBar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ArticleList from '@/components/Main/Blog/ArticleList'
// import ArticleSourceData from '@/components/temp-data/articles'
import PaginationBar from '@/components/Main/PaginationBar'
import api from '@/api/api'

export default {
  name: 'articles',
  components: {
    ArticleList,
    PaginationBar,
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'articleListPage',
      'articleListCards',
    ]),
  },
  methods: {
    ...mapMutations([
      'updateArticleListPage',
      'updateArticleListCards',
    ]),
    fetchArticleSummaryData () {
      api.articleApi.pageArticleSummaryByCondition(this.articleListPage)
        .then((response) => {
          const { data } = response
          console.log(data.records)
          this.updateArticleListCards(data.records)
          this.updateArticleListPage({
            size: data.size,
            current: data.current,
            total: data.total,
            pages: data.pages,
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  created () {
    this.fetchArticleSummaryData()
  },
}
</script>

<style>
</style>
