<template>
  <v-timeline>
    <LineItem :itemList="itemData"></LineItem>
  </v-timeline>
</template>

<script>
import LineItem from '@/components/Main/TimeLines/LineItem'
import LineItemData from '@/components/temp-data/time-line'

export default {
  name: 'timelines',
  components: {
    LineItem,
  },
  data: () => ({
    itemData: LineItemData,
  }),
}
</script>

<style>
</style>
