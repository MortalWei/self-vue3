<template>
  <div id="idcard">
    <div class="title-image">
      <img src="../../assets/11.png" />
    </div>
  </div>
</template>

<script>
import { CHANGE_OPERATE, CHANGE_OPERATE_MSG } from "@/store/modules/operate";
import { inject } from "vue";

export default {
  name: "IdCard",
  setup() {
    const storeChangeOperate = inject(CHANGE_OPERATE);
    const storeChangeOperateMsg = inject(CHANGE_OPERATE_MSG);

    const changeOperate = (step) => {
      storeChangeOperate(step);
    };

    const changeOperateMsg = (msg) => {
      storeChangeOperateMsg(msg);
    };

    return { changeOperate, changeOperateMsg };
  },
  mounted() {
    this.Timeout = setTimeout(() => {
      this.changeOperate(2);
      this.changeOperateMsg("正在查询您的订单，请稍后");
      this.$router.push({ name: "Order" });
    }, 3 * 100);
  },
  beforeUnmount() {
    if (this.Timeout) {
      clearTimeout(this.Timeout);
    }
  }
};
</script>

<style scoped>

</style>