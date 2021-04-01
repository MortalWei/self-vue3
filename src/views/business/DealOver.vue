<!-- Created by mortal on 2021/4/1 -->
<!-- 业务办理成功后提示 -->
<template>
  <div class="order-container-transparent">
    <div class="order-content">
      <div class="over-title">您的房间号码：8618</div>
      <div class="over-subtitle">欢迎入住杭州新侨酒店</div>
    </div>
    <van-button type="confirm" class="right-angle margin-top-6">预留同住人</van-button>
  </div>
</template>

<script>
import { inject } from "vue";
import { CHANGE_OPERATE_MSG } from "@/store/modules/operate";

export default {
  name: "DealOver",
  setup() {
    const storeChangeOperateMsg = inject(CHANGE_OPERATE_MSG);

    const changeMsg = (msg) => {
      storeChangeOperateMsg(msg);
    };

    return { changeMsg };
  },
  beforeCreate() {
    this.changeMsg("办理成功！请拿好您的房卡 祝您乐无限，尽享美刻");
  }
};
</script>

<style scoped>

</style>