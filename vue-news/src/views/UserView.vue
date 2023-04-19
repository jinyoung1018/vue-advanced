<template>
    <div>
        <user-profile></user-profile>
        <!-- <p>name : {{ this.$store.state.user.id }}</p> -->
        <!-- <p>name : {{ this.userInfo.id }}</p>
        <p>karma : {{ this.userInfo.karma }}</p>
        <p>created : {{ this.userInfo.created }}</p> -->

    </div>
  
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile,
    },

    // computed: {
    //     userInfo(){
    //         return this.$store.state.user;
    //     }

    // },

    created(){
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
        this.$store.dispatch('FETCH_USER', userName);
    }



}
</script>

<style>

</style>