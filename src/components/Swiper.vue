<template>
    <div>
           <!-- Swiper -->
           <div class="my_swiper bgc">
             <!-- 电影轮播图 -->
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(item,i) in movieImg" :key="i+'a'" :data-index="i"> 
                          <img :src=item alt>
                      </div>
                  </div>
              </div>
           </div>
        <!-- swiper end -->
            <!-- 电影信息 -->
            <div class="infos my_swiper">
                <div class="movie_info">
                    <h3>{{movieName}}</h3> 
                    <h5><span>{{movieScore}}</span>{{movieScore>10?'人想看':'分'}}</h5>
                </div>
                <div class="bottom_line">
                    <span class='key'>时长：</span><span class="value">{{movieTime}}分钟</span>
                    <span class='key'>类型：</span><span class="value">{{movieType}}</span>
                    <span class='key'>主演：</span><span class="value">{{movieActor}}</span>
                </div>
            </div>
            <div class="my_swiper">
              <ul class="nav nav-pills">
                  <li><a href="javascript:;" class="key">观影时间：</a></li>
                  <li role="presentation" :class="i==activeIndex?'active':''" @click="changeActiveIndex(i)" v-for='(item,i) in movieShow' :key="i"><a href="javascript:;" class="color">{{item}}</a></li>
              </ul>
            </div>
            <div class="my_swiper">
                        <div class="tab-content ">
                            <div class="tab-pane active" id="tab-2">
                                <table class="table table-striped ">
                                    <tbody>
                                        <tr class="my_swiper tabel_head">
                                            <th>放映时间</th>
                                            <th>语言版本</th>
                                            <th>放映厅</th>
                                            <th>售价（元）</th>
                                            <th>选座购票</th>
                                        </tr>
                                            <tr v-for="(item,i) in movieWatchTime" :key="i">
                                                <td>
                                                    <p class="starttime">{{item.beginTime}}</p>
                                                    <p class="endtime">{{item.endTime}}</p>
                                                </td>
                                                <td >{{item.language}}</td>
                                                <td class="normal">{{item.hall}}</td>
                                                <td class="price">￥{{item.price}}</td>
                                                <td>
                                                  <!-- <router-link tag='a' class='buy_btn' to="/selectseat">选座购票</router-link> -->
                                                  <a class='buy_btn' @click="chooseTick(i,cinemaName)">选座购票</a>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
    props:['cinemaName'],
    data(){
        return {
          movieList:null,
          movieImg:null,//电影海报
          movieName:null,//电影名称
          movieScore:null,//电影评分
          movieShow:null,//电影观看日期
          movieTime:null,//电影时长
          movieType:null,//电影类型
          movieWatchTime:null,//电影具体观看时间
          movieActor:null,//电影主演
          activeIndex:0,//当前观看日期,
          activeImgIndex:0 //当前电影下标
        }
    },
    methods: {
      //切换海报时改变信息
      changeInfo(index){
            this.activeImgIndex = index;
            this.movieName = this.movieList.movieName[index]
            this.movieScore = this.movieList.movieScore[index]
            this.movieShow = this.movieList.movieShow[index].filter(item=>item!='')//过滤空字符串
            this.movieTime = this.movieList.movieTime[index]
            this.movieType = this.movieList.movieType[index]
            this.movieActor = this.movieList.movieActor[index]
      },
      //改变观影时间的样式
      changeActiveIndex(index){
            this.activeIndex = index
      },
      //选座购票
      chooseTick(index,cinemaName){
        //将选座前的影院+电影+观影时间存入localStorage中
        var obj = {}
        obj.movieImg = this.movieImg[this.activeImgIndex]
        obj.movieName = this.movieName
        obj.movieType = this.movieType
        obj.movieTime = this.movieTime
        obj.cinemaName = cinemaName
        obj.hall = this.movieWatchTime[index].hall
        obj.language = this.movieWatchTime[index].language
        obj.movieShowDate = this.movieShow[this.activeIndex]
        obj.movieWatchStart = this.movieWatchTime[index].beginTime
        obj.moviePrice = this.movieWatchTime[index].price
        
        var arr = [] 
        arr.unshift(obj)
        localStorage.setItem('choiceMoiveInfo',JSON.stringify(arr)) 
        
        this.$router.push('/selectseat')
      }
    },
    created() {
        var cinemaId = this.$route.query.cinemaId;
        var _this = this;
        var url = this.$store.state.apiUrl + "api/findMoviesInfo?&cinemaId=" + cinemaId;

        this.$axios.get(url).then(function(result){
            _this.movieList = result.data.data
            _this.movieImg = result.data.data.movieImg
            _this.movieWatchTime = result.data.data.movieWatchTime

            _this.changeInfo(0)  //默认显示第一个电影信息
        }).catch(function(error){
            console.log(error)
        })
    },
    mounted() {
    var _this = this;

    new Swiper(".swiper-container", {
      slidesPerView: 7,
      spaceBetween: 10,
      centeredSlides: true,
      observer:true,
      
      on: {
        //点击某张电影海报，更改相应的信息
        slideChangeTransitionEnd: function() {
            _this.changeInfo(this.activeIndex)
        }
       
      }
    });
    }
}
</script>

<style lang="scss" scoped>
.my_swiper{
  width: 1220px;
  min-width: 1120px;
  margin: 0 auto;
  overflow: hidden;
}
.bgc{
  padding: 10px;
  background-color: #EFEFEF;
}
.nav{
 padding: 20px 20px 20px 0;
 margin-left: -6px;
}
// swiper
.swiper-container {
  height: 204px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  height: 204px;
  border: 2px solid #fff;

  img {
    width: 100%;
    height: 100%;
  }
}
.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.8);
}
.swiper-slide-active {
  border: 4px solid #F24030;
}

//电影信息
.infos{
    text-align: left;
    margin-top: 10px;
    padding:0 0 16px 0;
    font-family: '微软雅黑';
    border-bottom:1px solid #ccc;
    .movie_info{
      overflow: hidden;
      
        h3{
          float: left;
          color:#333;
          font-weight: 400;
          margin:20px 20px 20px 0;
          
        }
        h5{
          float: left;
          color:#FAAF00;
          margin-top: 22px;
          span{
            font-size: 24px;
          }
        }
    }
    .bottom_line{
        .value{
            color:#151515;
            padding-right:40px; 
        }
    }
}
.key{
    color: #999999;
}
.color{
  color:#333333;
}

.nav > li > a {
    position: relative;
    display: block;
    padding: 5px 5px;
    margin-right:10px;
    border-radius: 50px;
}
.nav-pills>li.active>a{
    background-color: #f03d37;
}
.table > tbody > tr > th,
.table > tbody > tr > td{
  text-align: center;
  border-top:0;
  vertical-align: middle;
}
.tabel_head{
  color:#333333;
  font-size: 16px;
}
.starttime{
  color:#333333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0;
}
.endtime{
  margin-bottom: 0;
  color: #999999;
}
.normal{
  color:#333333;
}
.price{
  font-size: 18px;
  color: #f03d37;
  font-weight: 700;
}
a.buy_btn{
    padding: 6px 8px;
    background-color:#f03d37; 
    box-shadow: 0 2px 10px -2px #f03d37;
    border-radius: 20px;
    color: #fff;
    text-decoration: none;
}

</style>
