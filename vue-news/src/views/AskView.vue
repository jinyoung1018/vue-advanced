<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
            <li v-for="item in askItems" class="post">
            <div class="points">
                {{ item.points }}
            </div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">
            {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text"> {{ item.user }} </router-link>
          </small>
        </div>
      </li>
    </ul> -->
       <!-- <p v-for="item in askItems">
         <router-link v-bind:to="`item/${item.id}`">
            {{ item.title }}
         </router-link>
         <samll>{{item.time_ago}} by {{item.user}}</samll>
       </p> -->
        
    </div>
  
</template>

<script>
// import { fetchAskList } from '../api/index.js'
// import { mapState,mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue'


export default {
    components:{
        ListItem,
    },
    // computed: {
    //     ...mapGetters({
    //         askItems : 'fetchedAsk'
    //     })
    
    //     ...mapState({
    //         fetchedAsk: state => state.ask
    //     })
    //  },

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

