// import Vue from 'vue';
import { createStore} from 'vuex';
import { fetchNewsList } from '../api/index.js'


// Vue.use(Vuex);

export default createStore({
    state: {
        news: []
    },

    mutations:{
        SET_NEWS(state, news) {
            state.news = news;

        }

    },

    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then(response  => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data); //SET_NEWS를 실행할 때 response.data를 넘겨줌, actions->commit->mutations->state

            })
            .catch(error =>{
                console.log(error);
            });

        }
    }
   

});
