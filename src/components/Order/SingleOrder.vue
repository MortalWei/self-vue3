<template>
  <div id="singleorder">
    <h1>湖景大床房</h1>
    <van-divider dashed />
    <van-cell-group>
      <van-cell title="入住人" value="沈先生" />
      <van-cell title="入住日期" value="2021年3月26日" />
      <van-cell title="离店日期" value="2021年3月26日" />
      <van-cell title="天数" value="1天" />
      <van-cell>
        <template #title>
          <span>房间号</span>
        </template>
        <template #default>
          <span :style="{'margin-right':'6px'}">8618</span>
          <van-tag type="success">VC</van-tag>
        </template>
      </van-cell>
      <van-cell title="总价">
        <template #default>
          <van-tag type="primary" plain>¥1559</van-tag>
        </template>
      </van-cell>
      <van-cell title="待支付">
        <template #default>
          <!--                  <van-tag type="success">已支付</van-tag>-->
          <van-tag type="primary">¥1559</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <van-divider dashed />
    <div class="order-btn-group">
      <div class="order-btn">
        <van-button type="general">返回</van-button>
      </div>
      <div class="order-btn">
        <van-button type="confirm">确认订单</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleOrder"
};
</script>

<style scoped>

</style>