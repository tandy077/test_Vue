<template>
    <div class="wrap">
        <!-- 头部信息 -->

        <div>
            <!-- 组件 -->
            <label class="tc-ccc fs-12">太屋中国上海 /</label>
            <span class="tc-333 fs-12">上海二手房</span>
        </div>
        <div class="fn-clear">
            <div class="logo-slogn fn-left"></div>
            <div class="fn-right">搜索框</div>
        </div>
        <!-- 查询条件 -->
        <div style="border:1px solid #ccc;">搜索组件 区域</div>
        <div>
            共找到<span class="tc-red ml-4 mr-4">2983套</span>二手房
        </div>
        <!-- 列表数据 -->
        <div class="fn-clear">
            <div class="main-left fn-left">
                <div class="fn-clear mb-20">
                    <div class="fn-left">排序</div>
                    <div @click="list = !list" class="fn-right">切换</div>
                </div>
                <!-- 列表形式 -->
                <div v-if="list">
                    <ul v-for="(item, index) in dataList" :key="index">
                        <li class="list-rows pt-21 pb-18 fn-clear">
                            <div class="fn-left mr-20">
                                <el-image style="width:250px;height:189px;display:block;" src="../../../static/images/handRoom/1.jpg" fit="cover"></el-image>
                            </div>
                            <div class="info fn-left">
                                <div class="title text-overflow cursor-pointer mb-20">
                                    标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
                                </div>
                                <div class="houseInfo mb-20 fs-12">
                                    <i class=""></i>
                                    <span>2室1厅</span><span class="mr-5 ml-5">|</span><span>122平米</span>
                                </div>
                                <div class="positionInfo mb-20 fs-12">
                                    <i class=""></i>
                                    <span>徐汇-龙华-零陵路22弄</span><span class="mr-5 ml-5">|</span><span>明日星城</span>
                                </div>
                                <div class="followInfo mb-20 fs-12">
                                    <i class=""></i>
                                    <span>刚刚发布</span><span class="mr-5 ml-5">|</span><span>5人关注</span>
                                </div>
                                <div>
                                    <span v-for='(item,index) in tagsList' :key="index" class="tags-bgcolor fs-12" :class="[
                                        [item=='VR房源'?'bgcolor0':''],
                                        [item=='满五减一'?'bgcolor1':''],
                                        [item=='近地铁'?'bgcolor2':''],
                                        [item=='近学区'?'bgcolor3':''],
                                        [item=='临时看房'?'bgcolor4':'']]">
                                        {{item}}
                                    </span>
                                </div>
                            </div>
                            <div class="priceInfo fn-right">
                                <div class="fn-clear mb-10">
                                    <div class="compareBtn fs-12 fn-right">
                                        <span>加入对比</span>
                                    </div>
                                    <div class="followBtn fs-12 fn-right">
                                        <span>加入关注</span>
                                    </div>
                                </div>
                                <div class="totalPrice tc-red">
                                    <span class="fs-30">5000</span>元/月
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 九宫格形式 -->
                <div v-else>
                    <div v-for="(item, index) in dataList" :key="index" class="list-item" :class="index%2== 0 ? 'mr-38' : ''">
                        <div class="bigImgList">
                            <el-image style="width:451px;height:340px;display:block;" src="../../../static/images/handRoom/1.jpg" fit="cover"></el-image>
                            <div class="price">
                                <span class="fs-30">5000</span>元/月
                            </div>
                        </div>
                        <a class="list-title mt-20" href="">
                            标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
                        </a>
                        <div class="mt-10 mb-10 fs-12">
                            2室1厅<span class="mr-4 ml-4">|</span>2室1厅<span class="mr-4 ml-4">|</span>2室1厅<span class="mr-4 ml-4">|</span>2室1厅<span class="mr-4 ml-4">|</span>2室1厅
                        </div>
                        <div>
                            <span v-for='(item,index) in tagsList' :key="index" class="tags-bgcolor list-tags-bgcolor fs-12" :class="[
                                [item=='VR房源'?'bgcolor0':''],
                                [item=='满五减一'?'bgcolor1':''],
                                [item=='近地铁'?'bgcolor2':''],
                                [item=='近学区'?'bgcolor3':''],
                                [item=='临时看房'?'bgcolor4':'']]">
                                {{item}}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <!-- 右侧 -->
            <div class="main-right fn-right">
                <div>
                    <div class="fn-clear">
                        <label class="fs-16 tc-brand fn-left">最新资讯</label>
                        <span class="fs-12 tc-999 cursor-pointer fn-right">更多</span>
                    </div>
                    <div class="mt-9 mb-9"></div>
                    <ul class="fs-12">
                        <li class="mb-14">最新资讯信息</li>
                        <li>最新资讯信息</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HandRoom",
    data: function() {
        return {
            tagsList: ["VR房源", "满五减一", "近地铁", "近学区", "临时看房"],
            dataList: [{}, {}, {}, {}, {}, {}],
            list: true
        };
    },
    methods: {},
    created: function() {}
};
</script>
<style  scoped>
.main-left {
    width: 940px;
}
.main-right {
    width: 220px;
}
/* 列表样式 */
.list-rows {
    border-bottom: 2px solid #eee;
}
.info {
    width: 420px;
}
.title {
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    line-height: 28px;
}
.houseInfo,
.positionInfo,
.followInfo {
    height: 17px;
    line-height: 17px;
}
.tags-bgcolor {
    display: inline-block;
    padding: 7px 10px;
    margin-right: 10px;
    border-radius: 4px;
}
.bgcolor0 {
    background: linear-gradient(
        90deg,
        rgba(84, 179, 255, 1) 0%,
        rgba(0, 124, 230, 1) 100%
    );
    color: #fff;
}
.bgcolor1 {
    background: rgba(246, 232, 232, 1);
    color: #f72c2c;
}
.bgcolor2 {
    background: rgba(250, 100, 0, 0.1);
    color: #fa6400;
}
.bgcolor3 {
    background: rgba(50, 142, 255, 0.1);
    color: #328eff;
}
.bgcolor4 {
    background: rgba(247, 181, 0, 0.1);
    color: #f7b500;
}
.followBtn,
.compareBtn {
    display: inline-block;
    padding: 7px 10px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(238, 238, 238, 1);
    color: #999;
    margin-left: 10px;
}
.totalPrice,
.unitPrice {
    text-align: right;
}
.totalPrice {
    height: 42px;
    line-height: 42px;
    margin-bottom: 1px;
}
.priceInfo {
    width: 190px;
}
/* 九宫格样式 */
.list-item {
    width: 451px;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 40px;
}
.bigImgList {
    position: relative;
    height: 340px;
}
.price {
    position: absolute;
    bottom: 10px;
    right: 0px;
    width: 108px;
    height: 50px;
    background: rgba(0, 0, 0, 1);
    border-radius: 2px 0px 0px 2px;
    opacity: 0.69;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 50px;
}
.list-title {
    font-size: 20px;
    font-weight: 500;
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-decoration: none;
}
.list-tags-bgcolor {
    border-radius: 2px;
}
</style>