<template>
  <div class="title-text margin-top-6">
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
