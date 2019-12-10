<!-- 租房-详情 -->
<template>
    <div style="width: 100%;">
        <div class="wrap">
            <!-- 头部信息 -->
            <div class="page-top-info">
                <el-row class="top-title-path">
                    <el-col :span="12">
                        <label class="tc-999 fs-12">太屋中国上海 /</label>
                        <label class="tc-999 fs-12">上海二手房 /</label>
                        <label class="tc-999 fs-12">徐汇 /</label>
                        <span class="tc-333 fs-12">当前房源</span>
                    </el-col>
                    <el-col :span="12">
                        <div class="width300 fr">
                            <el-input type="text" v-model="topSerachInput"></el-input>
                        </div>
                        <div style="clear:both;"></div>
                    </el-col>
                </el-row>
            </div>
            <div class="page-content-info">
                <div class="page-content-title-box mb-22">
                    <el-row class="page-content-title mb-10">
                        <el-col :span="14" class="tc-333 fs-30 hgt-42">店长主推！樱花园精装大两房，房东急售2室</el-col>
                        <el-col :span="10" class="tc-999 fs-12 hgt-42">
                            <label>
                                <span>4人已关注</span>
                            </label>
                            <label>
                                <i class="icon-@@"></i>
                                <span>已关注</span>
                            </label>
                            <label>
                                <i class="icon-@@"></i>
                                <span>加入对比</span>
                            </label>
                            <label>
                                <i class="icon-@@"></i>
                                <span>分享</span>
                            </label>
                        </el-col>
                    </el-row>
                    <el-row>
                        <label v-for='(item,index) in tagsList' :key="index" class="tags-bgcolor fs-12" :class="[
                            [item=='vip房源'?'bgcolor0':''],
                            [item=='满五唯一'?'bgcolor1':''],
                            [item=='近地铁'?'bgcolor2':''],
                            [item=='近学区'?'bgcolor3':''],
                            [item=='临时看房'?'bgcolor4':'']
                        ]">
                            {{item}}
                        </label>
                    </el-row>
                </div>
                <div class="page-content-box fn-clear">
                    <div class="page-content-box-left fn-left">
                        <div class="var-box mb-48"></div>
                        <ul class="nav fn-clear">
                            <li class="tc-red">基本信息</li>
                            <li>房源特色</li>
                            <li>看房记录</li>
                        </ul>
                        <!-- 基本信息 -->
                        <div class="basic-msg fn-clear fs-12">
                            <div class="tc-333 fs-20 mb-20">基本信息</div>
                            <ul>
                                <li><span class="tc-999">房屋户型：</span> 1室1厅1厨1卫</li>
                                <li><span class="tc-999">配备电梯：</span>有电梯</li>
                                <li><span class="tc-999">房源编号：</span>1室1厅1厨1卫</li>
                                <li><span class="tc-999">押付方式：</span>有电梯</li>
                                <li><span class="tc-999">使用面积：</span> 1室1厅1厨1卫</li>
                                <li><span class="tc-999">所在楼层：</span>有电梯</li>
                                <li><span class="tc-999">出租方式：</span>1室1厅1厨1卫</li>
                                <li><span class="tc-999">水电：</span>有电梯</li>
                                <li><span class="tc-999">房屋朝向：</span>1室1厅1厨1卫</li>
                                <li><span class="tc-999">装修情况：</span>有电梯</li>
                                <li><span class="tc-999">发布时间：</span>有电梯</li>
                            </ul>
                        </div>
                        <!-- 配套设施 -->
                        <div class="facility fn-clear fs-12 mb-20">
                            <div class="tc-333 fs-20 mb-20">配套设施</div>
                            <ul class="facility-box fn-clear">
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    电视
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    冰箱
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    洗衣机
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    空调
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    暖气
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    电视
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    冰箱
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    洗衣机
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    空调
                                </li>
                                <li>
                                    <div class="icon mb-12">
                                        <el-image class="fn-left" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                    </div>
                                    暖气
                                </li>
                            </ul>
                        </div>
                        <!-- 房源特色 -->
                        <div class="room-feature fn-clear fs-12 mb-46">
                            <div class="tc-333 fs-20 mb-20">房源特色</div>
                            <ul class="room-feature-detail">
                                <li class="fn-clear mb-42 tc-333">
                                    <div class="detail-title fn-left fs-16">房源介绍</div>
                                    <ul class="fn-left fs-14">
                                        <li><span class="tc-999">房源特色：</span>品质小区，环境优美，空气清闲</li>
                                        <li><span class="tc-999">户型介绍：</span>采光充足，温馨舒适</li>
                                        <li><span class="tc-999">装修介绍：</span>精装修，采用环保装修材料，设计精巧。</li>
                                    </ul>
                                </li>
                                <li class="mental fn-clear mb-42 tc-333">
                                    <div class="detail-title fn-left fs-16">业主心态</div>
                                    <div class="detail fn-left">
                                        业主是置换的，因为家里添了小孩，业主要上班，父母过来帮忙照顾小孩，目前房子太小，自己也有条件置换大一点的房子，所以近期有时间一直在看房子，现在看的也差不多了，所以将此房挂牌出售，价格方面也可以再谈。
                                    </div>
                                </li>
                                <li class="mental fn-clear tc-333">
                                    <div class="detail-title fn-left fs-16">房东自评</div>
                                    <div class="detail fn-left">
                                        诚心出售，欢迎看房，随时恭候您的到来。
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 看房记录 -->
                        <div class="room-record fn-clear fs-12 mb-46">
                            <div class="tc-333 fs-20 mb-20">看房记录</div>
                            <div class="fn-left">
                                <el-table :data="tableData" style="width: 514px;">
                                    <el-table-column prop="date" label="带看时间" width="180">
                                    </el-table-column>
                                    <el-table-column prop="name" label="带看人" width="180">
                                    </el-table-column>
                                    <el-table-column prop="phone" label="联系电话">
                                    </el-table-column>
                                </el-table>
                                <div>1/5</div>
                            </div>
                            <ul class="fn-left record-data">
                                <li class="mb-46">
                                    <span class="tc-333 fs-50">28</span><br>
                                    <span class="tc-999 fs-14">近30天带看次数</span>
                                </li>
                                <li>
                                    <span class="tc-333 fs-50">50</span><br>
                                    <span class="tc-999 fs-14">累计带看次数</span>
                                </li>
                            </ul>
                        </div>
                        <!-- 小区信息 -->
                        <div class="community-msg-box fn-clear fs-12 mb-46">
                            <div class="tc-333 fs-20 mb-20 fn-clear">小区信息
                                <span class="fn-right tc-999 fs-14">查看详情</span>
                            </div>
                            <div class="community-msg fn-clear">
                                <el-image class="fn-left" style="width: 260px; height: 226px;" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                                <div class="fn-left community-msg-right pl-16 pt-10 pb-10">
                                    <div class="tc-333 fs-26 mb-20">明日新城</div>
                                    <ul class="fn-clear msg-1 pb-12 mb-20">
                                        <li>
                                            <span class="tc-666 fs-24">50</span><br>
                                            <span class="tc-999 fs-12">在售套数</span>
                                        </li>
                                        <li>
                                            <span class="tc-666 fs-24">50</span><br>
                                            <span class="tc-999 fs-12">在租套数</span>
                                        </li>
                                        <li>
                                            <span class="tc-666 fs-24">50</span><br>
                                            <span class="tc-999 fs-12">近30天带看次数</span>
                                        </li>
                                        <li>
                                            <span class="tc-666 fs-24">50</span><br>
                                            <span class="tc-999 fs-12">近90天成交套数</span>
                                        </li>
                                    </ul>
                                    <ul class="fn-clear  msg-2 pb-12">
                                        <li>
                                            <span class="tc-999 fs-12">均价：</span>
                                            <span class="tc-333 fs-12">67628元/平米</span>
                                        </li>
                                        <li>
                                            <span class="tc-999 fs-12">建造年代：</span>
                                            <span class="tc-333 fs-12">2010年</span>
                                        </li>
                                        <li>
                                            <span class="tc-999 fs-12">总户数：</span>
                                            <span class="tc-333 fs-12">400户</span>
                                        </li>
                                        <li>
                                            <span class="tc-999 fs-12">建筑类型：</span>
                                            <span class="tc-333 fs-12">板楼</span>
                                        </li>
                                        <li>
                                            <span class="tc-999 fs-12">楼栋总数：</span>
                                            <span class="tc-333 fs-12">10栋</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 右侧 -->
                    <div class="page-content-box-right fn-right">
                        <div class="price pb-22">
                            <div class="price-top fn-clear mb-20">
                                <div class="price-top-left fn-left">
                                    <span class="fs-44 mr-28">380<span class="fs-14">元/月</span></span>
                                    <span class="tc-333 fs-14" style="color:#E41717;">整租</span>
                                </div>
                                <div class="price-top-right fn-right">
                                    <span class="fs-12">首付预算咨询</span><br>
                                    <span class="fs-12">房贷计算器</span>
                                </div>
                            </div>
                            <div class="price-bottom fs-14">
                                <span>15.3万</span>
                                <span class="tc-666">降幅3%</span>
                                <span>降价提醒我</span>
                            </div>
                        </div>
                        <div class="room-detail mb-22">
                            <ul class="room-detail-top fn-clear pt-20 mb-20">
                                <li>
                                    <span class="tc-333 fs-20">2室1厅</span><br>
                                    <span class="tc-999 fs-12">高楼层/共23层</span>
                                </li>
                                <li>
                                    <span class="tc-333 fs-20">朝南</span><br>
                                    <span class="tc-999 fs-12">简装/有电梯</span>
                                </li>
                                <li>
                                    <span class="tc-333 fs-20">78.98平米</span><br>
                                    <span class="tc-999 fs-12">高楼层/共23层</span>
                                </li>
                            </ul>
                            <ul class="room-detail-bottom fs-14">
                                <li>
                                    <span class="tc-999">小区名称：</span>
                                    <u class="tc-333">万科绿色城市</u>
                                </li>
                                <li>
                                    <span class="tc-999">所在区域：</span>
                                    <span class="tc-333">浦东新区 -北蔡 </span>&nbsp;
                                    <span style="color:#257EDF;">查看地图</span>
                                </li>
                                <li>
                                    <span class="tc-999">看房时间：</span>
                                    <span class="tc-333">随时看房</span>
                                </li>
                                <li>
                                    <span class="tc-999">详细地址：</span>
                                    <u class="tc-333">零陵路583号</u>
                                </li>
                            </ul>
                        </div>
                        <div class="counselor-detail pt-24 pl-20 pr-20 fn-clear">
                            <div class="counselor-detail-left fn-clear fn-left">
                                <div class="detail-left-top fn-clear">
                                    <div class="portrait fn-left mr-8"></div>
                                    <div class="msg tc-333 fn-left">
                                        <span class="fs-16">赵梦溪</span>
                                        <span class="tc-999 fs-12">高级置业顾问</span><br>
                                        <span class="fs-14">138-921-5050</span>
                                    </div>
                                </div>
                                <div class="detail-left-bottom fs-12 tc-fff fn-right">在线咨询</div>
                            </div>
                            <div class="counselor-detail-right fn-right">
                                <div class="" style="width: 72px; height: 72px; background: yellow;"></div>
                                <span class="tc-999 fs-12">微信扫码拨号</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 周边配套 -->
                <div class="mb-40">
                    <div class="tc-333 fs-20 mb-20">周边配套</div>
                    <div style="width: 1200px; height: 500px;">周边配套哦</div>
                </div>
            </div>
        </div>
        <!-- 推荐租房 -->
        <div class="recommend-hand-room">
            <div class="recommend-hand-room-content pt-40 pb-40">
                <div class="tc-333 fs-20 mb-20">推荐租房</div>
                <ul class="fn-clear">
                    <li>
                        <el-image style="width: 270px; height: 180px;" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                        <div class="pl-20 pr-20">
                            <h3 class="mb-18 tc-333 fs-16">金地悦风华小区</h3>
                            <div>
                                <span class="mr-10 tc-999 fs-12">2室1厅|122平米|整租</span>
                                <span class="fn-right mr-10 fs-16 money">2950元/月</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <el-image style="width: 270px; height: 180px;" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                        <div class="pl-20 pr-20">
                            <h3 class="mb-18 tc-333 fs-16">金地悦风华小区</h3>
                            <div>
                                <span class="mr-10 tc-999 fs-12">2室1厅|122平米|整租</span>
                                <span class="fn-right mr-10 fs-16 money">2950元/月</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <el-image style="width: 270px; height: 180px;" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                        <div class="pl-20 pr-20">
                            <h3 class="mb-18 tc-333 fs-16">金地悦风华小区</h3>
                            <div>
                                <span class="mr-10 tc-999 fs-12">2室1厅|122平米|整租</span>
                                <span class="fn-right mr-10 fs-16 money">2950元/月</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <el-image style="width: 270px; height: 180px;" src="../../../static/images/handRoom/slogn.png" fit="cover"></el-image>
                        <div class="pl-20 pr-20">
                            <h3 class="mb-18 tc-333 fs-16">金地悦风华小区</h3>
                            <div>
                                <span class="mr-10 tc-999 fs-12">2室1厅|122平米|整租</span>
                                <span class="fn-right mr-10 fs-16 money">2950元/月</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "RentingDetail",
    data: function() {
        return {
            topSerachInput: "", //顶部查询
            tagsList: ["vip房源", "满五唯一", "近地铁", "近学区", "临时看房"],
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    phone: "31241241241414"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    phone: "31241241241414"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    phone: "31241241241414"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    phone: "31241241241414"
                }
            ]
        };
    },
    methods: {},
    mounted: function() {}
};
</script>
<style scoped>
.tags-bgcolor {
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 4px;
    font-size: 12px;
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
.page-content-box-left {
    width: 710px;
}
.page-content-box-left .var-box {
    width: 700px;
    height: 500px;
    border: 1px solid #ccc;
}
.page-content-box-left .nav li {
    float: left;
    width: 100px;
    height: 40px;
}
/* 基本信息 */
.page-content-box-left .basic-msg {
    margin-bottom: 60px;
}
.page-content-box-left .basic-msg ul li {
    float: left;
    width: 177px;
    margin-bottom: 14px;
}
/* 配套设施 */
.facility {
    /* margin-bottom: 60px; */
}
.facility .facility-box {
}
.facility .facility-box li {
    float: left;
    width: 70px;
    margin: 0 90px 44px 0;
    text-align: center;
}
.facility .facility-box li:nth-of-type(5n) {
    margin-right: 0;
}
.facility .facility-box li .icon {
    width: 70px;
    height: 56px;
}
/* 房源特色 */
.page-content-box-left .room-feature .room-feature-detail li .detail-title {
    width: 120px;
}
.page-content-box-left .room-feature .room-feature-detail li ul li {
    margin-bottom: 10px;
}
.page-content-box-left .room-feature .room-feature-detail li ul li:last-child {
    margin-bottom: 0;
}
.page-content-box-left .room-feature .room-feature-detail li.mental .detail {
    width: 590px;
}
/* 看房记录 */
.page-content-box-left .room-record .record-data {
    width: 196px;
}
.page-content-box-left .room-record .record-data li {
    text-align: center;
}
/* 小区信息 */
.page-content-box-left .community-msg-box .community-msg .community-msg-right {
    width: 434px;
    height: 208px;
    background: rgba(249, 249, 249, 1);
}
.page-content-box-left
    .community-msg-box
    .community-msg
    .community-msg-right
    .msg-1
    li {
    float: left;
    margin-right: 50px;
}
.page-content-box-left
    .community-msg-box
    .community-msg
    .community-msg-right
    .msg-1
    li:last-child {
    margin-right: 0;
}
.page-content-box-left
    .community-msg-box
    .community-msg
    .community-msg-right
    .msg-1 {
    border-bottom: 2px solid #eee;
}
.page-content-box-left
    .community-msg-box
    .community-msg
    .community-msg-right
    .msg-2
    li:nth-of-type(3n) {
    margin-right: 0;
}
.page-content-box-left
    .community-msg-box
    .community-msg
    .community-msg-right
    .msg-2
    li {
    float: left;
    width: 140px;
    margin-bottom: 15px;
}
.page-content-box-right {
    width: 422px;
}
.page-content-box-right .price {
    border-bottom: 2px solid #f3f4f9;
}
.page-content-box-right .price-top-left:first-child {
    color: #e41717;
}
.page-content-box-right .price-top-right {
    color: #257edf;
}
.page-content-box-right .price-bottom span {
    margin-right: 10px;
}
.page-content-box-right .price-bottom span:first-child {
    color: #5baf02;
}
.page-content-box-right .price-bottom span:last-child {
    display: inline-block;
    width: 87px;
    height: 25px;
    border: 1px solid #fa6400;
    color: #fa6400;
    text-align: center;
    line-height: 25px;
}
.page-content-box-right .room-detail {
}
.page-content-box-right .room-detail .room-detail-top {
    border-bottom: 2px solid #f3f4f9;
}
.page-content-box-right .room-detail .room-detail-top li {
    float: left;
    width: 33%;
    padding-bottom: 20px;
}
.page-content-box-right .room-detail .room-detail-bottom li {
    margin-bottom: 10px;
}
.page-content-box-right .room-detail .room-detail-bottom li:last-child {
    margin-bottom: 0;
}
.page-content-box-right .counselor-detail {
    width: 382px;
    height: 116px;
    box-shadow: 0px 2px 9px 0px rgba(221, 221, 221, 0.5);
}
.page-content-box-right .counselor-detail .counselor-detail-left {
    width: 228px;
}
.counselor-detail .counselor-detail-left .detail-left-top .portrait {
    width: 60px;
    height: 60px;
    border: 1px solid #ccc;
    border-radius: 50%;
}
.counselor-detail .counselor-detail-left .detail-left-bottom {
    width: 140px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background: #e41717;
}
/* 二手房推荐 */
.recommend-hand-room {
    width: 100%;
    height: 378px;
    background: #f6f6f6;
}
.recommend-hand-room .recommend-hand-room-content {
    width: 1200px;
    margin: 0 auto;
}
.recommend-hand-room .recommend-hand-room-content ul li {
    float: left;
    width: 270px;
    height: 250px;
    margin-right: 40px;
    background: #fff;
}
.recommend-hand-room .recommend-hand-room-content ul li:last-child {
    margin-right: 0;
}
.recommend-hand-room .recommend-hand-room-content ul li .money {
    color: #f72c2c;
}
</style>



