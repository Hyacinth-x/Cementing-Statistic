import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import axios from 'axios';
import VueRouter from "vue-router";
import router from './router'
import store from './store'

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: "min" });
Vue.prototype.$axios = axios;

//时间转换插件
import moment from 'moment'
Vue.prototype.$moment = moment

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')