import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        urlAdress: 'http://192.168.43.43:8001',
    },
    getters: {

    },
    mutations: { //同步

    },
    actions: { //异步

    }
})
export default store

// export default new Vuex.Store