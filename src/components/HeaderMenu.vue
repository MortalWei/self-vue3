<template>
  <div id="headermenu">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight" :class="this.class">
      <template #right>
        <van-icon name="cross" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  props: {
    class: {
      type: String,
      default: ""
    }
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
        this.$router.back();
      }
    }
  }
};
</script>
