<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
    <router-view></router-view>
  </transition>
  </div>
 
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components:{
    ToolBar,
  },

}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color:#344952;
}
a.router-link-exact-active{
  text-decoration:underline ; 
}
a:hover{
  color: #42b883;
  text-decoration:underline ; 


}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to{
  opacity: 0;
}
</style>
