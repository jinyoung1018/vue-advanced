// import Vue from 'vue';
import { createStore} from 'vuex';
import { fetchNewsList,fetchJobsList } from '../api/index.js'



// Vue.use(Vuex);

export default createStore({
    state: {
        news: [],
        jobs: [],
    },

    mutations:{
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state,jobs){
            state.jobs = jobs;
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

        },

        FETCH_JOBS({commit}){

            fetchJobsList()
            .then(({ data })=> {
                commit('SET_JOBS', data);
            })
            .catch(error=>{
                console.log(error);
            });
        }
    }
   

});
