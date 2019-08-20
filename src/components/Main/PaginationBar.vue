<template>
  <v-container
    flat
    fluid
    grid-list-xs
    v-if="page.pages > 1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex shrink>
        <v-pagination
          :length="page.pages"
          @input="onPageChange"
          @next="onNext"
          @previous="onPrevious"
          circle
          total-visible="5"
          v-model="page.current"
        ></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'paginationBar',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onNext () {},
    onPrevious () {},
    onPageChange () {},
  },
}
</script>

<style>
</style>
