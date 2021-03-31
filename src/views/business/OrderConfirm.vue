<!-- Created by mortal on 2021/3/31 -->
<!-- 支付完成后的订单确认页面，用于确认入住人数及留下联系方式 -->
<template>
  <div class="order-container-transparent">
    <ConfirmContent />
  </div>
</template>

<script>
import { inject } from "vue";
import { CHANGE_OPERATE_MSG } from "@/store/modules/operate";
import ConfirmContent from "@/components/Order/ConfirmContent";

export default {
  name: "OrderConfirm",
  components: { ConfirmContent },
  setup() {
    const storeChangeOperateMsg = inject(CHANGE_OPERATE_MSG);

    const changeOperateMsg = (msg) => {
      storeChangeOperateMsg(msg);
    };

    return { changeOperateMsg };
  },
  beforeCreate() {
    this.changeOperateMsg("请确认您的入住信息");
  }
};
</script>

<style scoped>

</style>