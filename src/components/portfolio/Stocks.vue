<template>
  <div class="col-md-4 col-xl-3 mt-5">
    <div class="card">
      <div class="card-header bg-success">
        <h5 class="card-title">
          {{stock.name}}
          <small>Price: ( {{ stock.price }} | Quantity: {{ stock.quantity }} )</small>
        </h5>
      </div>
      <div class="card-body">
        <div class="card-corpo">
          <input class="form-control" placeholder="Quantity" type="text" v-model="quantity" />

          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="quantity <=  0 || !Number.isInteger(parseInt(this.quantity))"
          >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "StocksPortfolio",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
</style>