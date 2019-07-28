<template>
  <div
    :key="data.id"
    :style="data.isMobile ? data.mobileStyle : data.style"
    v-if="data.type === 0"
  >
    <template v-if="data.content">
      <v-container
        dark
        fill-height
        fluids
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex xs12>
            <span class="title font-weight-medium">{{data.content}}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </div>
</template>

<script>
export default {
  name: 'parallaxyDiv',
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
