<!-- Created by mortal on 2021/3/31 -->
<template>
  <div>
    <img src="https://dummyimage.com/600x600" />
  </div>
</template>

<script>
import { inject } from "vue";
import { CHANGE_OPERATE_MSG } from "@/store/modules/operate";

export default {
  name: "FaceCompare",
  setup() {
    const storeChangeOperateMsg = inject(CHANGE_OPERATE_MSG);

    const changeOperateMsg = (msg) => {
      storeChangeOperateMsg(msg);
    };
    return { changeOperateMsg };
  },
  beforeCreate() {
    this.changeOperateMsg("请面对摄像头，进行人脸识别");
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "DealOver" });
    }, 5000);
  }
};
</script>

<style scoped>

</style>