<template>
  <fragment>
    <TopHeader></TopHeader>
    <MainContent></MainContent>
    <Drawer></Drawer>
    <GoTopButton></GoTopButton>
  </fragment>
</template>

<script>
import TopHeader from '@/components/Header/TopHeader'
import MainContent from '@/components/Main/MainContent'
import Drawer from '@/components/Aside/NavDrawer'
import GoTopButton from '@/components/Main/RightSideButton'

export default {
  name: 'home',
  components: {
    TopHeader,
    MainContent,
    Drawer,
    GoTopButton,
  },
}
</script>
