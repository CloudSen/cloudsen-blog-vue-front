<template>
  <fragment>
    <v-toolbar-items>
      <v-sheet
        class="pa-2 blue darken-3"
        flat
      >
        <v-form @submit="onSearch">
          <v-text-field
            @input="onSearchInput"
            clearable
            dark
            flat
            hide-details
            label="Search Article"
            solo-inverted
            v-model="searchText"
          ></v-text-field>
        </v-form>
      </v-sheet>
      <template v-for="item in items">
        <v-btn
          :key="item.id"
          :to="item.routerPath"
          class="hidden-sm-and-down"
          exact
          flat
        >
          <v-icon left>{{item.icon}}</v-icon>
          {{item.name}}
        </v-btn>
      </template>
    </v-toolbar-items>
  </fragment>
</template>

<script>
import toolbarItems from '@/components/temp-data/toolbar-items'

export default {
  name: 'toolbar-items',
  data () {
    return {
      items: toolbarItems.sort((a, b) => (a.order < b.order ? -1 : 1)),
      searchText: '',
    }
  },
  methods: {
    parseMenuTree (menus) {
      function fn (menuList, parentId) {
        const result = []
        const subMenu = {}
        menuList.forEach((menu) => {
          if (menu.parentId === parentId) {
            if (menu.type !== 3) {
              const temp = fn(menuList, menu.id)
              if (temp && temp.length > 0 && menu.type === 1) {
                subMenu.children = temp
              } else if (temp && temp.length > 0 && menu.type === 2) {
                subMenu.group = temp
              }
            }
            result.push(Object.assign({}, menu, subMenu))
          }
        })
        return result
      }
      return fn(menus, '0')
    },
    onSearchInput () {
      this.searchText = this.searchText.trim()
    },
    onSearch () {
      if (this.searchText) {
        this.$message(`Searching Article: ${this.searchText}`)
      }
    },
  },
}
</script>
