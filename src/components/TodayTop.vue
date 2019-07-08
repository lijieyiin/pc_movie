<template>
    <div>
        <div class="today_top">
            <div class="head text_red">今日票房</div>
            <div class="top_list">
                <div class="winner">
                    <router-link tag="div" :to="{path:'/movieDetail',query:{type:1,movieId:watchlistchild[0].movieId}}">
                        <div class="winner_img">
                            <div class="ranking-top-icon">
                                <i class="iconfont icon-icon22"></i>
                            </div>
                            <img :src=watchlistchild[0].img alt="">
                        </div>
                        <div class="winner_info">
                            <div>
                                <span>{{watchlistchild[0].title}}</span>
                                <p class="winnner_num text_red">3457.09万</p>
                            </div>
                        </div>
                    </router-link>
                    <div class="other_info">
                        <li v-for="(item,i) in watchlistchild.slice(1)" :key="i">
                           <router-link tag="div" :to="{path:'/movieDetail',query:{type:1,movieId:item.movieId}}">
                                <div class="other_num float_left">
                                <i :class="i==1||i==0?'text_red':'text_grey'">{{i+2}}</i>
                                <span>{{item.title}}</span>
                                </div>
                                <div class="text_red float_right other_total">595.29万</div>
                           </router-link>
                        </li>
                    </div>
                </div>
            </div>
            <div class="adv">
                <div class="adv_title float_left">
                    <p>今日大盘 </p>
                </div>
                <div class="adv_info">
                    <p class="adv_num">
                        <span class="head_num text_red">5256.1万</span>
                        <span class="float_right text_red">查看更多<span class="glyphicon glyphicon-chevron-right"></span></span>
                    </p>
                    <p class="adv_time">北京时间 15:40:39</p>
                    <span class="adv_from float_right">猫眼专业版实时票房数据</span>
                </div>
            </div>
        </div>
        <div class="today_top want_margin">
            <div class="head text_orange">最受期待
                <span class="float_right text_orange head_right">查看更多<span class="glyphicon glyphicon-chevron-right"></span></span>
            </div>
            <div class="top_list">
                <div class="winner" v-for="(item,i) in comlistchild.slice(0,4)" :key="i">
                    <router-link :to="{path:'/movieDetail', query:{type:2,movieId: item.movieId}}" tag="div">
                        <div class="winner_img">
                            <div class="ranking-top-icon bgc_orange">
                                <i v-if="i==0" class="iconfont icon-icon22"></i>
                                <i v-if="i!=0">{{i+1}}</i>
                            </div>
                            <img :src=item.img alt="">
                        </div>
                        <div class="winner_info">
                            <div>
                                <span>{{item.title}}</span>
                                <p class="winnner_num text_orange">{{item.score}}人想看</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="other_info">
                    <li v-for="(item,i) in comlistchild.slice(4)" :key="i">
                        <router-link :to="{path:'/movieDetail', query:{type:2,movieId: item.movieId}}" tag="div">
                            <div class="other_num float_left">
                            <i :class="i==0||i==1?'text_orange':'text_grey'">{{i+5}}</i>
                            <span>{{item.title}}</span>
                            </div>
                            <div class="text_orange float_right other_total">{{item.score}}人想看</div>
                       </router-link>
                    </li>
                </div>
            </div>
        </div>

          <div class="today_top top100_margin">
            <div class="head text_orange">TOP 100
                <span class="float_right text_orange head_right">查看完整榜单<span class="glyphicon glyphicon-chevron-right"></span></span>
            </div>
            <div class="top_list">
                <router-link class="winner" tag="div" :to="{path:'/movieDetail',query:{type:1,movieId:hotlistchild[0].movieId}}">
                    <div class="winner_img">
                        <div class="ranking-top-icon bgc_orange">
                            <i class="iconfont icon-icon22"></i>
                        </div>
                        <img :src=hotlistchild[0].img alt="">
                    </div>
                    <div class="winner_info">
                        <div>
                            <span>{{hotlistchild[0].title}}</span>
                            <p class="winnner_num text_orange">{{hotlistchild[0].score}}分</p>
                        </div>
                    </div>
                </router-link>
                    <div class="other_info">
                        <li v-for="(item,i) in hotlistchild.slice(1)" :key="i">
                            <router-link tag="div" :to="{path:'/movieDetail',query:{type:1,movieId:item.movieId}}">
                                <div class="other_num float_left">
                                <i :class="i==1||i==0?'text_orange':'text_grey'">{{i+2}}</i>
                                <span>{{item.title}}</span>
                                </div>
                                <div class="text_orange float_right other_total">{{item.score=='暂无评分'?item.score:item.score+'分'}}</div>
                            </router-link>
                        </li>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['hotlistchild','comlistchild','watchlistchild'],
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.today_top{
    overflow: hidden;
    margin-bottom: 65px;
    .head{
        text-align: left;
        font-size: 26px;
        margin-bottom: 15px;
    }
    .top_list{
        .winner{
            overflow: hidden;
            width: 100%;
            margin-bottom: 10px;
            .winner_img{
                float: left;
                width: 120px;
                height: 78px;
                position: relative;
                img{
                    display: block;
                    width: 120px;
                    height: 78px; 
                }
                .ranking-top-icon {
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 22px;
                    height: 25px;
                    line-height: 25px;
                    text-align: center;
                    background-color: #EF4238;
                    i{
                        color: #e5e5e5;
                    }
                }
            }
            .winner_info{
                overflow: hidden;
                height: 78px;
                border: 1px solid #e5e5e5;
                border-left: 0;
                width: calc(100%-120px);
                div{
                    padding: 10px;
                    text-align: left;
                    span{
                        display: block;
                        font-size: 18px;
                    }
                    p{
                        margin: 5px 0;
                        font-size: 15px;
                    }
                }
            }
        }
    }
}
.text_red{
    color: #EF4238; 
}
.text_grey{
    color: #999999;
}
.text_orange{
    color:#FFB401;
}
.bgc_orange{
    background-color:#FFB401 !important;
}
.float_right{
    float: right;
}
.float_left{
    float: left;
}
//最受期待
.want_margin{
    margin-top: -20px !important;
}
//TOP 100
.top100_margin{
    margin-top: 100px !important;
}
.other_info{
    li{
        list-style: none;
        overflow: hidden;
        .other_num{
            line-height: 30px;
            i{
                font-size: 20px;
                width: 32px;
                display: inline-block;
                text-align: left;
                padding: 5px 5px 5px 5px;
            }
            span{
                font-size: 16px;
                padding-left: 5px;
            }
        }
        .other_total{
            line-height: 44px;
        }
    }
    li:hover{
        background-color: #E1E1E1;
    }
}
//今日大盘
.adv{
    margin-top:30px; 
    height: 102px;
    overflow: hidden;
    .adv_title{
        width: 12%;
        height: 100%;
        background-color: #EF4238;
        overflow: hidden;
        text-align: center;
        p{
            width:25px;
            margin: 6px auto;
            padding: 0;
            color: #fff;
            font-size: 16px;
        }
    }
    .adv_info{
        height: 100%;
        overflow: hidden;
        border: 1px solid #e5e5e5;
        border-left:0; 
        background-color: #FDFDFD;
        .adv_num{
            overflow: hidden;
            padding: 20px 5px 5px 10px;
            margin-bottom: 0px;
            .float_right{
                padding-top: 8px;
            }
        }
        .adv_time{
            margin: 0;
            text-align: left;
            padding-left: 10px; 
            color: #999999;
        }
        .adv_from{
            color: #999999;
            padding-right: 5px;
        }
    }
}
.head_num{
    font-size: 26px;
    color: #EF4238;
    font-weight: bold;
    float: left;
}
.head_right{
    font-size: 15px;
    float: right;
    margin-top: 10px;
    padding-right: 14px;
}
</style>
