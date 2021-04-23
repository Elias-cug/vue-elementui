<template>
  <div>
    <!-- 侧边栏 -->
    <sidebar />

    <!-- 内容区 -->
    <app-main />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain
  }
}
</script>

<style></style>
