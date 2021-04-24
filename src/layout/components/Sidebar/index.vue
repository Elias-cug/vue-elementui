<template>
  <div class="sidebar">
    <el-menu
      class="menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" />
    </el-menu>
  </div>
</template>

<script>
import routes from '@/router/moudle/index.js'
import SidebarItem from './SidebarItem'
export default {
  name: 'SideBar',
  components: { SidebarItem },
  data () {
    return {
      routes: routes
    }
  },
  methods: {
    judgeIsHasChild () {}
  }
}
</script>

<style></style>
