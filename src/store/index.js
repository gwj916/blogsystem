import Vue from "vue";
import Vuex from "vuex";
import banner from "./banner"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        banner,
    },
    strict:true,
})