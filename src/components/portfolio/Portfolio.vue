<template>
  <div class="portfolio">
    <div v-if="stocks.length > 0">
      <Stocks v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </div>

    <div class="alert alert-danger mt-5" v-else>
      <h3 class="text-danger">No stocks available, access the Stock pages to buy some stocks ;)</h3>
    </div>
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
  },
  mounted() {},
  created() {},
  updated() {
    console.log(this.stocks);
  }
};
</script>