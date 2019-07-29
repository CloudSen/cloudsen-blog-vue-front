<template>
  <v-container
    class="grey darken-4 grey--text text-lighten-4"
    grid-list-xs
  >
    <v-img
      :aspect-ratio="16/9"
      height="500px"
      src="https://s1.ax1x.com/2018/12/20/FD6b60.png"
    ></v-img>
    <div
      class="grey darken-4 grey--text text-lighten-4 markdown-body"
      v-html="renderContent"
    ></div>
  </v-container>
</template>

<script>
import ArticleDetail from '@/components/temp-data/article-detail'
import md from '@/plugins/markdown-it'
import '@/assets/css/markdown/md-dark.css'
import 'highlight.js/styles/xt256.css'

export default {
  name: 'article-detail',
  data () {
    return {
      content: ArticleDetail,
    }
  },
  computed: {
    renderContent () {
      return md.render(ArticleDetail)
    },
  },
}
</script>

<style>
</style>
