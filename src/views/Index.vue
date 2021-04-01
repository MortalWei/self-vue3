<template>
  <div id="index">
    <van-overlay :show="true" :class="operate.overlayClass">
      <HeaderMenu />
      <Greetings :title="operate.msg.title" :subtitle="operate.msg.subtitle" />
      <router-view></router-view>
      <FooterMenu />
    </van-overlay>
  </div>
</template>

<script>
import { GETTER_OPERATE, CHANGE_OPERATE } from "@/store/modules/operate";
import { inject } from "vue";
import HeaderMenu from "@/components/HeaderMenu";
import Greetings from "@/components/Order/Greetings";
import FooterMenu from "@/components/FooterMenu";

export default {
  name: "Index",
  components: { FooterMenu, Greetings, HeaderMenu },
  setup() {
    const operate = inject(GETTER_OPERATE);

    const storeChangeOperate = inject(CHANGE_OPERATE);

    const changeOperate = (step) => {
      storeChangeOperate(step);
    };

    return { operate, changeOperate };
  },
  data() {
    return {
      classes: ["overlay-container overlay-container-default", "overlay-container overlay-container-gray"]
    };
  },
  props: {
    PROCESS_TYPE: {
      type: Number,
      default: -1
    }
  },
  mounted() {
    this.navTo();
  },
  methods: {
    navTo() {
      console.log(typeof (this.operate.type));
      switch (this.operate.type) {
        case 0:
          /**
           * 入住
           */
          this.changeOperate(1);
          this.$router.push({ name: "IdCard" });
          break;
        case 1:
          /**
           * 退房
           */
          this.changeOperate(10);
          this.$router.push({ name: "Home" });
          break;
        default:
          /**
           * 未知操作
           */
          this.$router.push({ name: "Home" });
          break;
      }
    }
  }
};
</script>
