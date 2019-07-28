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
import AboutMe from '@/components/temp-data/about-me'
import md from '@/plugins/markdown-it'
import '@/assets/css/markdown/md-dark.css'
import 'highlight.js/styles/xt256.css'

export default {
  name: 'about',
  data () {
    return {
      content: AboutMe,
    }
  },
  computed: {
    renderContent () {
      return md.render(AboutMe)
    },
  },
}
</script>

<style>
</style>
