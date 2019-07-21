<template>
  <fragment>
    <template v-for="snack in getAllSnackMessageWithStyle">
      <v-snackbar
        :color="snack.color"
        :key="snack.id"
        :multi-line="isMultiLine"
        :style="snack.cssStyle"
        :timeout="snack.color === 'error' ? 0 : snack.timeout"
        bottom
        style="z-index: 10;"
        v-model="snack.show"
      >
        {{ snack.message }}
        <v-btn
          @click="onClose(snack.id)"
          flat
        >Shut Up</v-btn>
      </v-snackbar>
    </template>
  </fragment>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'dynamic-snackbar',
  data: () => ({

  }),
  computed: {
    isMultiLine () {
      return this.$vuetify.breakpoint.xsOnly
    },
    ...mapGetters(['getAllSnackMessageWithStyle', 'getMessageById']),
  },
  methods: {
    ...mapMutations(['deleteSnackMessage', 'hideSnackById']),
    onClose (id) {
      this.deleteSnackMessage({ id })
    },
  },
}
</script>

<style>
</style>
