<!-- Created by mortal on 2021/3/31 -->
<template>
  <div class="order-content">
    <van-cell-group>
      <!--      <van-field label="文本" model-value="输入框只读" readonly />-->
      <van-field label="房间号" model-value="8618" readonly />
      <van-field label="房晚" model-value="1间1晚" readonly />
      <van-field label="房费" model-value="已支付" readonly />
      <van-field label="早餐" model-value="无" readonly />
      <!--      <van-field label="手机号" model-value="无" readonly />-->
      <!--      <van-cell title="当前房间入住人数" />-->
      <van-field label="手机号" v-model="value" readonly clickable @touchstart.stop="show = true" />
      <van-number-keyboard
          v-model="value"
          :show="show"
          theme="custom"
          close-button-text="完成"
          :maxlength="11"
          @blur="show = false"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ConfirmContent",
  setup() {
    const show = ref(false);
    const value = ref("");
    return {
      show,
      value
    };
  }
};
</script>

<style scoped>

</style>