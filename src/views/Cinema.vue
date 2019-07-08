<template>
  <div>
      <div class="bgc" v-if="movieInfo!=null">
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
                            <div class="serve_line">{{movieInfo.country}}  /  {{movieInfo.totaltime}}</div>
                            <div class="serve_line">{{movieInfo.date}} 上映</div>
                        </div>

                        <div class="float_left">
                            <div class="btns">
                                <p><i class="glyphicon glyphicon-heart"></i>想看</p>
                                <p><i class="glyphicon glyphicon-pencil"></i>评分</p>
                            </div>
                            <router-link :to="{path:'/movieDetail', query:{type:type,movieId: movieInfo.movieId}}" tag="div" class="btn_buy">
                                    查看详情
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
    <CinemaTypeChoice></CinemaTypeChoice>

    <div class="cinema" v-if="cinemaList!=null">
      <div class="cinema_title">影院列表</div>
      <ul>
        <li v-for="(item,i) in cinemaList" :key='i'>
            <div class="row">
                <div class="col-xs-10 col-md-10 text_left">
                    <p>{{item.name}}</p>
                    <p>地址：{{item.address}}</p>
                </div>
                <div class="col-xs-1 col-md-1 text_center">
                    <div><span class="price">￥38</span>起</div>
                </div>
                <div class="col-xs-1 col-md-1 ">
                    <router-link :to="{path:'/cinemaDetail',query:{cinemaId:item.cinemaId}}" tag="a" class="buy">
                        选座购票
                    </router-link>
                </div>
            </div>
        </li>
      </ul>
    </div>
    <nav aria-label="Page navigation" v-if="num!=null">
        <ul class="pagination">
            <li>
            <a href="#" aria-label="Previous">
                <span aria-hidden="true">上一页</span>
            </a>
            </li>

            <li :class="i==activeIndex?'active':''" @click="getData(i)"  v-for="(item,i) in num" :key="i"><a href="javascript:;">{{i+1}}</a></li>

            <li>
            <a href="#" aria-label="Next">
                <span aria-hidden="true">下一页</span>
            </a>
            </li>
        </ul>
    </nav>   

  </div>
</template>
<script>
import CinemaTypeChoice from "../components/CinemaTypeChoice";
export default {
    data(){
        return {
            activeIndex:0,
            movieInfo:null,
            type:null,
            cinemaList:null,
            num:null,
        }
    },
    components: {
        CinemaTypeChoice
    },
    created() {
        this.getData(0)
        var movieId = this.$route.query.movieId;
        var type = this.$route.query.type;
        this.type = type;
        var nameHot = 'moviesList'
        if(type == 2){
            nameHot = 'moviesComeList'
        }
        
        var _this = this;
        if(movieId != undefined){
            var url = this.$store.state.apiUrl + "api/"+nameHot+"?&limit=" + 
            1 + "&page=" + 0 + "&text=" + movieId;
            this.$axios.get(url).then(function(result){
                _this.movieInfo = result.data.data[0]
            }).catch(function(error){
                console.log(error)
            })
        }
    },
    methods: {
        getData(page){
            this.activeIndex = page;
            var _this = this
            this.$axios.get(this.$store.state.apiUrl + "api/cinemasList?&limit=" + 10 + "&page=" + page + "&text=" + "")
                .then(function(result) {
                _this.cinemaList = result.data.data;
                _this.num = result.data.num;
                }).catch(function(error){
                    console.log(error)
                })
        }
    },
};
</script>
<style lang="scss" scoped>
.cinema {
  width: 1120px;
  margin: 0 auto;
  margin-top: 30px;

  .cinema_title {
    font-size: 18px;
    color: #333333;
    position: relative;
    text-align: left;
    padding-left: 8px;
  }
  .cinema_title:after {
    content: "";
    display: block;
    position: absolute;
    top: 4px;
    left: 0;
    width: 5px;
    height: 18px;
    background-color: #f34d41;
  }
}
ul{
    list-style: none;
    margin: 20px 0 0 0;
    padding: 0;
    p{
        padding: 0;
        margin: 0;
    }
    li{
        padding: 20px 0;
        color: #999999;
        font-size: 16px;
        border-bottom: 1px dashed #e5e5e5;
        p:first-child{
            margin-bottom: 8px;
            color: #333333;
        }
        p:nth-child(2){
            font-size: 13px;
            white-space:nowrap; 
            text-overflow:ellipsis; 
            overflow:hidden;
        }
        .price{
            line-height: 50px;
            color: #f03d37;
        }
        .buy{
            width: 80px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            border-radius: 50px;
            float: right;
            display: block;
            font-size: 15px;
            background-color: #f03d37;
            margin: 10px 0 10px 0;
            
        }
        .text_left{
            text-align: left;
        }
        .text_center{
            text-align: center;
        }
    }
}
a{
    text-decoration: none;
}
//分页
.pagination {
    display: inline-block;
    padding-left: 0px;
    margin: 20px 0;
    border-radius: 4px;
    font-size: 16px;
    a{
        color: #333333;
        margin: 0 2px;
    }
    .active{
       a{
        background-color: #F34D41;
        border:1px solid #F34D41;
        color: #fff;
       }
    }
    a:hover{
        color: #333333;
        border:1px solid #F34D41;
    }
}  

// 头部
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
    margin-bottom: 120px;
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
</style>
