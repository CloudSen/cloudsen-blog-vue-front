<template>
  <fragment>
    <ArticleList :cards="cards"></ArticleList>
  </fragment>
</template>

<script>
import ArticleList from '@/components/Main/Blog/ArticleList'
import ArticleSourceData from '@/components/temp-data/articles'

export default {
  name: 'blog',
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
