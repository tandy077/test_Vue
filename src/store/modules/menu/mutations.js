import router from "@/router";

export default {
    // 设置
    SET_MENU(state, data) {
        state.data = data;
    },
    // 导航栏设置
    SET_MENU_OBJECT(state, data) {
        state.dataObject[data.key] = data;
    },

    // 增加标签
    SET_MENU_APPEND(state, data) {
        if (data) {
            var isMenuData = false;
            state.menuTab.map(item => {
                if (item.key == data) {
                    isMenuData = true;
                }
            });
            if (!isMenuData) {
                state.menuTab.push(state.dataObject[data]);
            };
            this.commit("SET_INCLUDED")
        }
    },

    // 默开路由
    SET_MENU_ACTIVE(state, data) {
        state.menuActive = data;
    },
    // 切换卡内容
    SET_MENU_TAB(state, data) {
        state.menuTab = data;
    },
    // 关闭切换标签
    SET_MENU_REMOVE(state, data) {
        state.menuTab.map((item, index) => {
            if (item.path == data) {
                state.menuTab.splice(index, 1);
            }
        });
        this.commit("SET_INCLUDED");
        let arr = Object.assign([], state.menuTab).pop();
        router.replace(arr.path);
    },
    // 缓存页面
    SET_INCLUDED(state) {
        let name = state.menuTab.map(item => item.name)
        state.included = eval("/" + (name.join('|')) + "/");
        // state.included = data;
    },
}
