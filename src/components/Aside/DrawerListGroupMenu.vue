<template>
  <fragment>
    <template v-for="group in groupList">
      <template v-if="group.type === 0 && group.hasChildren">
        <!-- 分组名 -->
        <v-subheader
          :class="subHeaderClass"
          :key="group.id"
        >{{ group.name }}</v-subheader>
        <!-- 读取当前分组下的菜单项 -->
        <!-- 读取普通菜单 -->
        <NormalMenu
          :key="`${group.id}-normal-menu`"
          :menuList="group.children"
        ></NormalMenu>
        <!-- 读取父级菜单 -->
        <ParentMenu
          :key="`${group.id}-parent-menu`"
          :menuList="group.children"
        ></ParentMenu>

        <!-- 分组分界线 -->
        <v-divider :key="`${group.id}-divider`"></v-divider>
      </template>
    </template>
  </fragment>
</template>

<script>
import NormalMenu from '@/components/Aside/DrawerListNormalMenu'
import ParentMenu from '@/components/Aside/DrawerListParentMenu'

export default {
  name: 'drawer-list-group-menu',
  props: {
    groupList: {
      type: Array,
      required: true,
    },
  },
  components: {
    NormalMenu,
    ParentMenu,
  },
  data: () => ({
    subHeaderClass: 'caption font-weight-light teal--text text-darken-3',
  }),
}
</script>

<style>
</style>
