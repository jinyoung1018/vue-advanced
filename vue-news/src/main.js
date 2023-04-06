import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';

createApp(App).use(router).mount('#app');// Vue.use(VueRouter);

// const router = new VueRouter({
//     routes:[

//     ]
// })

// new Vue({
//     render:h =>h(App),
//     router,
// }).$mount('#app')
