<template>
  <fragment>
    <v-hover>
      <v-card
        :class="`elevation-${hover ? 24 : 2}`"
        :to="`/cloudable/blog/articles/${card.id}`"
        class="grey--text"
        exact
        slot-scope="{ hover }"
      >
        <v-img
          :aspect-ratio="16/9"
          :src="card.img_url_md"
        ></v-img>
        <v-card-title>
          <div>
            <span class="white--text title">{{card.title}}</span>
          </div>
        </v-card-title>
        <v-card-text>{{card.summary}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-container
            flat
            fluid
            grid-list-xs
            pa-0
          >
            <v-layout
              justify-end
              row
              wrap
            >
              <ArticleTagsList :tags="card.tags"></ArticleTagsList>
            </v-layout>
            <v-layout
              justify-end
              row
              wrap
            >
              <v-flex
                hidden-xs-only
                shrink
              >
                <v-btn
                  class="grey--text"
                  flat
                >
                  <v-icon left>access_time</v-icon>
                  {{card.updateTime}}
                </v-btn>
              </v-flex>
              <v-flex shrink>
                <v-btn
                  class="grey--text"
                  flat
                >
                  <v-icon left>comment</v-icon>
                  {{card.commentCount}}
                </v-btn>
              </v-flex>
              <v-flex shrink>
                <v-btn
                  class="grey--text"
                  flat
                >
                  <v-icon left>visibility</v-icon>
                  {{card.readCount}}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-hover>
  </fragment>
</template>

<script>
import ArticleTagsList from '@/components/Main/Blog/ArticleTagsList'

export default {
  name: 'article-cards',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  components: { ArticleTagsList },
}
</script>

<style>
</style>
