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
/* 添加Hack字体CDN */
@import "//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css";
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

/* 滚动条样式 */
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

body::-webkit-scrollbar {
  width: 10px;
  background-color: #000;
}

body::-webkit-scrollbar-thumb {
  background-color: #20c20e;
  border: 2px solid #20c20e;
}
</style>
