<template>
  <div>
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <samll>{{item.time_ago}} by {{ item.user }}</samll>
    </p>
  </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index.js'


export default {
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


    created(){
        this.$store.dispatch('FETCH_NEWS');
        // console.log(this);

        // fetchNewsList()
        // .then(response => {
        //     console.log(this);
        //     this.users = response.data;
        // })
        // .catch(function(error){
        //     console.log(error);

        // })
    },

}
</script>

<style>

</style>