<template>
  <div class="index-title">
    <div class="title">
      <span v-if="title!=''">{{ title }}</span>
    </div>
    <div class="subtitle">
      <span v-if="subtitle!=''">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Greetings",
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>
