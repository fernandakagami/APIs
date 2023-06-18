import { createStore } from "vuex";
import { owner } from './modules/owner';
import { hotel } from './modules/hotel';

export default createStore({
    state: {        
        notification: '',
        show: false,
        toastClass: '',
        hotelsList: []
    },
    mutations: {        
        changeNotification(state, payload) {
            state.notification = payload
        },
        changeShow(state, payload) {
            state.show = payload
        },
        changeToastClass(state, payload) {
            state.toastClass = payload
        }
    },
    actions: {
        show({ commit }) {
            setTimeout(() => {
                commit('changeShow')
            }, 3000)
        },
        showNotification({ commit, dispatch }, { notification, cssClass }) {
            commit('changeNotification', notification)
            commit('changeShow', true)
            commit('changeToastClass', cssClass)
            dispatch('show')
        }
    },
    modules: {
        owner,
        hotel
    }
})