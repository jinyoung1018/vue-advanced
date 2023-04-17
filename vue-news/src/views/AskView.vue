<template>
    <div>
       <p v-for="item in askItems">
         <!-- <a :href="item.url">{{  item.title }}</a> -->
         <router-link v-bind:to="`item/${item.id}`">
            {{ item.title }}
         </router-link>
         <samll>{{item.time_ago}} by {{item.user}}</samll>
       </p>
        
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