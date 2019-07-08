<template>
    <div>
        <div class="hot">
            <div class="movie">
                <!-- 正在热映 -->
                <div class="hot_movie">
                    <div class="head">
                        <p class="head_num text_red">正在热映（52部）</p>
                        <router-link tag='p' to="/movie/moviehot" class="head_right text_red">
                            全部<span class="glyphicon glyphicon-chevron-right"></span>
                        </router-link>
                        
                    </div>
                    <div class="movie_info" v-for="(item,i) in hotList" :key='i'>
                        <div v-if="i<8">
                            <router-link :to="{path:'/movieDetail', query:{type:1,movieId: item.movieId}}" tag="div" class="movie_img">
                            <img :src=item.img alt="">
                            <div class="img_bottom">
                                <p class="movie_name">{{item.title}}</p>
                                <i>{{item.score=='暂无评分'? '':item.score}}</i>
                            </div>
                            </router-link>
                            <router-link :to="{path:'/cinema', query:{type:1,movieId: item.movieId}}" tag="div" class="buy_btn text_red">
                                购票
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- 即将上映 -->
                <div class="hot_movie">
                    <div class="head">
                        <p class="head_num text_blue">即将上映（148部）</p>
                        <router-link tag='p' to="/movie/moviecome" class="head_right text_blue">
                            全部<span class="glyphicon glyphicon-chevron-right"></span>
                        </router-link>
                        
                    </div>
                    <div class="movie_info com_info" v-for="(item,i) in comList" :key='i'>
                        <div v-if="i<8">
                            <router-link :to="{path:'/movieDetail', query:{type:2,movieId: item.movieId}}" tag="div" class="movie_img">
                            <img :src=item.img alt="">
                            <div class="img_bottom">
                               <p class="movie_name">{{item.title}}</p>
                            </div>
                            </router-link>
                            <div class="com_btn">
                                <div class="bgc_grey text_orange">{{item.score}}人想看</div>
                                <div class="btns">
                                    <a href="javascript:;" class="text_grey middle_line">预告片</a>
                                    <router-link :to="{path:'/cinema', query:{type:2,movieId: item.movieId}}" tag="a" class="text_blue">
                                        预售
                                    </router-link>
                            </div>
                            </div>
                            <div class="showtime text_grey">{{item.date}}上映</div>
                        </div>
                    </div>
                </div>

                 <!-- 热播电影 -->
                <div class="hot_movie hot_margin_top">
                    <div class="head ">
                        <p class="head_num text_red">
                            热播电影
                            <span class="type_movie">
                                <a href="#">爱情</a>
                                <a href="#">喜剧</a>
                                <a href="#">动作</a>
                                <a href="#">恐怖</a>
                                <a href="#">动画</a>
                            </span>
                        </p>
                        <router-link tag='p' to="/movie/movieold" class="head_right text_red">
                            全部<span class="glyphicon glyphicon-chevron-right"></span>
                        </router-link>
                        
                    </div>
                    <div class="movie_info" v-for="(item,i) in watchList" :key='i'>
                        <router-link v-if="i<8" :to="{path:'/movieDetail', query:{type:1,movieId: item.movieId}}" tag="div" class="movie_img threeD">
                            <img :src=item.img alt="">
                            <div class="img_bottom">
                                <p class="movie_name">{{item.title}}</p>
                                <i>{{item.score=='暂无评分'? '':item.score}}</i>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <TodayTop v-if="watchList!=null" class="today_top" :hotlistchild=hotList :comlistchild=comList :watchlistchild=watchList></TodayTop>
        </div>
    </div>
</template>
<script>
import TodayTop from '../components/TodayTop.vue'
export default {
    components:{TodayTop},
    data() {
        return {
            hotList:null,
            comList:null,
            watchList:null,
        }
    },
    methods: {
        getMovie(url){
            return new Promise((resolve,reject)=>{
                
                this.$axios.get(url).then(result=>{
                    resolve(result.data.data)
                })
            })
        }
    },
    created() {
        var _this = this;
        var hotUrl =  this.$store.state.apiUrl + "api/moviesList?&limit=" + 
            10 + "&page=" + 0 + "&text=" + "";
        var comUrl = this.$store.state.apiUrl + "api/moviesComeList?&limit=" + 
            10 + "&page=" + 0 + "&text=" + "";
        var watchUrl = this.$store.state.apiUrl + "api/moviesList?&limit=" + 
            10 + "&page=" + 1 + "&text=" + "";
       
       _this.getMovie(hotUrl).then(function(data) {
           _this.hotList = data
           return  _this.getMovie(comUrl)
       }).then(function(data){
            _this.comList = data
           return  _this.getMovie(watchUrl)
       }).then(function(data){
            _this.watchList = data
       }).catch(function(error) {
           console.log(error)
       })
    },
}
</script>
<style lang="scss" scoped>
.hot{
    width: 1200px;
    height:auto;
    margin: -50px auto;
    margin-bottom: 0px;
    overflow: hidden;
    .movie{
        float: left;
        margin: 62px 0 0;
        width: 750px;
        height:auto;
    }
    .today_top{
        float: right;
        margin-top: 62px;
        width: 360px;
    }
}
//正在热映
.hot_movie{
    overflow: hidden;
    margin-bottom: 80px;
    .head{
        overflow: hidden;
        .head_num{
            font-size: 26px;
            float: left;
        }
        .head_right{
            font-size: 15px;
            float: right;
            margin-top: 10px;
            padding-right: 14px;
        }
    }
    //电影信息
    .movie_info{
        width: 160px;
        float: left;
        margin:5px 21px 15px 5px;
        .movie_img{
            width: 160px;
            height: 220px;
            background-color: #ccc;
            position: relative;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
            .img_bottom{
                    position: absolute;
                    bottom:0px;
                    left:0px;
                    background-color:rgba(0,0,0,.3);
                    width:160px;
                    padding-left:5px;
                    text-align: center;
                    p{
                        margin:0;
                    }
                .movie_name{
                    font-size: 16px;
                    color:#fff;
                    float:left;
                    width:120px;
                    padding: 4px;
                    white-space:nowrap; 
                    text-overflow:ellipsis; 
                    overflow:hidden;
                }
                i{
                    display: block;
                    float:right;
                    padding-top: 4px;
                    padding-right: 2px;
                    color:orange;
                    font-size: 18px;
                }
            }
        }
        .buy_btn{
            font-size: 15px;
            text-align: center;
            height: 38px;
            line-height: 38px;
            border: 1px solid #e5e5e5;
            border-top:0;
        }
        .buy_btn:hover{
            box-sizing: border-box;
            background-color:#EF4238; 
            color:#fff;
            border: 1px solid #EF4238;
        }
    }
    //即将上映
    .com_info{
         margin:5px 21px 12px 5px;
        .com_btn{
                border: 1px solid #e5e5e5;
            .btns{
                width: 160px;
                height: 30px;
                line-height: 30px;
                a{  
                    display: inline-block;
                    width: 50%;
                    text-decoration: none;
                }
                a.text_blue:hover{
                    background-color: #2d98f3;
                    color: #fff;
                }
            }
            .middle_line{
                border-right:1px dashed  #e5e5e5;
            }
        }
        .showtime{
            text-align: center;
            padding: 10px;
        }
    }
}
//热播电影
.hot_margin_top{
    margin-top:-40px !important;
}
.type_movie{
    a{
        font-size: 15px;
        padding:0 10px;
        color: #333333;
    }
}
.text_red{
    color: #EF4238;
}
.text_orange{
    color:#FFB400;
    font-size: 15px;
    text-align: left;
    padding: 0;
    margin-left: 5px;
    height: 30px;
    line-height: 30px;
    
}
.text_grey{
    color:#999999;
}
.text_blue{
    color:#2d98f3;
}
.bgc_grey{
    background-color: #FBFBFB;
}

.threeD{
    position: relative;
}
.threeD::after{
    content: '';
    display: block;
    position: absolute;
    top:10px;
    left: -4px;
    width:31px;
    height: 25px;
    background-color: #2d98f3;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 25px;
    background: url('../assets/threeD.png') no-repeat;
    background-size: cover;
}
</style>
