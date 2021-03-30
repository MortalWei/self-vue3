<template>
  <router-view />
</template>

<script>
import store from "./store";
import _ from "lodash";
import { provide, ref } from "vue";
import increase from "@/plugins/increase";

export default {
  name: "app",
  setup() {
    _.forEach(store, (item, index) => {
      console.log({ index: index, item: item });
      provide(index, item);
    });

    const timeTitle = ref("");

    provide("timeTitle", timeTitle);

    const timer = setInterval(() => {
      timeTitle.value = increase.date();
    }, 1000);

    return { timer };
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
