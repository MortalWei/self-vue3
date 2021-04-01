<!-- Created by mortal on 2021/3/29 -->
<template>
  <div class="confirm-content">
    <div class="order-title">湖景大床房</div>
    <!--    <van-divider dashed />-->
    <van-cell-group>
      <van-field label="入住人" model-value="王伟" readonly />
      <van-field label="入住日期" model-value="2021年3月26日" readonly />
      <van-field label="离店日期" model-value="2021年3月26日" readonly />
      <van-field label="房晚" model-value="1间1晚" readonly />
      <van-field label="房间号" model-value="8618" readonly>
        <template #button>
          <van-tag type="success" size="large">VC</van-tag>
        </template>
      </van-field>
      <van-field label="房费" model-value="1558" readonly />
      <van-field label="待支付" model-value="1558" readonly />
    </van-cell-group>
    <!--    <van-divider dashed />-->
    <div class="order-btn-group">
      <div class="order-btn">
        <van-button type="general">返回</van-button>
      </div>
      <div class="order-btn">
        <van-button type="confirm" @click="pay">确认订单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderContent",
  methods: {
    pay() {
      this.$router.push({ name: "Payment" });
    }
  }
};
</script>

<style scoped>

</style>