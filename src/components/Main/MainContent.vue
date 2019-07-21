<template>
  <v-content px-5>
    <DynamicSnackBar></DynamicSnackBar>
    <router-view></router-view>
  </v-content>
</template>

<script>
import DynamicSnackBar from '@/components/Main/DynamicSnackBar'

export default {
  name: 'main-content',
  components: {
    DynamicSnackBar,
  },
  data: () => ({

  }),
}
</script>

<style>
</style>
