<template>
  <v-container
    class="grey lighten-4 black--text"
    grid-list-xs
    my-2
  >
    <textarea
      class="md-text"
      rows="10"
      v-model="content"
    />
    <markdown-it-vue
      :content="content"
      :options="options"
      class="md-body"
    />
  </v-container>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import MarkdownText from '@/components/temp-data/testMarkDown'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  components: {
    MarkdownItVue,
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
}
</script>

<style>
</style>
