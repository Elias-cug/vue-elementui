<template>
  <div>
    <el-menu :default-active="2">
      <sidebarItem v-for="route in routes" :key="route.path" :item="route" />
    </el-menu>
  </div>
</template>

<script>
import routes from '@/router/moudle/index.js'
export default {
  name: 'SideBar',
  data () {
    return {
      routes: routes
    }
  },
  methods: {}
}
</script>

<style></style>
