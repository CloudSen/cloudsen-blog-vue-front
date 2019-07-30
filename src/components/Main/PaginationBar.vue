<template>
  <v-container
    flat
    fluid
    grid-list-xs
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex shrink>
        <v-pagination
          :length="pageable.pageSize"
          @input="onPageChange"
          @next="onNext"
          @previous="onPrevious"
          circle
          total-visible="5"
          v-model="pageable.pageNumber"
        ></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'paginationBar',
  props: {
    pageable: {
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
