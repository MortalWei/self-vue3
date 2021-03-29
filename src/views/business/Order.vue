<template>
  <div id="order">
    <van-overlay :show="true" class="overlay-container overlay-container-gray">
      <HeaderMenu class="nav-bar-gray" />
      <OrderSearch v-if="search" />
      <div class="margin-top-6" v-if="!search">
        <Greetings :title="greetings.title" :desc="greetings.desc"/>

        <SingleOrder v-if="showsingle" />
        <MultiOrder v-if="!showsingle" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import OrderSearch from "@/components/Order/OrderSearch";
import SingleOrder from "@/components/Order/SingleOrder";
import Greetings from "@/components/Order/Greetings";
import MultiOrder from "@/components/Order/MultiOrder";

export default {
  name: "Order",
  data() {
    return {
      search: true,
      showsingle: false,
      greetings: {
        title: "尊敬的汪先生,您好 您有一个订单",
        desc: ""
      }
    };
  },
  components: { MultiOrder, Greetings, SingleOrder, OrderSearch, HeaderMenu },
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
        this.$router.back();
      }
    }
  }
};
</script>