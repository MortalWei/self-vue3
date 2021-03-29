<template>
  <div id="idcard">
    <van-overlay :show="show" class="overlay-container overlay-container-default">
      <HeaderMenu />
      <div class="title-container">
        <!--        <div class="title-text">-->
        <!--          {{ msg }}-->
        <!--        </div>-->

        <!--        <Greetings :title="msg" v-if="!search" />-->
        <Greetings :title="msg" />
        <div class="title-image">
          <img src="../../assets/11.png" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import Greetings from "@/components/Order/Greetings";

export default {
  name: "IdCard",
  components: { Greetings, HeaderMenu },
  data() {
    return {
      // greetings:{
      //   title:
      // }
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
    }, 3*1000);
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