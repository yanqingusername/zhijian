import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        isMobile: false
    },
    mutations: {
        changeIsMobile(state, status) {
          
            state.isMobile = status;
        },
       
    },
    getters: {
        isMobile: () => state.isMobile
    }
})

export default store