<template>
  <div class="grand">
    我是爷爷
    <the-parent :from-name="name"></the-parent>
  </div>
</template>

<script>
import TheParent from './TheParent.vue'
export default {
  name: 'TestVueDemo',
  components: {
    TheParent
  },
  data () {
    return {
      name: 'TestVueDemo'
    }
  },
  watch: {
    name () {
      console.log('name 改变了')
    }
  },
  mounted () {
    console.log('this is index mounted')
    console.log(this)
  }
}
</script>

<style></style>
