<template>
  <div id="idcard">
    <van-overlay :show="show" class="overlay-container overlay-container-default">
      <HeaderMenu />
      <div class="title-container">
        <div class="title-text">
          {{ msg }}
        </div>
        <div class="title-image">
          <img src="../../assets/11.png" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";

export default {
  name: "IdCard",
  components: { HeaderMenu },
  data() {
    return {
      // show: true
    };
  },
  props: {
    msg: {
      type: String,
      default: "请将您的身份证件放在识别区域"
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.Timeout = setTimeout(() => {
      this.$router.push({ name: "Order" });
    }, 300);
  },
  beforeUnmount() {
    if (this.Timeout) {
      clearTimeout(this.Timeout);
    }
  }
};
</script>

<style scoped>

</style>