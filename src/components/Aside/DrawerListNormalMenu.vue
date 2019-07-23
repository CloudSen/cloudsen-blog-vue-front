<template>
  <fragment>
    <template v-for="menu in menuList">
      <v-list-tile
        :key="menu.id"
        :to="menu.routerPath"
        active-class="amber--text text-darken-2"
        exact
        v-if="menu.type === 2"
      >
        <v-list-tile-action>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ menu.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'drawer-list-normal-menu',
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>
