<template>
  <div>
    <div class="header_box">
      <div class="header_left">
        <div class="logo"></div>
      </div>
      <div>
        <div class="icon_box">
          <span class="long"> {{ '官网' }}</span>
          <span class="long">{{ '费用' }}</span>
          <span class="long">{{ 'App' }}</span>
          <span class="icon"><span class="icon-vhead_help"></span></span>
          <span class="icon"><span class="icon-vhead_code"></span></span>
          <span class="icon">
            <span :class="'icon-vhead_cn'" />
          </span>
        </div>
        <div class="user">
          <div class="pic"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BonreePublicHeader',
  data () {
    return {
      showProducts: false,
      secCodeArr: []
    }
  },
  methods: {}
}
</script>
