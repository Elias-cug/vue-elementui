<template>
  <div class="child">
    我是child
  </div>
</template>

<script>
export default {
  name: 'TheChild',
  components: {},
  props: {
    fromName: {
      type: String,
      require: true
    }
  },
  mounted () {
    console.log('this is TheChild mounted')
    console.log(this)
  }
}
</script>

<style></style>
