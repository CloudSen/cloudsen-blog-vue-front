<template>
  <div
    :key="data.id"
    :style="data.style"
    v-if="data.type === 1"
  >
    <template v-if="data.content">
      <v-container
        dark
        fill-height
        fluids
        text-xs-center
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex xs12>
            <span class="title font-weight-black font-italic">{{data.content}}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </div>
</template>

<script>
export default {
  name: 'transitionDiv',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>
