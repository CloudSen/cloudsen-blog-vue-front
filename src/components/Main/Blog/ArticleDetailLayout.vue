<template>
  <fragment>
    <div>
      <v-img
        :aspect-ratio="16/9"
        src="https://s1.ax1x.com/2018/12/20/FD6b60.png"
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
