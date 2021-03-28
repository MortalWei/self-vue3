<template>
  <div id="order">
    <van-overlay :show="true" class="overlay-container overlay-container-gray">
      <HeaderMenu class="nav-bar-gray" />
      <OrderSearch v-if="search" />
      <div class="order-container">

        <Greetings :title="greetings.title" :desc="greetings.desc" />
        <div class="order-title" v-if="!search">
<!--          <Greetings :title="greetings.title" :desc="greetings.desc" />-->
        </div>
        <div class="order-body" v-if="!search">
          <div class="order-content">
            <SingleOrder />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import OrderSearch from "@/components/Order/OrderSearch";
import SingleOrder from "@/components/Order/SingleOrder";
import Greetings from "@/components/Order/Greetings";

export default {
  name: "Order",
  data() {
    return {
      search: true,
      greetings: {
        title: "尊敬的汪先生,您好",
        desc: "您有一个订单"
      }
    };
  },
  components: { Greetings, SingleOrder, OrderSearch, HeaderMenu },
  mounted() {
    console.log(this.$route.matched);
    setTimeout(() => {
      this.search = false;
      console.log(this.search);
    }, 300);
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
    }
  }
};
</script>

<style scoped>

</style>