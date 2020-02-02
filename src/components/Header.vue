<template>
  <nav class="navbar-component p-0 m-0">
    <router-link to="/" class="navbar-brand m-2 marca" href="#">Stocks Trader</router-link>

    <ul class="navbar-component-links mt-2">
      <router-link to="/" class="navbar-component-link" active-class="active" tag="li">
        <a>Home</a>
      </router-link>
      <router-link to="/portfolio" class="navbar-component-link" active-class="active" tag="li">
        <a>Portfolio</a>
      </router-link>
      <router-link to="/stocks" class="navbar-component-link" active-class="active" tag="li">
        <a>Stock</a>
      </router-link>
    </ul>
    <strong class="navbar-text navbar-right mt-2">Funds: {{ funds }}</strong>
    <ul class="navbar-component-options mt-2">
      <li>
        <a href>End Day</a>
      </li>

      <li class="dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Save & Load</a>
        <ul class="dropdown-menu">
          <li>
            <a>Save Data</a>
          </li>
          <li>
            <a>Load Data</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}
.navbar-component {
  display: flex;
  justify-content: space-between;
  background: #98dfea;
}
.navbar-component-links {
  display: flex;
  flex-flow: row;
}
.navbar-component-link {
  margin: 10px 15px;
}
.navbar-component-link a {
  color: #333;
}
.navbar-component-options {
  display: flex;
  flex-flow: row;
}
.marca {
  color: #333;
}
</style>