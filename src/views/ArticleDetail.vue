<template>
  <v-container
    class="grey darken-4 grey--text text-lighten-4"
    grid-list-xs
  >
    <ArticleDetailLayout :articleDetail="articleDetail"></ArticleDetailLayout>
  </v-container>
</template>

<script>
import ArticleDetailLayout from '@/components/Main/Blog/ArticleDetailLayout'
import api from '@/api/api'

export default {
  name: 'article-detail',
  data: () => ({
    articleDetail: {},
  }),
  components: { ArticleDetailLayout },
  methods: {
    fetchArticleDetail () {
      api.articleApi.findArticleDetailById(this.$route.params.uuid)
        .then((response) => {
          const { data } = response
          this.articleDetail = data
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  mounted () {
    this.fetchArticleDetail()
  },
}
</script>

<style>
</style>
