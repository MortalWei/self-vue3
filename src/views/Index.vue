<template>
  <div id="index">
    <router-view></router-view>
    <van-tabbar>
      <van-tabbar-item>依据<span :style="{'color':'#a57e54'}">《旅客治安管理条例》</span>的要求，住宿宾客"必须实名登记，一人一证"</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { GETTER_OPERATE, CHANGE_OPERATE } from "@/store/modules/operate";
import { inject } from "vue";

export default {
  name: "Index",
  setup() {
    const operate = inject(GETTER_OPERATE);

    const storeChangeOperate = inject(CHANGE_OPERATE);

    const changeOperate = (step) => {
      storeChangeOperate(step);
    };

    return { operate, changeOperate };
  },
  data() {
    return {
      show: true,
      title: "请将预订人的身份证件放在识别区域",
      overlayClass: "overlay-container overlay-container-gray",
      classes: ["overlay-container overlay-container-default", "overlay-container overlay-container-gray"]
    };
  },
  props: {
    PROCESS_TYPE: {
      type: Number,
      default: -1
    }
  },
  mounted() {
    this.navTo();
    console.log("this.operate.type");
    console.log(this.operate.type);
    console.log("this.operate.step");
    console.log(this.operate.step);
  },
  methods: {
    navTo() {
      console.log("PROCESS_TYPE=>" + this.PROCESS_TYPE);
      switch (this.PROCESS_TYPE) {
        case "0":
          console.log("switch=>0");
          break;
        case "1":
          console.log("switch=>1");
          break;
      }
      if (this.PROCESS_TYPE == 0) {
        console.log("this.$router.push({ name: 入住 });");
        this.$router.push({ name: "IdCard" });
      } else if (this.PROCESS_TYPE == 1) {
        console.log("this.$router.push({ name: 退房 });");
        this.$router.push({ name: "Home" });
      } else {
        console.log("this.$router.push({ name: 未知 });");
        this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>
