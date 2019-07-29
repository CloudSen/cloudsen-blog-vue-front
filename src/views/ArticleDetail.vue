<template>
  <v-container
    class="grey darken-4 grey--text text-lighten-4"
    grid-list-xs
  >
    <ArticleDetailLayout></ArticleDetailLayout>
  </v-container>
</template>

<script>
import ArticleDetailLayout from '@/components/Main/Blog/ArticleDetailLayout'

export default {
  name: 'article-detail',
  components: { ArticleDetailLayout },
  mounted () {
    console.log(this.$route.params.id)
  },
}
</script>

<style>
</style>
