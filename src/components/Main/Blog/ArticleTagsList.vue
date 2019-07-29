<template>
  <fragment>
    <template v-for="tag in tags">
      <v-flex
        :key="tag.id"
        shrink
      >
        <v-btn :color="tag.color">
          <v-icon left>loyalty</v-icon>
          {{tag.name}}
        </v-btn>
      </v-flex>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'article-tags-list',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>
