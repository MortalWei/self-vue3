<template>
  <div id="menu">
    <div class="menu-container">
      <van-button type="priority" class="margin-right-64" @click="checkIn">入 住</van-button>
      <van-button type="priority" @click="checkOut">退 房</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  methods: {
    checkIn() {
      this.$router.push({ name: "Index", params: { PROCESS_TYPE: 0 } });
    },
    checkOut() {
      this.$router.push({ name: "Index", params: { PROCESS_TYPE: 1 } });
    }
  }
};
</script>
