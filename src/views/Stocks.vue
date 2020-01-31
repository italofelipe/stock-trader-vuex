<template>
  <div class="row mb-5">
    <Stock v-for="stock in stocks " :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from "../components/stocks/Stock";
export default {
  name: "Stocks",
  components: {
    Stock
  },

  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>