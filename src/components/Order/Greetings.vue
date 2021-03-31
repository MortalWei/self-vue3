<template>
  <div class="index-title">
    <span>{{ title }}</span>
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
