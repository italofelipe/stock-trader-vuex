<template>
  <div class="col-md-4 col-xl-3 mt-5">
    <div class="card">
      <div class="card-header bg-success">
        <h5 class="card-title">
          {{stock.name}}
          <small>Price: ({{stock.price}})</small>
        </h5>
      </div>
      <div class="card-body">
        <div class="card-corpo">
          <input class="form-control" placeholder="Quantity" type="text" v-model="quantity" />

          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="quantity <=  0 || !Number.isInteger(parseInt(this.quantity))"
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
h5 {
  color: #fefefe;
}
.card-corpo {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
</style>