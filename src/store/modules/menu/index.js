import actions from "./actions.js";
import mutations from "./mutations.js";
export default {
  state: {
    // 左侧导航条
    data: [],
    // 导航条OBJECT
    dataObject: {},
    // 路由展开菜单
    menuActive: "",
    // 切换卡内容
    menuTab: [],
    // 正则匹配动态保存数据
    included: /home/,
  },
  actions,
  mutations
}
