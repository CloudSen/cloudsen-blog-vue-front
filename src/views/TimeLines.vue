<template>
  <v-container
    grid-list-xs
    pb-0
    pt-0
  >
    <TimeLines></TimeLines>
  </v-container>
</template>

<script>
import TimeLines from '@/components/Main/TimeLines/TimeLines'

export default {
  name: 'timelines-view',
  components: { TimeLines },
  data: () => ({}),
}
</script>

<style>
</style>
