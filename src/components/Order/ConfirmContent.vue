<!-- Created by mortal on 2021/3/31 -->
<template>
  <div>
    <div class="confirm-content">
      <van-cell-group>
        <van-field label="房间号" model-value="8618" readonly />
        <van-field label="房晚" model-value="1间1晚" readonly />
        <van-field label="早餐" model-value="无" readonly />
        <van-field label="手机号" v-model="value" border readonly clickable @touchstart.stop="show = true"
                   placeholder="点击此处输入手机号" />
        <van-number-keyboard
            v-model="value"
            :show="show"
            theme="custom"
            close-button-text="完成"
            :maxlength="11"
            @blur="show = false"
        />
        <van-field label="入住人数">
          <template #input>
            <van-stepper v-model="peopleNum" disable-input integer min="1" max="2" />
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <div style="margin-top: 12%;font-size: 18px;">
      <van-button type="confirm" class="right-angle" @click="nvaTo">确认入住</van-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ConfirmContent",
  setup() {
    const show = ref(false);
    const value = ref("");
    const peopleNum = ref(1);
    return {
      show,
      value,
      peopleNum
    };
  },
  methods: {
    nvaTo() {
      this.$router.push({ name: "FaceCompare" });
      // this.$router.push({ name: "DealOver" });
    }
  }
};
</script>

<style scoped>

</style>