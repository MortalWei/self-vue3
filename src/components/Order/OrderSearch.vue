<template>
  <div id="ordersearch">
    <Greetings title="正在查询您的订单,请稍候..."/>
    <van-loading color="#eoeoeo" size="256" />
  </div>
</template>

<script>
import Greetings from "@/components/Order/Greetings";
export default {
  name: "OrderSearch",
  components: { Greetings }
};
</script>

<style scoped lang="less">
#ordersearch {
  padding-top: 12.6%;
}
</style>