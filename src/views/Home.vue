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
    <Menu />
  </div>
</template>

<script>
import increase from "@/plugins/increase";
import Menu from "@/views/Menu";

export default {
  name: "Home",
  components: { Menu },
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

</style>
