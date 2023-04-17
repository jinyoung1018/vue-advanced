<template>
    <div>
        <div v-for="item in askItems">{{ item.title }}</div>
    </div>
  
</template>

<script>
// import { fetchAskList } from '../api/index.js'
import { mapState,mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            askItems : 'fetchedAsk'
        })
    
    //     ...mapState({
    //         fetchedAsk: state => state.ask
    //     })
     },

    // data(){
    //     return{
    //         ask:[]
    //     }
    // },
 //created: 컴포넌트가 생성되자마자 들어가는 로직
    created(){
        this.$store.dispatch('FETCH_ASK');

        // var vm = this;
        // fetchAskList()
        // .then(function(response){
        //     vm.ask = response.data;
        // })
        // .catch(function(error){
        //     console.log(error);
        // });
    
    }

}
</script>

<style>

</style>