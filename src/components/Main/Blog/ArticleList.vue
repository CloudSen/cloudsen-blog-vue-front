<template>
  <v-container
    flat
    fluid
    grid-list-md
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        :key="card.id"
        lg4
        md6
        sm12
        v-for="card in cards"
        xl4
        xs12
      >
        <ArticleCards :card="card"></ArticleCards>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ArticleCards from '@/components/Main/Blog/ArticleCards'

export default {
  name: 'article-list',
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  components: { ArticleCards },
}
</script>

<style>
</style>
