<template>
  <fragment>
    <div v-resize="onResize"></div>
    <template v-for="data in dataList">
      <ParallaxyDiv
        :data="data"
        :key="`${data.id}-parallaxy`"
      ></ParallaxyDiv>
      <TransitionDiv
        :data="data"
        :key="`${data.id}-transition`"
      ></TransitionDiv>
    </template>
  </fragment>
</template>

<script>
import ParallaxyDiv from '@/components/Cloudable/ParallaxyDiv'
import TransitionDiv from '@/components/Cloudable/TransitionDiv'
import tempData from '@/components/temp-data/cloudable-data'

export default {
  name: 'cloudable',
  components: {
    ParallaxyDiv,
    TransitionDiv,
  },
  data () {
    return {
      isMobile: false,
      dataList: this.sortedDataList(tempData),
    }
  },
  methods: {
    onResize () {
      console.log(`isMobile: ${this.isMobile}`)
      if (this.$vuetify.breakpoint.xsOnly) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    sortedDataList (tempDataList) {
      return tempDataList.sort((a, b) => (a.order < b.order ? -1 : 1))
    },
  },
  watch: {
    isMobile (val) {
      console.log(`isMobile: ${val}`)
      this.dataList.forEach((data) => {
        Object.assign(data, { isMobile: val })
      })
      console.log(JSON.stringify(this.dataList))
    },
  },
}
</script>

<style scoped>
</style>
