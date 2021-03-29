<template>
  <!--  <div id="ordersearch" :style="{'display':show?'block':'none'}">-->
  <div id="ordersearch">
    <Greetings title="正在查询您的订单,请稍候..."/>
    <van-loading color="#eoeoeo" size="256" />
<!--    <div class="loading-title">正在查询您的订单,请稍候...</div>-->
  </div>
</template>

<script>
import Greetings from "@/components/Order/Greetings";
export default {
  name: "OrderSearch",
  components: { Greetings }

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