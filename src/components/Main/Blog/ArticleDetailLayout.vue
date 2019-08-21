<template>
  <fragment>
    <div>
      <v-img
        :aspect-ratio="16/9"
        :src="articleDetail.imgUrl"
      ></v-img>
    </div>
    <v-alert
      :value="articleDetail.deprecated"
      class="mb-4"
      prominent
      type="warning"
    >当前日志已有150天未更新，可能与最新的内容有脱节！</v-alert>
    <div
      class="grey darken-4 grey--text text-lighten-4 markdown-body"
      v-html="renderContent"
    ></div>
  </fragment>
</template>

<script>
import md from '@/plugins/markdown-it'
import '@/assets/css/markdown/md-dark.css'
import 'highlight.js/styles/xt256.css'

export default {
  name: 'article-detail-layout',
  props: {
    articleDetail: {
      type: Object,
      required: true,
    },
  },
  computed: {
    renderContent () {
      return md.render(this.articleDetail.content ? this.articleDetail.content : '')
    },
  },
}
</script>

<style>
</style>
