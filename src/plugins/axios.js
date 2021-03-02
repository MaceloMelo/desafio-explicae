import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = 'https://randomuser.me/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})