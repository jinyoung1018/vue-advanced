<template>
    <div>
        <section>
            <!-- 사용자 정보 -->
            <user-profile :info="fetchedItem">
                <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                   {{ fetchedItem.user }}
                </router-link>
                <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
            </user-profile>
            <!-- <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItem.user}`">
                        {{ fetchedItem.user }}
                    </router-link>
                    <div class="time" >{{ fetchedItem.time_ago }}</div>
                </div>            
            </div> -->
        </section>
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        

        <section>
            <div v-html="fetchedItem.content">
            </div>
        </section>
        <!-- <p>{{ this.fetchedItem.title }}</p>
        <div>
            {{ this.fetchedItem.content }}
        </div> -->
    </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    components: { UserProfile },
    computed: {
        ...mapGetters(['fetchedItem']),
    },
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',itemId);
    }

}
</script>

<style scoped>
.user-container{
   display: flex; 
   align-items: center;
   padding: 0.5rem;
}

.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}

.time{
    font-size: 0.7rem;
}

</style>