<template>
  <div class="parent">
    我是parent
    <the-child :from-name="name"></the-child>
  </div>
</template>

<script>
import TheChild from './TheChild.vue'
export default {
  name: 'TheParent',
  components: { TheChild },
  props: {
    fromName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      name: 'TheParent'
    }
  },
  mounted () {
    console.log('this is TheParent mounted')
    console.log(this)
  }
}
</script>

<style></style>
