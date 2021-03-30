<template>
  <router-view />
</template>

<script>
import store from "./store";
import _ from "lodash";
import { provide } from "vue";

export default {
  name: "app",
  setup() {
    _.forEach(store, (item, index) => {
      console.log({ index: index, item: item });
      provide(index, item);
    });
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
