<template>
  <!--  <div id="ordersearch" :style="{'display':show?'block':'none'}">-->
  <div id="ordersearch">
    <van-loading color="#eoeoeo" size="256" />
    <div class="loading-title">正在查询您的订单,请稍候...</div>
  </div>
</template>

<script>
export default {
  name: "OrderSearch"
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: true
  //   }
  // }
};
</script>

<style scoped lang="less">
#ordersearch {
  padding-top: 12.6%;
}
</style>