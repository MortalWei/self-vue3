<template>
  <div id="multiorder" class="order-container-transparent">
    <van-collapse v-model="activeName" accordion class="order-multi">
      <van-collapse-item title="订单01 2间房 总价：1890" name="1">
        <OrderContent/>
      </van-collapse-item>
      <van-collapse-item title="订单02 1间房 总价：980" name="2">
        <OrderContent/>
        <OrderContent/>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
// import SingleOrder from "@/components/Order/SingleOrder";
import OrderContent from "@/components/Order/OrderContent";

export default {
  name: "MultiOrder",
  components: { OrderContent },
  data() {
    return {
      activeName: "1"
    };
  }
};
</script>

<style scoped lang="less">
#multiorder {
  .van-cell {
    font-size: 35px;
  }
}
</style>