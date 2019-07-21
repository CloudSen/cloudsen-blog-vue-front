<template>
  <div class="container">
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
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import MarkdownText from '@/components/temp-data/testMarkDown'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'markDown',
  components: {
    MarkdownItVue,
  },
  data () {
    return {
      content: MarkdownText,
      options: {
        markdownIt: {
          linkify: true,
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
