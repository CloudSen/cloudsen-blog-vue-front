<template>
  <fragment>
    <TopHeader></TopHeader>
    <MainContent></MainContent>
  </fragment>
</template>

<script>
import TopHeader from '@/components/Header/TopHeader'
import MainContent from '@/components/Main/MainContent'

export default {
  name: 'home',
  components: {
    TopHeader,
    MainContent,
  },
}
</script>
