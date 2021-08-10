<template>
  <div>
    <div class="header_box">
      <div class="header_left">
        <div class="logo_box">
          <div class="logo"></div>
        </div>
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

<style scoped>
.header_box,
header_box > div {
  width: 100%;
  display: flex;
  align-items: center;
}
.header_box {
  background: #2c3553;
  height: 48px;
  color: #fff;
  justify-content: space-between;
}
.header_box > div {
  justify-content: flex-start;
}
.header_box .logo_box {
  width: 160px;
  height: 48px;
  display: flex;
  justify-content: center;
}
.header_box .logo {
  width: 160px;
  height: 48px;
  margin: 5px;
  background: url('../../assets/img/tag.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.header_box .icon_box {
  margin-right: 8px;
}
.header_box .icon_box > span {
  color: #c1c1c1;
  display: inline-block;
  width: 48px;
  line-height: 48px;
  text-align: center;
  margin-right: 1px;
  cursor: pointer;
}
</style>
