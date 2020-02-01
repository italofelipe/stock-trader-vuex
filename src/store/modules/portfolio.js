const state = {
	funds: 10000,
	stocks: []
};

const mutations = {
	BUY_STOCK(state, { stockId, quantity, stockPrice }) {
		// Verificar se ja temos esse stock no array antes de registrar (evitar duplicatas)
		const record = state.stocks.find((element) => element.id === stockId.id);
		if (record) {
			record.quantity = +quantity;
		} else {
			state.stocks.push({
				id: stockId,
				quantity
			});
		}
		state.funds -= stockPrice * quantity;
	},
	SELL_STOCKS(state, { stockId, quantity, stockPrice }) {
		// Verificar se ja temos esse stock no array antes de registrar (evitar duplicatas)
		const record = state.stocks.find((element) => element.id === stockId.id);
		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.stocks.splice(state.stocks.indexOf(record), 1);
		}
		state.funds += stockPrice * quantity;
	}
};

const actions = {
	sellStock: ({ commit }, order) => {
		commit('SELL_STOCKS', order);
	}
};

const getters = {
	stockPortfolio: (state, getters) => {
		return state.stocks.map((stock) => {
			const record = getters.stocks.find((element) => element.id == stock.id);
			return {
				id: stock.id,
				quantity: stock.quantity,
				name: record.name,
				price: record.price
			};
		});
	},
	funds: (state) => {
		return state.funds;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};