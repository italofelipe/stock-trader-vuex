<template>
  <div class="row mb-5">
    <Stock v-for="stock in stocks " :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  name: "Stocks Stocks",
  components: {
    Stock
  },
  data() {
    return {
      stocks: [
        { id: 1, name: "AMD", price: 120 },
        { id: 2, name: "Nvidia", price: 150 },
        { id: 3, name: "Intel", price: 100 },
        { id: 4, name: "Corsair", price: 115 },
        { id: 5, name: "Thermaltake", price: 95 }
      ]
    };
  }
};
</script>