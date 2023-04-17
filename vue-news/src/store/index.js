// import Vue from 'vue';
import { createStore} from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';



// Vue.use(Vuex);

export default createStore({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: [],

    },

    getters:{
        fetchedAsk(state){
            return state.ask;
        }

    },

    mutations,

    actions,
   

});
