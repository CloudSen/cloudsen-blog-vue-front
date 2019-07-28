<template>
  <v-toolbar
    app
    class="blue darken-3"
    extended
  >
    <v-toolbar-side-icon @click.stop="triggerDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Cloudable</v-toolbar-title>
    <v-spacer></v-spacer>
    <ToolBarItems></ToolBarItems>
    <template v-slot:extension>
      <v-toolbar-title>
        <span
          :class="`font-weight-thin text-truncate hidden-xs-only ${headerTextClass}`"
        >{{motto.common}}</span>
        <span
          :class="`font-weight-thin text-truncate hidden-sm-and-up ${headerTextClass}`"
        >{{motto.mobile}}</span>
      </v-toolbar-title>
    </template>
  </v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'
import ToolBarItems from '@/components/Header/ToolBarItems'
import mottoData from '@/components/temp-data/header-motto'

export default {
  name: 'top-header',
  components: {
    ToolBarItems,
  },
  data () {
    return {
      motto: this.getRandomMotto(mottoData),
    }
  },
  computed: {
    headerTextClass () {
      return this.$vuetify.breakpoint.smAndDown ? 'subheading' : 'headline'
    },
  },
  methods: {
    ...mapMutations(['triggerDrawer']),
    getRandomMotto (tempList) {
      const common = tempList[Math.floor(Math.random() * tempList.length)].content
      const mobileList = tempList.filter(item => item.type === 1)
      const mobile = mobileList[Math.floor(Math.random() * mobileList.length)].content
      return { common, mobile }
    },
  },
}
</script>

<style>
</style>
