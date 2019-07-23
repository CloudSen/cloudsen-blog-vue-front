<template>
  <v-navigation-drawer
    app
    floating
    temporary
    v-model="showDrawer"
    width="250"
  >
    <DrawerHeader></DrawerHeader>
    <DrawerList :groupList="parseMenuSourceToGroupList"></DrawerList>
  </v-navigation-drawer>
</template>

<script>
import DrawerList from '@/components/Aside/DrawerList'
import DrawerHeader from '@/components/Aside/DrawerHeader'
import menuSourceData from '@/components/temp-data/drawer-menu-list'

export default {
  name: 'drawer',
  components: {
    DrawerHeader,
    DrawerList,
  },
  data: () => ({
    menuSource: menuSourceData,
  }),
  computed: {
    showDrawer: {
      get () {
        return this.$store.state.showDrawer
      },
      set (value) {
        this.$store.commit('setDrawer', value)
      },
    },
    parseMenuSourceToGroupList () {
      function parse (list, parentId) {
        const menuGroupList = []
        list.forEach((menu) => {
          if (menu.parentId === parentId) {
            // 非普通菜单需要读取子项
            if (menu.type !== 2) {
              const subMenu = parse(list, menu.id)
              if (subMenu && subMenu.length > 0) {
                Object.assign(menu, { children: subMenu, hasChildren: true })
              }
            }
            menuGroupList.push(menu)
          }
        })
        return menuGroupList
      }
      const groupList = parse(this.menuSource, '-1')
      return groupList
    },
  },
}
</script>

<style>
</style>
