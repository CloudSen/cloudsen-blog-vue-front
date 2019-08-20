<template>
  <div>
    <ArticleList :cards="cards"></ArticleList>
    <PaginationBar :page="page"></PaginationBar>
  </div>
</template>

<script>
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
      cards: [],
      page: {
        size: 20,
        current: 1,
        total: 1,
        pages: 1,
      },
    }
  },
  methods: {
    fetchArticleSummaryData () {
      api.articleApi.pageArticleSummaryByCondition(this.page)
        .then((response) => {
          console.log(response.data)
          this.cards = response.data.records
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
