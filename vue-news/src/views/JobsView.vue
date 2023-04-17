<template>
  <div>
    <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <samll>{{job.time_ago}},{{job.domain}}</samll>
    </p>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
  // data(){
  //       return{
  //           jobs:[]
  //       }
  //   },

    created(){
      this.$store.dispatch('FETCH_JOBS');
        // var vm = this;

        // fetchJobsList()
        // .then(response => this.jobs = response.data)
        // .catch(error => console.log(error));


        // .then(function(response){
        //     console.log(response);
        //     vm.jobs = response.data;
        // })
        // .catch(function(error){
        //     console.log(error);

        // })
    },

}
</script>

<style>

</style>