import {createStore} from 'vuex'

export default createStore({
    state: {
        card: [
            {
                option1: 4,
                option2: 15,
                option3: 61,
                option4: 20,

                kg: 1.5
            },
            {
                option1: 14,
                option2: 19,
                option3: 51,
                option4: 16,

                kg: .5
            },
            {
                option1: 6,
                option2: 19,
                option3: 51,
                option4: 16,

                kg: 1
            },
        ]
    },
    mutations: {
        deleteProduct(state, index) {
            state.card = state.card.filter((data, ind) => ind !== index)
        },
        addProduct(state, data) {
            state.card.push(data)
        }
    },
    actions: {},
    getters: {
        getCard: state => {
            return state.card
        }
    }
})
