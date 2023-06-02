import { createStore } from "vuex";

export default createStore({
    state: {
        token: '',
        notification: '',
        show: false
    },
    mutations: {
        changeToken(state, payload) {
            state.token = payload
        },
        changeNotification(state, payload) {
            state.notification = payload
        },
        changeShow(state, payload) {
            state.show = payload
        }
    },
    actions: {
        show({ commit }) {
            setTimeout(() => {
                commit('changeShow')
            }, 3000)            
        }
    }
})