import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
/**
 * 状态模块
 * user 用户
 * menu 目录
 */
import user from "./modules/user";
import menu from "./modules/menu";
const store = new Vuex.Store({
    modules: {
        user,
        menu
    },
    getters: {
        doneMenu: state => {
            return state.menu.data;
        }
    }

});
export default store;
