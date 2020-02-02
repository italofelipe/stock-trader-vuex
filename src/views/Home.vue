<template>
  <div class="mt-5">
    <h1>Trade or view your Portfolio</h1>
    <h4>You may save or load your data.</h4>
    <h4>Click on "End Day" to begin a new day!</h4>
    <hr />
    <h5>
      Your funds:
      <span
        :class="[ funds > 1000 ? 'text-success text-bold' : 'text-danger text-bold']"
      >{{ funds | currency }}</span>
    </h5>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>