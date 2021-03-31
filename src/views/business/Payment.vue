<!-- Created by mortal on 2021/3/31 -->
<template>
  <div class="payment">
    <div class="payment-title">房间：8618 价格：998</div>
    <img src="https://dummyimage.com/450x450" />
    <div>
      <van-button type="payment">微信</van-button>
      <van-button plain type="payment" @click="navTo">支付宝</van-button>
    </div>
  </div>
</template>

<script>
import { CHANGE_OPERATE_MSG } from "@/store/modules/operate";
import { inject } from "vue";

export default {
  name: "Payment",
  setup() {
    const storeChangeOperateMsg = inject(CHANGE_OPERATE_MSG);

    const changeOperateMsg = (msg) => {
      storeChangeOperateMsg(msg);
    };

    return { changeOperateMsg };
  },
  beforeCreate() {
    this.changeOperateMsg("请扫码支付 待支付总价：¥598");
  },
  methods: {
    navTo() {
      this.$router.push({ name: "OrderConfirm" });
    }
  }
};
</script>

<style scoped>

</style>