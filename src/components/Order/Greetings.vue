<template>
  <div id="greetings">
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

<style scoped>
#greetings{

}

</style>