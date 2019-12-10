import store from "@/store/";
/**
 * 布局加载
 */
import Layout from "@/views/layout/Layout.vue";
/**
 * 地图找房 路由引用
 */
import MapSearch from "@/app/MapSearch/MapSearch.vue"
// 项目路由
const componentRoute = [
    /**
     * 首页
     */
    {
        path: '/',
        component: resolve => require(['@/app/Home/Home.vue'], resolve),
        name: "Layout",
        meta: {
            key: "1",
            label: "首页",
            icon: "el-icon-location",
            isTitle: true,
        },
    },
    /**
     * 二手房
     */
    {
        path: '/handRoom',
        component: Layout,
        name: "Layout",
        meta: {
            key: "2",
            label: "二手房",
            icon: "el-icon-location",
            isTitle: true,
            target: "_self"
        },
        children: [{
                path: '/handRoom/',
                component: resolve => require(['@/app/HandRoom/HandRoom.vue'], resolve),
                name: "HandRoom",
                meta: {
                    key: "2-1",
                    label: "二手房列表",
                    icon: "el-icon-location",
                    isTitle: true,
                    target: "_self"
                }
            }, {
                path: '/HandRoomDetail/',
                component: resolve => require(['@/app/HandRoom/HandRoomDetail/HandRoomDetail.vue'], resolve),
                name: "HandRoomDetail",
                meta: {
                    key: "2-2",
                    label: "二手房详情",
                    icon: "el-icon-location",
                    isTitle: true,
                    target: "_self"
                }
            }
        ]
    },
    /**
     * 租房
     */
    {
        path: '/renting',
        component: Layout,
        name: "Layout",
        meta: {
            key: "3",
            label: "租房",
            icon: "el-icon-location",
            isTitle: true,
            target: "_self"
        },
        children: [{
            path: '/renting/',
            component: resolve => require(['@/app/Renting/Renting.vue'], resolve),
            name: "Renting",
            meta: {
                key: "3-1",
                label: "列表页",
                icon: "el-icon-location",
                isTitle: true,
                target: "_self"
            }
        }]
    },

    /**
     * 地图找房
     */
    {
        path: '/mapsearch',
        component: MapSearch,
        name: "MapSearch",
        meta: {
            key: "4",
            label: "地图找房",
            icon: "el-icon-location",
            isTitle: true,
            target: "_blank"
        },
    },
    /**
     * 小区
     */
    {
        path: '/housingestate',
        component: Layout,
        name: "Layout",
        meta: {
            key: "5",
            label: "小区",
            icon: "el-icon-location",
            isTitle: true,
        },
        children: [{
            path: '/housingestate/',
            component: resolve => require(['@/app/HousingEstate/HousingEstate.vue'], resolve),
            name: "HousingEstate",
            meta: {
                key: "5-1",
                label: "列表页",
                icon: "el-icon-location",
                isTitle: true,
            },
        }]
    },
    /**
     * 经纪人
     */
    {
        path: '/broker',
        component: resolve => require(['@/app/Broker/Broker.vue'], resolve),
        name: "Broker",
        meta: {
            key: "6",
            label: "经纪人",
            icon: "el-icon-location",
            isTitle: true,
            // target: "_blank"
        },
    },
    /**
     * 资询 
     */
    {
        path: '/information',
        component: resolve => require(['@/app/Information/Information.vue'], resolve),
        name: "Information",
        meta: {
            key: "7",
            label: "资询",
            icon: "el-icon-location",
            isTitle: true,
            target: "_blank"
        },
    },
];


// 公共路由
const commonRoute = [

    {
        path: "*",
    }
]

function setMenu(data) {
    data.map((item, index) => {
        if (item.children && item.children.length > 0) {
            setMenu(item.children);
        }
        item = Object.assign(item, item.meta);
        store.commit("SET_MENU_OBJECT", item);
        if (item.notClose) {
            menuTab.push(item);
        }
        delete item.meta;
        delete item.component;
    })
}

let menuData = JSON.parse(JSON.stringify(componentRoute));
let menuTab = [];

// 设置路由
setMenu(menuData);
store.commit("SET_MENU", menuData);
store.commit("SET_MENU_TAB", menuTab);


export default Array.concat(componentRoute, commonRoute);
