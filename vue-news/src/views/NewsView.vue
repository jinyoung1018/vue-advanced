<template>
  <div>
    <list-item></list-item>
    <!-- <ListItem></ListItem> -->
    
   
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import axios from 'axios';
// import { fetchNewsList } from '../api/index.js'


export default {
  components:{
    ListItem,
  }
    // data(){
    //     return{
    //         users:[]
    //     }
    // },

    // created(){
    //     var vm = this;
    //     axios.get('https://api.hnpwa.com/v0/news/1.json')
    //     .then(function(response){
    //         console.log(response);
    //         vm.users = response.data;
    //     })
    //     .catch(function(error){
    //         console.log(error);

    //     })
    // },


    // created(){
    //     this.$store.dispatch('FETCH_NEWS');
        // console.log(this);

        // fetchNewsList()
        // .then(response => {
        //     console.log(this);
        //     this.users = response.data;
        // })
        // .catch(function(error){
        //     console.log(error);

    //     // })
    // },

}
</script>
