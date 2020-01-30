<template>
  <div class="col-md-4 col-xl-3 mt-5">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{stock.name}}
          <small>Price: ({{stock.price}})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="pull-left">
          <input class="form-control" placeholder="Quantity" type="text" />
        </div>
        <div class="pull-right">
          <button class="btn btn-success">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: {
    stock: Object
  }
};
</script>