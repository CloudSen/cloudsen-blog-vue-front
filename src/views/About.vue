<template>
  <v-container
    class="grey darken-4 grey--text text-lighten-4"
    grid-list-xs
  >
    <div
      class="grey darken-4 grey--text text-lighten-4 markdown-body"
      v-html="renderContent"
    ></div>
  </v-container>
</template>

<script>
import MarkdownText from '@/components/temp-data/testMarkDown'
import md from '@/plugins/markdown-it'
import '@/assets/css/markdown/md-dark.css'
import 'highlight.js/styles/xt256.css'

export default {
  components: {

  },
  data () {
    return {
      content: MarkdownText,
      options: {
        markdownIt: {
          linkify: true,
          html: true,
        },
        linkAttributes: {
          target: '_blank',
          rel: 'noopener',
        },
      },
    }
  },
  computed: {
    renderContent () {
      return md.render(MarkdownText)
    },
  },
}
</script>

<style>
</style>
