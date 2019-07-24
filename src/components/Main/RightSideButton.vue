<template>
  <v-fab-transition>
    <v-btn
      @click.stop="scrollToTop"
      bottom
      color="blue darken-3"
      dark
      fab
      fixed
      right
      ripple
      small
      transition="slide-x-reverse-transition"
      v-scroll="onScroll"
      v-show="showButton"
    >
      <v-icon dark>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'right-side-btn',
  data: () => ({
    showButton: false,
  }),
  methods: {
    scrollToTop () {
      this.$vuetify.goTo(0)
    },
    onScroll (e) {
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.showButton = top > 100
    },
  },
}
</script>

<style scoped>
</style>
