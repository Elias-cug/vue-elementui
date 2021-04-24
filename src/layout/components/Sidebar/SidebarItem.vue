<template>
  <div>
    <!-- 如果没有子路由 -->
    <el-menu-item v-if="!hasChild(item) && item.meta" :index="item.path">
      {{ item.meta.title }}
    </el-menu-item>

    <!-- 如果有子路由 -->
    <el-submenu v-if="hasChild(item)" :index="item.path">
      <template slot="title">{{ item.meta.title }}</template>
      <sidebar-item
        v-for="route in item.children"
        :key="route.path"
        :item="route"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  data () {
    return {}
  },
  methods: {
    hasChild (item) {
      if ('children' in item) {
        return true
      }
      return false
    }
  }
}
</script>

<style></style>
