<template>
  <v-toolbar
    app
    class="blue darken-3"
    extended
  >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Cloudable</v-toolbar-title>
    <v-spacer></v-spacer>
    <ToolBarItems></ToolBarItems>
    <template v-slot:extension>
      <v-toolbar-title>
        <span
          class="font-weight-thin text-truncate subheading hidden-xs-only"
        >「 青，取之于蓝，而青于蓝；冰，水为之，而寒于水。」</span>
        <span
          class="font-weight-thin text-truncate subheading hidden-sm-and-up"
        >「 一日无二晨，时过不再临。 」</span>
      </v-toolbar-title>
    </template>
  </v-toolbar>
</template>

<script>
import ToolBarItems from '@/components/Header/ToolBarItems'

export default {
  name: 'top-header',
  components: {
    ToolBarItems,
  },
  data () {
    return {
    }
  },
}
</script>

<style>
</style>
