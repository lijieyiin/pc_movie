<template>
    <div>
        <div class="bgc">
            <div class="cinemeinfo" v-if="cinemaList!=null">
                <div class="inner">
                    <div class="inner_img">
                        <img :src=cinemaList.img alt="">
                    </div>
                    <div class="inner_info">
                        <h3>{{cinemaList.name}}</h3>
                        <p class="address text-ellipsis">{{cinemaList.address}}</p>
                        <p class="telphone">电话：{{cinemaList.tel}}</p>
                        <div class="server">
                            <div class="serve_line">影院服务<span></span></div>
                            <p>
                                <span class="box">3D眼镜收费</span>
                                <span>{{cinemaList.glasses}}</span>
                            </p>
                            <p>
                                <span class="box">儿童优惠</span>
                                <span>{{cinemaList.children}}</span>
                            </p>
                            <p>
                                <span class="box">可停车</span>
                                <span>{{cinemaList.carParking}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <swiper :cinemaName="cinemaName"></swiper>
    </div>
</template>
<script>
import swiper from "../components/Swiper.vue";
export default {
    
    components:{
        swiper,
        
    },
    data(){
        return {
            cinemaList: null,
            cinemaId:null,
            cinemaName:null,
        }
    },
    created() {
        var cinemaId = this.$route.query.cinemaId;
        var _this = this;
        var url = this.$store.state.apiUrl + "api/cinemasList?&limit=" + 1 + "&page=" + 0 + "&text=" + cinemaId;

        this.$axios.get(url).then(function(result){
            _this.cinemaList = result.data.data[0]
            _this.cinemaName = result.data.data[0].name
        }).catch(function(error){
            console.log(error)
        })
    },
}
</script>
<style lang="scss" scoped>
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
        width: 300px;
        height: 300px;
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
            span{
                display: block;
                width: 350px;
                height: 1px;
                position: absolute;
                background-color: #fff;
                top: 9px;
                left: 72px;
            } 
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

</style>
