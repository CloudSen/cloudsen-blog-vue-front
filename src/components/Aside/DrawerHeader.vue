<template>
  <v-img
    :aspect-ratio="16/9"
    gradient="to left bottom, rgba(100,115,201,.33), rgba(25,32,72,.5)"
    src="https://s2.ax1x.com/2019/07/28/elEjfS.png"
  >
    <v-layout
      class="lightbox white--text"
      column
      fill-height
      pa-2
    >
      <v-spacer></v-spacer>
      <v-flex shrink>
        <div class="subheading font-weight-bold">CloudS3n</div>
        <div class="body-1 font-weight-medium">与其苟延残喘，不如从容燃烧。</div>
      </v-flex>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  name: 'drawer-header',
}
</script>

<style>
</style>
