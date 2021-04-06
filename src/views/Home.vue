<template>
  <div class="home">
    <van-nav-bar :left-arrow="false">
      <template #right>
        <div>{{ timeTitle }}</div>
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
import Menu from "@/views/Menu";
import { inject } from "vue";

export default {
  name: "Home",
  components: { Menu },
  setup() {
    const timeTitle = inject("timeTitle");

    return { timeTitle };
  }
};
</script>

<style lang="less" scoped>

</style>
