<template>
  <div>
    <Stocks v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stocks from "./Stocks";
export default {
  name: "Porfolio",
  components: {
    Stocks
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  }
};
</script>