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
          circle
          total-visible="5"
          v-model="page.current"
        ></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import api from '@/api/api'

export default {
  name: 'paginationBar',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState([
      'articleListPage',
    ]),
  },
  methods: {
    ...mapMutations([
      'updateArticleListCards',
    ]),
    onPageChange () {
      this.fetchArticleSummaryData()
    },
    fetchArticleSummaryData () {
      api.articleApi.pageArticleSummaryByCondition(this.articleListPage)
        .then((response) => {
          const { data } = response
          this.updateArticleListCards(data.records)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>

<style>
</style>
