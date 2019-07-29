<template>
  <ArticleList :cards="cards"></ArticleList>
</template>

<script>
import ArticleList from '@/components/Main/Blog/ArticleList'
import ArticleSourceData from '@/components/temp-data/articles'

export default {
  name: 'articles',
  components: {
    ArticleList,
  },
  data: () => ({
    cards: ArticleSourceData,
  }),
}
</script>

<style>
</style>
