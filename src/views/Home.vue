<template>
  <fragment>
    <TopHeader></TopHeader>
    <MainContent></MainContent>
    <Drawer></Drawer>
  </fragment>
</template>

<script>
import TopHeader from '@/components/Header/TopHeader'
import MainContent from '@/components/Main/MainContent'
import Drawer from '@/components/Aside/NavDrawer'

export default {
  name: 'home',
  components: {
    TopHeader,
    MainContent,
    Drawer,
  },
}
</script>
