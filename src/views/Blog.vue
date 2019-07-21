<template>
  <fragment>
    <v-btn
      @click="addSnack('info', message)"
      flat
    >添加普通snack</v-btn>
    <v-btn
      @click="addSnack('success', message)"
      flat
    >添加成功snack</v-btn>
    <v-btn
      @click="addSnack('warning', message)"
      flat
    >添加警告snack</v-btn>
    <v-btn
      @click="addSnack('error', message)"
      flat
    >添加重大错误snack</v-btn>
  </fragment>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'blog',
  components: {

  },
  data: () => ({
    message: '测试信息',
  }),
  methods: {
    ...mapMutations(['addSnackMessage']),
    addSnack (snackType, messageContent) {
      const uuid = Math.random().toString(36).substring(2) + Date.now().toString(36)
      const data = {
        id: uuid,
        show: true,
        timeout: 0,
        message: messageContent,
        color: snackType,
      }
      this.addSnackMessage(data)
    },
  },
}
</script>

<style>
</style>
