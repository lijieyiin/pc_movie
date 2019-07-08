<template>
    <div>
        <movieNav></movieNav>
        <MovieTypeChoice></MovieTypeChoice>
        <div class="movie">
            <div :class="i%6==0?'movie_info mvoie_finfo_margin':'movie_info mvoie_oinfo_margin'"  v-for="(item,i) in hotMovieList" :key="i">
                <router-link tag="div" :to="{path:'/movieDetail',query:{type:1,movieId:item.movieId}}">
                    <div class="movie_img">
                        <span>购票</span>
                        <img :src=item.img alt="">
                    </div>
                    <div class="movie_title"><p class="p_title">{{item.title}}</p></div>
                    <div class="movie_score">{{item.score}}</div>
                </router-link>
            </div>
        </div>
        <nav aria-label="Page navigation">
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
import movieNav from '../views/Movie.vue'
import MovieTypeChoice from '../components/MovieTypeChoice.vue'
export default {
    data() {
        return {
            activeIndex:0,
            num:null,
            hotMovieList:null,
        }
    },
    methods: {
        getData(page){
            this.activeIndex = page;
            var _this = this
            this.$axios.get(this.$store.state.apiUrl + "api/moviesList?&limit=" + 24 + "&page=" + page + "&text=" + "")
                .then(function(result) {
                _this.hotMovieList = result.data.data;
                _this.num = result.data.num;
                }).catch(function(error){
                    console.log(error)
                })
        }
    },
  
    components:{
        movieNav,
        MovieTypeChoice
    },
    created() {
        this.getData(0)
    },
}
</script>
<style lang="scss" scoped>
.movie{
    width: 1120px;
    margin: 0 auto;
    overflow: hidden;
}
.mvoie_finfo_margin{
    margin: 30px 0 0 0;
}
.mvoie_oinfo_margin{
    margin: 30px 0 0 30px;
}
.movie_info{
    float: left;
    font-size: 16px;
    .movie_img{
        position: relative;
        text-align: center;
        span{
            position: absolute;
            bottom:5px;
            right:5px;
            padding: 0px 2px;
            color: #fff;
            background:#F34D41;  
        }
        img{
            display: block;
            width: 160px;
            height: 220px;
        }
    }
    .movie_title{
        margin-top:10px;
        color: #333333;
        text-align: center;
        .p_title{
            width: 160px;
            
            margin: 0 auto;
            padding: 0;
            white-space:nowrap; 
            text-overflow:ellipsis; 
            overflow:hidden;
        }
    }
    .movie_score{
        margin-top:10px;
        color: #FFB400;
        font-style: italic;
    }
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

</style>
