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
          <input
            class="form-control"
            :class="{ dangerForm: insuficientQuantity}"
            placeholder="Quantity"
            type="number"
            v-model="quantity"
          />

          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insuficientQuantity || quantity <=  0 || !Number.isInteger(parseInt(this.quantity))"
            :class="{ danger: insuficientQuantity}"
          >{{ insuficientQuantity ? 'Not enough' : 'Sell' }}</button>
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
  computed: {
    insuficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
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
.danger {
  background: #df363e;
}
.dangerForm {
  border: 1px solid #df363e;
}
</style>