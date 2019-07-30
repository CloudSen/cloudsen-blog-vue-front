<template>
  <div>
    <ArticleList :cards="cards"></ArticleList>
    <PaginationBar :pageable="pageable"></PaginationBar>
  </div>
</template>

<script>
import ArticleList from '@/components/Main/Blog/ArticleList'
import ArticleSourceData from '@/components/temp-data/articles'
import PaginationBar from '@/components/Main/PaginationBar'

export default {
  name: 'articles',
  components: {
    ArticleList,
    PaginationBar,
  },
  data: () => ({
    cards: ArticleSourceData,
    pageable: {
      pageSize: 20,
      pageNumber: 2,
    },
  }),
}
</script>

<style>
</style>
