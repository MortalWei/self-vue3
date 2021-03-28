<template>
  <div id="index">
    <router-view></router-view>
    <van-tabbar>
      <van-tabbar-item>依据<span :style="{'color':'#a57e54'}">《旅客治安管理条例》</span>的要求，住宿宾客"必须实名登记，一人一证"</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      show: true,
      title: "请将预订人的身份证件放在识别区域"
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
  },
  methods: {
    onClickRight() {
      this.$router.push({ name: "Home" });
    },
    onClickLeft() {
      let count = this.$route.matched.length;
      if (count == 2) {
        this.$router.push({ name: "Home" });
      } else {
        this.$router.back(-1);
      }
    },
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
