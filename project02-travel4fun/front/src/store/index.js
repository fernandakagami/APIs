import { createStore } from "vuex";

export default createStore({
    state: {
        token: ''        
    },
    mutations: {
        changeToken(state, payload) {
            state.token = payload
        }
    }
})