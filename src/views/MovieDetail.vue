<template>
    <div v-if="movieInfo!=null">
        <div class="bgc">
            <div class="cinemeinfo">
                <div class="inner">
                    <div class="inner_img">
                        <img :src=movieInfo.img alt="">
                    </div>
                    <div class="inner_info">
                        <h3>{{movieInfo.title}}</h3>
                        <p class="address text-ellipsis">{{movieInfo.nailName}}</p>
                        <p class="telphone">{{movieInfo.type}}</p>
                        <div class="server">
                            <div class="serve_line">{{movieInfo.country}}  /  {{movieInfo.totalTime}}</div>
                            <div class="serve_line">{{movieInfo.date}} 上映</div>
                        </div>

                        <div class="float_left">
                            <div class="btns">
                                <p><i class="glyphicon glyphicon-heart"></i>想看</p>
                                <p><i class="glyphicon glyphicon-pencil"></i>评分</p>
                            </div>
                            <router-link class="btn_buy" tag="div" :to="{path:'/cinema',query:{type:type,movieId:movieInfo.movieId}}">
                                购票
                            </router-link>
                        </div>
                        <div class="user_like">
                            <p>{{type==1?'用户评分：':'想看人数：'}}<span class="icon_yellow score_fontsize">{{movieInfo.score}}</span></p>

                            <i :class="i<4?'glyphicon glyphicon-star icon_yellow':'glyphicon glyphicon-star'" v-for="(item,i) in 5" :key="i"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="info_left">
                <!-- 简介 -->
                <div class="bar_title">
                    <span class="red_bar"></span>
                    <span>剧情简介</span>
                </div>
                <div class="content">
                    {{movieInfo.content}}
                </div>

                <!-- 演职人员 -->
                <div class="bar_title">
                    <span class="red_bar"></span>
                    <span>演职人员</span>
                </div>

                <div class="actor act_margin">
                    <p class="director">导演</p>
                    <div class="actor_img">
                        <img src="https://p0.meituan.net/moviemachine/7af3208612ea21acc6bd9d3275d9899060103.jpg@128w_170h_1e_1c" alt="">
                    </div>
                    <p class="name">邱礼涛</p>
                </div>

                <div class="actor" v-for="(itemy,y) in actorName" :key="y+'a'">
                    <p class="director">{{y==0?'演员':''}}</p>
                    <div class="actor_img">
                        <img :src=itemy.img alt="">
                    </div>
                    <p class="name text_flow">{{itemy.name}}</p>
                    <p class="nailname text_flow">饰：{{itemy.nailName}}</p>
                </div>

                <!-- 热门短评 -->
                <div class="bar_title">
                    <span class="red_bar"></span>
                    <span>热门短评</span>
                    <a href="javascript:;">写短评</a>
                </div>
                <div class="short_msg" v-for="(itemz,z) in 8" :key="z+'z'">
                    <div class="msg_img">
                        <img src="https://img.meituan.net/avatar/e42b7e39703f6f81874f187c854458a938771.jpg@100w_100h_1e_1c" alt="">
                        <span>v{{z+1}}</span>
                    </div>
                    <div class="msg_info">
                        <p>南阳</p>
                        <p>07-01
                            <i :class="k<4?'glyphicon glyphicon-star icon_yellow':'glyphicon glyphicon-star'" v-for="(itemk,k) in 5" :key="k"></i>
                        </p>
                    </div>
                    <p class="icon">
                        <i class="glyphicon glyphicon-thumbs-up"></i>
                        <span>1232</span>
                    </p>
                    <div class="msg_content">
                        喜欢漫威多年，也很喜欢蜘蛛侠。漫威的剧每部都看过，这一部感觉很失望。正片以纪念来开场，开始就让人很不舒服。复联4这么多人走了，一看见钢铁侠相关就泪目。然后剧中就是不停的以钢铁侠来戳观众的心，从各种细节到后来甚至神秘客戴上眼镜我都觉得和小尼挂相。蜘蛛侠做新战衣的样子也像极了小尼，后来蜘蛛侠一手持盾一手拿着锤子一样的东西像谁？看完整个剧后，除了非常想念钢铁侠外没有其它感觉。剧情无聊，蜘蛛侠大战无人机吗？除了铁虫父子感情深厚，剩下的就是扎心。彩蛋也是有病？我也很喜欢蜘蛛侠，弟弟还这么小，为啥要不停虐他？？他在被火车撞之前那段就看得非常的难过了，这结局更是无敌了。最后一句，我还是爱漫威，最爱钢铁侠。
                    </div>
                </div>
            </div>
            <div class="info_right">
                <div>
                    <!-- 相关资讯 -->
                    <div class="bar_title">
                        <span class="red_bar"></span>
                        <span>相关资讯</span>
                    </div>
                    <div class="news" v-for="p in 3" :key="p+'p'">
                        <div class="new_img">
                            <img src="https://p0.meituan.net/movie/88cc4f8433af207f96a4e9105e219c76121495.jpg@140w_86h_1e_1c" alt="">
                        </div>
                        <div class="new_info">
                            <p class="info">《蜘蛛侠：英雄远征》上节目玩游戏，荷兰弟模仿海豚吓坏老吉！</p>
                            <div> 
                                刺猬电影 
                                <i class="glyphicon glyphicon-eye-open">12121</i>
                                <i class="glyphicon glyphicon-comment">12121</i>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <!-- 相关电影 -->
                    <div class="bar_title margin_top">
                        <span class="red_bar"></span>
                        <span>相关电影</span>
                    </div>
                    <div class="movies" v-for="(item,i) in relMovieList" :key="i+'1'">
                        <router-link :to="{path:'/cinema', query:{type:1,movieId: item.movieId}}" tag="div" class="movie_img">
                            <img :src=item.img alt="">
                        </router-link>
                        <div class="text_flow">{{item.title}}</div>
                        <div class="icon_yellow">{{item.score}}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    
    data(){
        return {
            type:null,
            movieInfo:null,
            relMovieList:null,
            actorName:[{
                img:'https://p1.meituan.net/movie/ed673aef7fa2432e6896fed53ff2d60541128.jpg@128w_170h_1e_1c',
                name:'刘德华',
                nailName:'余顺天'
            },{
                img:'https://p0.meituan.net/movie/0ef5d4f042a07331d2dfada08fa314e548434.jpg@128w_170h_1e_1c',
                name:'古乐天',
                nailName:'地藏'
            },{
                img:'https://p1.meituan.net/movie/aee81697f03d667f87d5c678f6985e7f131294.jpg@128w_170h_1e_1c',
                name:'苗侨伟',
                nailName:'林正风'
            },{
                img:'https://p0.meituan.net/movie/db84d9cc4df03e56629a9a604918714441158.jpg@128w_170h_1e_1c',
                name:'林嘉欣',
                nailName:'邹文凤'
            }]
        }
    },
    methods: {
        getRelMovie(){
            var url = this.$store.state.apiUrl + "api/moviesList?&limit=" + 
            6 + "&page=" + 0 + "&text=" + "";
            var _this = this;
            _this.$axios.get(url).then(function(result){
                _this.relMovieList = result.data.data
            }).catch(function(error){
                console.log(error)
        })
        }
    },
    created(){
        var movieId = this.$route.query.movieId
        var type = this.$route.query.type
        this.type = type;
        //正在热映
        var url = this.$store.state.apiUrl + "api/moviesList?&limit=" + 
            1 + "&page=" + 0 + "&text=" + movieId
        var _this = this
        if(type == 2){//即将上映
            url = this.$store.state.apiUrl + "api/moviesComeList?&limit=" + 
            1 + "&page=" + 0 + "&text=" + movieId;
        }
        this.$axios.get(url).then(function(result){
            _this.movieInfo = result.data.data[0]
            _this.getRelMovie()
        }).catch(function(error){
            console.log(error)
        })
    }
}
</script>
<style lang="scss" scoped>
.text_flow{
    white-space:nowrap; 
    text-overflow:ellipsis;
    overflow: hidden;
    width: 120px;
}
.float_left{
    float: left;
}
//评分星星
.icon_yellow{
    color:#ffc600;
}
//评分字体大小
.score_fontsize{
    font-size: 20px;
    font-weight: bold;
    padding-right: 10px;
}
.text-ellipsis{
    white-space:nowrap; 
    text-overflow:ellipsis; 
    overflow:hidden;
}
.bgc{
    width: 100%;
    height: 320px;
    min-width: 1200px;
    background:linear-gradient(to bottom, #6D4251 0%,#392f59 100%);
    float: left;
    margin-bottom: 80px;
}
.cinemeinfo{
    width: 100%;
    height: 320px;
    margin-top:70px;
    min-width: 1200px;
    color: #fff;
}
.inner{
    width: 1120px;
    margin: 0 auto;
    .inner_img{
        float: left;
        width: 240px;
        height: 330px;
        border: 4px solid #fff;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .inner_info{
        overflow: hidden;
        text-align: left;
        padding-left: 30px;
        h3{
            margin: 0 0 10px 0;
        }
    }
    .server{
        margin-top: 10px;
        .serve_line{
            position: relative;
            margin-bottom: 10px;
           
        }
        .box{
            border: 1px solid hsla(0,0%,100%,.6);
            border-radius: 2px;
            min-width: 60px;
            height: 22px;
            line-height: 23px;
            text-align: center;
            margin-right: 5px;
        }

    }
}
.btns{
    overflow: hidden;
    p{
        float:left;
        width: 120px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        background-color: #756189;
        margin-right: 10px;
        border-radius: 5px;
        i{
            padding-right:5px;
        }
    }
}
.btn_buy{
    width:250px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 5px;
    background-color: #df2d2d; 
}
//用户评分
.user_like{
    padding-left: 20px;
    overflow: hidden;
}

//信息
.info{
    width: 1200px;
    margin: 10px auto;
    padding-top: 40px;
    overflow: hidden;
    font-size: 18px;
    font-family: '微软雅黑';
    color:#333333;
    .info_left{
        width: 70%;
        float: left;
        padding-right: 60px;
        .content{
            text-align:justify;
            padding-top:14px;
            margin-bottom: 60px;
        }
    }
    .info_right{
        float: left;
        width: 30%;
    }
}
.bar_title{
    text-align: left;
    .red_bar{
        background-color: #df2d2d;
        padding-right: 6px;
        margin-right: 5px;
        
    }
    a{
        color: #df2d2d;
        padding: 4px 10px;
        border: 1px solid #df2d2d;
        border-radius: 20px;
        color: 15px;
        float: right;
        margin-top: -10px;
    }
}
.actor{
    float:left;
    margin: 10px 25px 60px 0;
    font-size: 16px;
    overflow: hidden;
    .director{
        text-align: left;
        height: 22.5px;
    }
    .actor_img{
        width: 128px;
        height: 170px;
        background-color: #ccc;
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .name{
        margin-bottom: 0;
    }
    .nailname{
        font-size: 15px;
    }
}
.act_margin{
    margin-right: 40px;
}
//热门短评
.short_msg{
    overflow: hidden;
    margin-top: 20px;
    font-size:15px;
    .msg_img{
        margin: 0 20px 0 0px;
        width: 50px;
        height: 50px;
        float: left;
        position: relative;
        img{
            border-radius: 50%;
            width:100%;
            height: 100%;
            display: block;
        }
        span{
            position: absolute;
            bottom: 0;
            right: 0;
            color: #fff;
            background-color: #ffc600;
            border-radius: 50%;
               width: 20px;
               height: 20px;
               line-height: 20px;
               text-align: center;
        }
    }
    .msg_info{
        float: left;
        text-align: left;
        p{
            margin-bottom: 0;
        }
    }
    p.icon{
        float: right;
        padding-top: 10px;
        span{
            padding-left: 5px;
        }
    }
    .msg_content{
        float: left;
        margin:10px 0 10px 70px;
        text-align: justify;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }
}
//相关资讯
.news{
    margin: 10px 0;
    .new_img{
        float:left;
        width: 140px;
        height: 86px;
        background-color: #ccc;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .new_info{
        overflow: hidden;
        font-size: 16px;
        padding-left: 10px;
        .info{
            text-align:left;
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2; 
            width: 200px;
            height: 54px;
            margin: 0;
            padding: 0;
        }
        div{
            padding-top: 16px;
            color: #ccc;
            text-align: left;
            font-size: 14px;
            i{
                padding: 0 5px;
            }
        }
    }
}
.margin_top{
    margin-top: 50px;
}
// 相关电影
.movies{
    float: left;
    margin: 10px 10px 0 0;
    .movie_img{
        width: 106px;
        height: 145px;
        background-color: #ccc;
        img{
            width: 106px;
            height: 145px;
            display: block;
        }
    }
    .text_flow{
        width: 106px;
    }
   
}
</style>
