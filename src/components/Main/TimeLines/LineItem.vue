<template>
  <fragment>
    <v-timeline-item
      :color="item.color"
      :key="item.id"
      large
      v-for="item in itemList"
    >
      <template v-slot:opposite>
        <span>{{item.opposite}}</span>
      </template>
      <v-card
        :color="item.color"
        class="elevation-2"
      >
        <v-card-title class="headline">{{item.title}}</v-card-title>
        <v-card-text>{{item.content}}</v-card-text>
      </v-card>
    </v-timeline-item>
  </fragment>
</template>

<script>
export default {
  name: 'line-item',
  props: {
    itemList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>
