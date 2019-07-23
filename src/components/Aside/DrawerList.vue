<template>
  <fragment>
    <v-list
      class="grey--text text-lighten-5"
      subheader
    >
      <!-- 根据分组读取菜单 -->
      <GroupMenu :groupList="groupList"></GroupMenu>
    </v-list>
  </fragment>
</template>

<script>
import GroupMenu from '@/components/Aside/DrawerListGroupMenu'

export default {
  name: 'drawer-list',
  props: {
    groupList: {
      type: Array,
      required: true,
    },
  },
  components: {
    GroupMenu,
  },
}
</script>

<style>
</style>
