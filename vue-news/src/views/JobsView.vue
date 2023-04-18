<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
            <li v-for="job in this.$store.state.jobs" class="post">
            <div class="points">
                {{ job.points || 0 }}
            </div>
        <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{job.time_ago}} by
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js'
import ListItem from '../components/ListItem.vue';

export default {
  components: { 
    ListItem 
  },
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

