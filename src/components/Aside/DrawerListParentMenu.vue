<template>
  <fragment>
    <template v-for="menu in menuList">
      <v-list-group
        :key="menu.id"
        :prepend-icon="menu.icon"
        :sub-group="isSubGroup"
        active-class="amber--text text-darken-2"
        lazy
        v-if="menu.type ===1 && menu.hasChildren"
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ menu.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <!-- 读取父级菜单的子项 -->
        <!-- 读取父级菜单的普通菜单 -->
        <NormalMenu
          :key="`${menu.id}-parent-submenu`"
          :menuList="menu.children"
        ></NormalMenu>
        <!-- 读取父级菜单的子父级菜单 -->
        <drawer-list-parent-menu
          :isSubGroup="true"
          :key="`${menu.id}-subparent-menu`"
          :menuList="menu.children"
        ></drawer-list-parent-menu>
      </v-list-group>
    </template>
  </fragment>
</template>

<script>
import NormalMenu from '@/components/Aside/DrawerListNormalMenu'

export default {
  name: 'drawer-list-parent-menu',
  props: {
    menuList: {
      type: Array,
      required: true,
    },
    isSubGroup: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    NormalMenu,
  },
}
</script>

<style>
</style>
