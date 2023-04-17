<template>
    <div>
        <ul class="news-list">
            <li v-for="item in askItems" class="post">
       <!-- 포인트 영역 -->
            <div class="points">
                {{ item.points }}
            </div>
        <!-- 기타 정보 영역 -->
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
    </ul>
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