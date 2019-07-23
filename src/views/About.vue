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
  </v-container>
</template>

<script>
import MarkdownText from '@/components/temp-data/testMarkDown'

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
}
</script>

<style>
</style>
