/**
 * 【VueAMap】地图
 */
import Vue from "vue";
import VueAMap from "vue-amap";
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德key
    key: 'a007ab5ef5a9c8feeace749f0105e141',
    // 插件集合 （插件按需引入）
    plugin: [
        "AMap.Autocomplete",
        "AMap.PlaceSearch", // POI搜索插件
        "AMap.Scale", // 右下角缩略图插件 比例尺
        "AMap.OverView",
        "AMap.ToolBar", // 地图工具条
        "AMap.MapType",
        "AMap.PolyEditor",
        "AMap.CircleEditor", // 圆形编辑器插件
        "AMap.Geolocation" // 定位控件，用来获取和展示用户主机所在的经纬度位置
    ],
});
