<template>
    <div>
        <div class="bar">
            <div class="first_step">
                <p class="step">
                    <span class="num">1</span>
                    <span class="line"></span>
                </p>
                <h5>选择影片场次</h5>
            </div>
            <div class="second_step first_step">
                <p class="step">
                    <span class="num">2</span>
                    <span class="line"></span>
                </p>
                <h5>选择座位</h5>
            </div>
            <div class="second_step first_step model">
                 <p class="step">
                    <span class="num">3</span>
                    <span class="line"></span>
                </p>
                <h5>14分钟内付款</h5>
            </div>
            <div class="last_step first_step model">
                <p class="step">
                    <span class="num">4</span>
                    <span class="line"></span>
                </p>
                <h5>影院取票观影</h5>
            </div>
        </div>
        <div class="content">
            <!-- 座位选择 -->
            <div class="seat_left">
                <ul>
                    <li><span class="iconfont icon-zuowei seat_grey"></span>可选座位</li>
                    <li><span class="iconfont icon-zuowei seat_red"></span>已售座位</li>
                    <li><span class="iconfont icon-zuowei seat_green"></span>已选座位</li>
                </ul>
                <!-- 银幕中央 -->
                <div class="moniter">
                    <p class="up"></p>
                    <p class="middle"></p>
                    <p class="down"></p>
                    <div>银幕中央</div>
                </div>
                <!-- 银幕中央 end-->
                <!-- 座位 -->
                <div class="many_seat">
                    <div v-for="(item,i) in rows" :key="i"> 
                        <span class="rownum">{{i+1}}</span>
                        <span @click="showSeat(i,j)" class="myself iconfont icon-zuowei seat_grey" v-for="(itemy,j) in cols" :key="j"></span>
                    </div>
                </div>
                <!-- 座位 end -->

            </div>
            <!-- 座位选择 end-->

            <!-- 电影信息 -->
            <div class="tick_right">
                <div class="tick_head">
                    <div class="movie_img">
                    <img :src=movieInfo[0].movieImg alt="">
                    </div>
                    <div class="movie_info">
                        <p class="text_flow">{{movieInfo[0].movieName}}</p>

                        <div>
                            <p><span class='key'>类型：</span><span class="value">{{movieInfo[0].movieType}}</span></p>
                            <p><span class='key'>时长：</span><span class="value">{{movieInfo[0].movieTime}}</span></p>
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <p><span class='key'>影院：</span><span class="value text_flow">{{movieInfo[0].cinemaName}}</span></p>
                    <p><span class='key'>影厅：</span><span class="value text_flow">{{movieInfo[0].hall}}</span></p>
                    <p><span class='key'>版本：</span><span class="value text_flow">{{movieInfo[0].language}}</span></p>
                    <p><span class='key'>场次：</span><span class="value text_flow text_price">{{movieInfo[0].movieShowDate}} {{movieInfo[0].movieWatchStart}}</span></p>
                    <p><span class='key'>票价：</span><span class="value text_flow">￥{{movieInfo[0].moviePrice}}/张</span></p>
                </div>

                <!-- 选择的座位信息 -->
                <div class="seat detail">
                    <p><span class='key'>座位：</span></p>
                    <div class="selected">
                        <div v-for="(item,i) in myseatList" :key="i">{{item.seat}}<span @click="delSeat(i)">×</span></div>
                    </div>
                    <p class="sum"><span class='key'>总价：</span><span class="value text_price">￥{{sum}}</span></p>
                </div>
                <!-- 选择的座位信息 end-->
                <div class="confirm">
                    <a @click="confirm">确认选座</a>    
                </div>    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            movieInfo:null,
            myseatList:[],//已经选的座位
            seatlist:[],//记录选的位置是第几个，来修改座位颜色
            count:0,
            sum:0,
            ticket:[],
            rows:10, //i
            cols:12, //j
        }
    },
    methods: {
        showSeat(i,j){//选择座位
            var index = i*12+j; 
            if(this.seatlist.indexOf(index) != -1){//当前该座位已经选择了
                return
            }
            if(this.count >=6){
                alert("一次最多购买6张")
                return
            }
            this.count++;
            this.myseatList.push({
                seat:(i+1)+"排"+(j+1)+"座",
            })
            this.sum += this.movieInfo[0].moviePrice
            this.seatlist.push(index)
            $('.myself').eq(index).addClass('seat_green')
        },
        //删除已选的座位
        delSeat(i){
            var index = this.seatlist[i]
            $('.myself').eq(index).removeClass('seat_green')
            this.myseatList.splice(i,1);
            this.seatlist.splice(i,1);
            this.count--;
            this.sum -= this.movieInfo[0].moviePrice
        },
        //确认选座
        confirm(){
            if(this.sum==0) {
                alert('请先选择座位')
                return;
            }
            // this.order.myseatList = this.myseatList;
            // this.order.count = this.count;
            // this.order.sum = this.sum; 
            // this.$store.commit('wantToOrder',this.order)
            // this.$router.push("/buyTicket")
        
        }
    },
    created(){
        this.movieInfo = JSON.parse(localStorage.choiceMoiveInfo);
    }
}
</script>
<style lang="scss" scoped>
.bar{
    width: 1200px;
    height: 60px;
    margin: 40px auto;
    overflow: hidden;
    div{
        float: left;
        width: 25%;
        margin: 0;
        padding: 0;
        h5{
            margin: 0;
            color: #F03D37;
        }
    }
    .first_step{
        .step{
        position: relative;
            height: 30px;
        }
        .num{
            position: absolute;
            top: 50%;
            color: #fff;
            background-color:#F03D37;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 50px; 
        }
        .line{
            position: absolute;
            right: 0;
            top: 70%;
            width: 45%;
            height: 4px;
            background-color: #F03D37;
        }
    }
}
.last_step{
    .num{
        left: 45%;
    }
    .line{
        left: 0;
    }
}

.second_step{
    .num{
        z-index: 1;
    }
    .line{
        width: 100% !important;
    }
}

//未进行的步骤
.model{
    .line,
    .num{
        background-color: #ffd8d7!important;
    }
    h5{
         color: #999999 !important;
    }
}
.content{
    width: 1200px;
    margin: 10px auto;
    overflow: hidden;
    border: 1px solid #E5E5E5;
    
    .seat_left{
        float: left;
        width: 68%;
        height: 100%;
    }
    .tick_right{
        float: right;
        height: 100%;
        width: 32%;
        background-color: #f9f9f9;
    }
}
.tick_right{
    overflow: hidden;
    padding: 20px;
    .tick_head{
        float: left;
    }
    .movie_img{
        float: left;
        width: 115px;
        height: 158px;
        border: 2px solid #fff;
        box-shadow: 0 2px 10px -2px #333333; 
        img{
            display: block;
            width:100%;
            height: 100%;
        }
    }
    .movie_info{
        overflow: hidden;
        text-align: left;
        padding-left: 20px;
        p{
            font-size: 20px;
            font-weight: bold;
            font-family: '微软雅黑';
            color:#333333;
            
        }
        span{
            font-size: 15px;
            font-weight: 400;
        }
    }
    .detail{
        overflow: hidden;
        float: left;
        width: 100%;
        margin-top: 20px;
        border-bottom: 1px dashed #e5e5e5;
        p{
            text-align: left;
        }
    }
}

//文本超出隐藏。。。
.text_flow{
    white-space:nowrap; 
    text-overflow:ellipsis;
    overflow: hidden;
}
.text_price{
    color: #f03d37 !important;
}
.value{
    color:#151515;
}
.key{
    color: #999999;
}

// 选择的座位信息
.seat{
    overflow: hidden;
    float: left;
    p{
        text-align: left;
    }
    .selected{
        text-align: left;
        padding: 5px 0;
        overflow: hidden;
        color: #f03d37;
        div{
            float: left;
            width: 75px;
            
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin:0 10px 10px 0; 
            border: 1px solid #f03d37;
            position: relative;
            padding-left:5px;
            span{
                width: 15px;
                height: 15px;
                line-height: 15px;
                text-align: center;
                background-color: #999999;
                position: absolute;
                border-radius: 50%;
                top: -6px;
                right: -7px;
                color: #fff;
                display: none;
            }
        }
        div:hover{
            span{
                display: block;
            }
        }
        div::after{
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            border: 1px solid #f03d37;
            border-radius: 50%;
            background-color: #fff;
            z-index: 100;
            position: absolute;
            top: 10px;
            left: -5px;
        }
        div::before{
            content: '';
            display: block;
            width: 5px;
            height: 10px;
            background-color: #fff;
            z-index: 101;
            position: absolute;
            top: 10px;
            left: -5px;
        }
    }
    .sum{
        margin-top: 20px;
        .value{
            font-size: 24px;
        }
    }
}
//座位这个文字
.seat p:nth-child(1){
    float: left;
}

.confirm{
    width: 260px;
    overflow: hidden;
    padding:20px 10px;
    margin: 0 auto;
    text-align: center;
    a{
        display: block;
        text-decoration: none;
        padding: 10px 40px;
        border-radius: 25px;
        background-color: #f03d37;
        color: #fff;
    }
}

// 座位选择
.seat_left{
    ul{
        list-style: none;
        overflow: hidden;
        width: 50%;
        margin: 30px auto;
        li{
            float: left;
            color: #666666;
            padding-right: 30px;
            span{
               padding-right: 5px;
            }
        }
    }
}
// 银幕中央
.moniter{
    width: 66%;
    margin: 0 auto;
    p{
        margin: 0;
    }
    p.up{
        height: 14px;
        background: linear-gradient(top,#fff,#F5F5F5); 
    }
    p.middle{
        height: 8px;
        border: 1px solid #F5F5F5;
    }
    p.down{
        height: 12px;
        background-color: #F5F5F5;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }
    div{
        margin-top:10px;
        font-size: 16px;
    }
}
//好多座位
.many_seat{
    width: 100%;
    margin: 10px;
    div{
        text-align: left;
        margin-left: 40px;
    }
    .rownum {
        display: inline-block;
        padding-right: 60px;
        margin-left: 10px;
        width: 50px;
        text-align: center;
        color: #999999;
    }
    .iconfont{
        padding: 5px 10px;
    }
}
// 座位颜色
.seat_grey{
    color:#E3E3E3;
    font-size: 26px;
}
.seat_green{
    color:#6DBD00;
    font-size: 26px;
}
.seat_red{
    color:#F04E39; 
    font-size: 26px;
}
</style>
