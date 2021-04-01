<template>
  <div id="order">
    <van-loading color="#eoeoeo" size="256" v-if="search" />
    <div v-if="!search">
      <SingleOrder v-if="!showsingle" />
      <MultiOrder v-if="showsingle" />
    </div>
  </div>
</template>

<script>
import SingleOrder from "@/components/Order/SingleOrder";
import MultiOrder from "@/components/Order/MultiOrder";
import { inject } from "vue";
import { CHANGE_OPERATE, CHANGE_OPERATE_MSG } from "@/store/modules/operate";
import { GETTER_CONFIG } from "@/store/modules/config";

export default {
  name: "Order",
  setup() {
    const storeChangeStep = inject(CHANGE_OPERATE);
    const storeChangeMsg = inject(CHANGE_OPERATE_MSG);
    const conf = inject(GETTER_CONFIG);

    const changeOperate = () => {
      storeChangeStep();
    };

    const changeOperateMsg = (msg) => {
      storeChangeMsg(msg);
    };

    changeOperateMsg(conf.value.msgInfo.searchOrder);

    return { conf, changeOperate, changeOperateMsg };
  },
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
  components: { MultiOrder, SingleOrder },
  mounted() {
    console.log(this.$route.matched);
    setTimeout(() => {
      this.search = false;
      // this.changeOperateMsg("尊敬的汪先生,您好 您有一个订单");
      console.log("this.conf.value.msgInfo.foundOrder");
      console.log(this.conf);

      this.changeOperateMsg(this.conf.msgInfo.foundOrder);
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