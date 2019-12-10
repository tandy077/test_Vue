import Vue from 'vue';
import Router from 'vue-router';
import store from "../store";
/**
 * options 路由数据
 */
import options from "./options";
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: options
});
/**
 * 路由打开前
 */
router.beforeEach((to, from, next) => {
    if (store.state.user.userType === 0) {
        // 游客
        next();
    }
});

/**
 * 路由打开后
 */
router.afterEach(route => {
    store.commit("SET_MENU_ACTIVE", route.path)
    store.commit("SET_MENU_APPEND", route.meta.key);
});

export default router;
