<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post">
       <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text"> {{ item.user }} </router-link>
          </small>

        </div>

        <!-- <a v-bind:href="item.url">{{ item.title }}</a>
      <samll>
        {{item.time_ago}} by 
        <router-link v-bind:to="`/user/${item.user}`"> {{ item.user }} </router-link> 
        </samll> -->
      </li>
    </ul>
   
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

<style scoped>
.news-list{
  margin:0;
  padding: 0;
}

.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883
}

.news-title{
  margin:0;
}
.link-text{
  color: #828282;

}

</style>