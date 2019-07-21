<template>
  <fragment>
    <template v-for="(snack, index) in getAllSnackMessage">
      <v-snackbar
        :absolute="absoluteSnack"
        :bottom="snackY === 'bottom'"
        :color="snack.color"
        :key="snack.id"
        :left="snack.x === 'left'"
        :multi-line="isMultiLine"
        :right="snack.x === 'right'"
        :style="adjustSnackY(index)"
        :timeout="snack.color === 'success' ? snack.timeout : 0"
        :top="snackY === 'top'"
        style="z-index: 10;"
        v-model="snack.show"
      >
        {{ snack.message }}
        <v-btn
          @click="snack.show = false"
          flat
        >Shut Up</v-btn>
      </v-snackbar>
    </template>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'dynamic-snackbar',
  props: {
    snackList: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      snacks: this.snackList,
    }
  },
  computed: {
    isMultiLine () {
      return this.$vuetify.breakpoint.xsOnly
    },
    snackY () {
      return this.$vuetify.breakpoint.xsOnly ? 'bottom' : 'top'
    },
    absoluteSnack () {
      return !this.$vuetify.breakpoint.xsOnly
    },
    ...mapState(['getAllSnackMessage']),
  },
  methods: {
    adjustSnackY (snackIndex) {
      const cssStyle = {}
      if (this.snackList.length > 1) {
        cssStyle.marginTop = `${(snackIndex) * 60}px`
      }
      return cssStyle
    },
  },
}
</script>

<style>
</style>
