<template>
  <div>
    <el-menu-item index="2">
      <span></span>
    </el-menu-item>
    <el-submenu index="1"> </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    route: {
      type: Object,
      require: true
    }
  }
}
</script>

<style></style>
