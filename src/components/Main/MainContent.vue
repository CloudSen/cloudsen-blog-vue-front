<template>
  <v-content px-5>
    <DynamicSnackBar :snackList="snackList"></DynamicSnackBar>
    <router-view></router-view>
    <v-btn
      @click="addSnack('normal')"
      flat
    >添加普通snack</v-btn>
    <v-btn
      @click="addSnack('important')"
      flat
    >添加不可忽略snack</v-btn>
  </v-content>
</template>

<script>
import DynamicSnackBar from '@/components/Main/DynamicSnackBar'

export default {
  name: 'main-content',
  components: {
    DynamicSnackBar,
  },
  data () {
    return {
      snackList: [
      ],
      alert: {
        show: false,
        type: 'success',
        message: 'testing alert',
        transition: 'slide-x-reverse-transition',
      },
    }
  },
  methods: {
    addSnack (snackType) {
      const uuid = Math.random().toString(36).substring(2) + Date.now().toString(36)
      if (snackType === 'normal') {
        this.addPreCheck({
          id: uuid,
          show: true,
          timeout: 0,
          message: `${uuid} snack`,
          color: 'success',
          x: 'right',
        })
      } else {
        this.addPreCheck({
          id: uuid,
          show: true,
          timeout: 0,
          message: `${uuid} error`,
          color: 'error',
          x: 'right',
        })
      }
    },
    addPreCheck (data) {
      console.log('Adding snack...')
      if (this.snackList.length >= 5) {
        const needRemove = this.snackList
          .filter(snack => snack.color === 'success' || snack.color === 'info')
          .pop()
        if (needRemove) {
          this.snackList.splice(this.snackList.indexOf(needRemove), 1)
        } else {
          console.error('snackbar消息已满！')
          return
        }
      }
      this.doAdd(data)
    },
    doAdd (data) {
      this.snackList.unshift(data)
      console.log(JSON.stringify(this.snackList))
    },
  },
}
</script>

<style>
</style>
