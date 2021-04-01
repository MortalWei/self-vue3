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
import { GETTER_CONFIG } from "@/store/modules/config";

export default {
  name: "IdCard",
  setup() {
    const storeChangeOperate = inject(CHANGE_OPERATE);
    const storeChangeOperateMsg = inject(CHANGE_OPERATE_MSG);
    const conf = inject(GETTER_CONFIG);

    const changeOperate = (step) => {
      storeChangeOperate(step);
    };

    const changeOperateMsg = (msg) => {
      storeChangeOperateMsg(msg);
    };

    console.log(conf);

    changeOperateMsg(conf.value.msgInfo.scanIdCard);

    return { changeOperate, changeOperateMsg };
  },
  mounted() {
    this.Timeout = setTimeout(() => {
      this.changeOperate(2);
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