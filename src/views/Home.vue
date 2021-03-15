<template>
  <div class="home">
    <van-nav-bar :left-arrow="false">
      <template #right>
        <div>{{ title }}</div>
      </template>
      <template #left>
        <div>{{ "新侨饭店新侨饭店，欢迎您" }}</div>
      </template>
    </van-nav-bar>
    <van-tabbar>
      <van-tabbar-item>本系统仅支持中国大陆二代身份证件办理业务</van-tabbar-item>
    </van-tabbar>
    <div class="self-work">
      <van-button type="success">入 住</van-button>
      <van-button type="success">退 房</van-button>
    </div>
  </div>
</template>

<script>
import increase from "@/plugins/increase";

export default {
  name: "Home",
  data() {
    return {
      title: "2021年3月15日 21:00:36 星期一"
    };
  },
  methods: {
    setSlogan() {
      this.title = increase.date();
    }
  },
  mounted() {
    console.log("home => mounted");
    this.sloganTimer = setInterval(() => {
      this.setSlogan();
    }, 1000);
  },
  beforeUnmount() {
    console.log("home => beforeUnmount");
    if (this.sloganTimer) {
      clearInterval(this.sloganTimer);
    }
  }
};
</script>

<style lang="less" scoped>
.self-work {
  //background-color: transparent;
  //background-color: #fff;

  padding: 16px 0;
  width: 100%;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 66%;
  transform: translate(-50%,-50%);

  .van-button {
    border-radius: 8px;
    //background-color: rgba(116, 39, 39, 0.8);
    background-color: rgba(255, 255, 255,0.8);
    border-color: #696969;
    border-width: 2px;
    color: #696969;
    //color: #fff;
    height: 60px;
    width: 240px;
    margin-left: 60px;
    font-size: 29.3px;
    font-weight: bold;
  }
}
</style>
