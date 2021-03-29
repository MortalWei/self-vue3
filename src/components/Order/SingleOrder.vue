<template>
  <div id="singleorder" class="order-container">
    <OrderContent />
  </div>
</template>

<script>
import OrderContent from "@/components/Order/OrderContent";

export default {
  name: "SingleOrder",
  components: { OrderContent }
};
</script>