<template>
    <div class="map-search">
        <div class="map-search-main" id="mysubway">
            <el-amap vid="amap" ref="map" :amap-manager="amapManager" :plugin="plugin" :zoom="zoom" :center="center" :events="events">
                <el-amap-circle-marker :visible="disappear" v-for="marker in markers" :key="marker.index" :center="marker.center" :radius="marker.radius" :fill-color="marker.fillColor" :fill-opacity="marker.fillOpacity" :events="marker.events">
                </el-amap-circle-marker>
                <el-amap-text :visible="disappear" v-for="text in texts" :text="text.text" :key="text.index" :offset="text.offset" :position="text.position" :events="text.events"></el-amap-text>
            </el-amap>
        </div>
    </div>
</template>
<style scoped>
.map-search-main,
.map-search {
    width: 100%;
    height: 100%;
}
.map-search {
    position: relative;
}
</style>

<script>
import VueAMap from "vue-amap";
// NPM 方式
import { AMapManager } from "vue-amap";
// CDN 方式
let amapManager = new VueAMap.AMapManager();
export default {
    name: "MapSearch",
    data() {
        let self = this;
        return {
            amapManager,
            center: [121.5273285, 31.21515044],
            lng: 0,
            lat: 0,
            zoom: 12,
            loaded: false,
            disappear: "",
            markers: [
                {
                    extData: "sss",
                    center: [121.5273285, 31.21515044],
                    radius: 50,
                    fillOpacity: 1,
                    fillColor: "rgba(0,167,91,0.9)",
                    // strokeOpacity: 0,
                    // strokeColor: "rgba(0,167,91,0.9)",
                    // strokeWeight: 0,
                    events: {
                        click: () => {
                            self.zoom = 16;
                            self.disappear = false;
                        }
                    }
                }
            ],
            texts: [
                {
                    position: [121.5273285, 31.21515044],
                    text: "浦东新区",
                    offset: [0, 0],
                    events: {
                        click: () => {
                            self.zoom = 16;
                            self.disappear = false;
                        }
                    }
                }
            ],
            plugin: [
                {
                    enableHighAccuracy: true, //是否使用高精度定位，默认:true
                    timeout: 100, //超过10秒后停止定位，默认：无穷大
                    maximumAge: 0, //定位结果缓存0毫秒，默认：0
                    convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true, //显示定位按钮，默认：true
                    buttonPosition: "RB", //定位按钮停靠位置，默认：'LB'，左下角
                    showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
                    extensions: "all",
                    pName: "Geolocation"
                    // events: {
                    //     init(o) {
                    //         // o 是高德地图定位插件实例
                    //         o.getCurrentPosition((status, result) => {
                    //             if (result && result.position) {
                    //                 self.lng = result.position.lng;
                    //                 self.lat = result.position.lat;
                    //                 self.center = [self.lng, self.lat];
                    //                 self.loaded = true;
                    //                 self.$nextTick();
                    //             }
                    //         });
                    //     }
                    // }
                }
            ],
            events: {
                init(o) {
                    // console.log(o.getCenter());
                },
                zoomchange: e => {
                    // console.log(e);
                },
                zoomend: e => {
                    //获取当前缩放zoom值
                    // console.log(self.$refs.map.$$getInstance().getZoom());
                    console.log(e);
                },
                click: e => {
                    console.log(e, "123123123");
                    self.lng = e.lnglat.lng;
                    self.lat = e.lnglat.lat;
                    self.center = [e.lnglat.lng, e.lnglat.lat];
                    // alert('map clicked')
                }
            }
        };
    },
    mounted() {
        // subway("mysubway", {
        //     adcode: 3100, //上海的adcode
        // });
    },
    created() {},
    methods: {
        getMap() {
            // amap vue component
            console.log(amapManager._componentMap);
            // gaode map instance
            console.log(amapManager._map);
        }
    }
};
</script>