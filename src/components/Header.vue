<template>
    <nav class="navbar-component p-0 m-0">
        <router-link class="navbar-brand m-2 marca" href="#" to="/">Stocks Trader</router-link>

        <ul class="navbar-component-links mt-2">
            <router-link active-class="active" class="navbar-component-link" tag="li" to="/">
                <a>Home</a>
            </router-link>
            <router-link active-class="active" class="navbar-component-link" tag="li" to="/portfolio">
                <a>Portfolio</a>
            </router-link>
            <router-link active-class="active" class="navbar-component-link" tag="li" to="/stocks">
                <a>Stock</a>
            </router-link>
        </ul>
        <strong class="navbar-text navbar-right mt-2">Funds: {{ funds | currency }}</strong>
        <ul class="navbar-component-options mt-2">
            <li>
                <a @click="this.endDay" href="#">End Day</a>
            </li>

            <li
                    :class="{ open: isDropdownOpen }"
                    @click="isDropdownOpen  = !isDropdownOpen"
                    class="dropdown"
            >
                <a
                        aria-expanded="false"
                        aria-haspopup="true"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                >Save & Load</a>
                <ul class="dropdown-menu">
                    <li>
                        <a @click="saveData" class="m-3" href="#">Save Data</a>
                    </li>
                    <li>
                        <a class="m-3" href="#">Load Data</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "Header",
        data() {
            return {isDropdownOpen: false};
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions(["randomizeStocks"]),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                }
                // Usaremos PUT aqui propositalmente, para que sempre possamos sobrescrever o dia anterior
                this.$http.put('data.json', data)
            }
        }
    };
</script>

<style scoped>
    a {
        color: #333;
    }

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