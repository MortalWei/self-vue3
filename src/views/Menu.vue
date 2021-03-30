<template>
  <div id="menu">
    <div class="menu-container">
      <van-button type="priority" class="margin-right-64" @click="checkIn">入 住</van-button>
      <van-button type="priority" @click="checkOut">退 房</van-button>
    </div>
  </div>
</template>

<script>
import { INIT_OPERATE } from "@/store/modules/operate";
import { inject } from "vue";

export default {
  name: "menu",
  setup() {
    const storeInitOperate = inject(INIT_OPERATE);

    const initOperate = (type, step, msg) => {
      storeInitOperate(type, step, msg);
    };

    return { initOperate };
  },
  methods: {
    checkIn() {
      this.initOperate(0, 1,"请将您的身份证件放在识别区域");
      this.$router.push({ name: "Index", params: { PROCESS_TYPE: 0 } });
    },
    checkOut() {
      this.initOperate(0, 1);
      this.$router.push({ name: "Index", params: { PROCESS_TYPE: 1 } });
    }
  }
};
</script>
