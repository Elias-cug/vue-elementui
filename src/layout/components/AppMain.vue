<template>
  <div class="app-main">
    <div v-if="!$route.meta.isOuter">
      <router-view></router-view>
    </div>

    <iframe
      v-else
      width="100%"
      height="100%"
      :src="$route.meta.outerPath"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
