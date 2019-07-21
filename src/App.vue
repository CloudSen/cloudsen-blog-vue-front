<template>
  <v-app dark>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.003/web/fonts/hack-bold-subset.woff";
* {
  padding: 0;
  margin: 0;
  font: 14px/1.5 Arial, "\5b8b\4f53", "Microsoft Yahei", "Hiragino Sans GB",
    "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}

html {
  overflow-y: auto;
}

code {
  font: 14px/1.5 Hack, Consolas, Monaco, Menlo;
}

nav {
  z-index: 999 !important;
}
</style>
