import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import store from './store/index';

createApp(App).use(router).use(store).mount('#app');// Vue.use(VueRouter);

// const router = new VueRouter({
//     routes:[

//     ]
// })

// new Vue({
//     render:h =>h(App),
//     router,
// }).$mount('#app')
