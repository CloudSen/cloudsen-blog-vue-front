<template>
  <fragment>
    <div>
      <v-img
        :aspect-ratio="16/9"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--6xZ4JmSD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/8bees1ilfgpdcqdr4m9j.jpg"
      ></v-img>
    </div>
    <v-alert
      class="mb-4"
      prominent
      type="warning"
      value="true"
    >当前日志已有300天未更新，可能与最新的内容有脱节！</v-alert>
    <div
      class="grey darken-4 grey--text text-lighten-4 markdown-body"
      v-html="renderContent"
    ></div>
  </fragment>
</template>

<script>
import ArticleDetail from '@/components/temp-data/article-detail'
import md from '@/plugins/markdown-it'
import '@/assets/css/markdown/md-dark.css'
import 'highlight.js/styles/xt256.css'

export default {
  name: 'article-detail-layout',
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
