import { fetchNewsList,fetchJobsList,fetchAskList } from '../api/index.js'


export default{
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
    },

    FETCH_ASK({commit}){
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASK',data);
        })
        .catch(error => {
            console.log(error);
        });

    }
}