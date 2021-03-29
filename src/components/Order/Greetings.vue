<template>
  <div class="title-text">
    <span>{{ title }}</span>
    <br>
    <span>{{ desc }}</span>
  </div>
</template>

<script>
export default {
  name: "Greetings",
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  }
};
</script>

<!--<style scoped lang="less">-->
<!--#greetings {-->
<!--  font-size: 64px;-->
<!--  color: @mg-default-color;-->
<!--  padding: 0 24%;-->
<!--  margin-bottom: 24px;-->
<!--}-->
<!--</style>-->