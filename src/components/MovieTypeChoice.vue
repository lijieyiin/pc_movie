<template>
    <div>
        <div class="type_box">
            <ul class="type_ul">
                <li class="line">
                    <div class="title_type">类型：</div>
                    <ul class="title_ul">
                        <li :class="i==0?'active':''" v-for="(item,i) in typelist" :key="item"><a href="#">{{item}}</a></li>
                    </ul>
                </li>
                <li class="line">
                    <div class="title_type">区域：</div>
                    <ul class="title_ul">
                        <li :class="i==0?'active':''" v-for="(item,i) in arealist" :key="item"><a href="#">{{item}}</a></li>
                    </ul>
                </li>
                <li>
                    <div class="title_type">年代：</div>
                    <ul class="title_ul">
                        <li :class="i==0?'active':''" v-for="(item,i) in yearlist" :key="item"><a href="#">{{item}}</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="my_radio">
            <ul>
                <li>
                    <input type="radio" checked name="radio_type"/><span>按热门排序</span>
                </li>
                <li>
                    <input type="radio" name="radio_type"/><span>按时间排序</span>
                </li>
                <li>
                    <input type="radio" name="radio_type"/><span>按评价排序</span>
                </li>
            </ul>    
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            typelist:['全部','爱情','喜剧','剧情','恐怖','惊悚','科幻','动作','悬疑','犯罪'
            ,'冒险','战争','奇幻','运动','家庭','古装','武侠','西部','历史','传记','歌舞'],
            arealist:['全部','大陆','美国','韩国','日本','中国香港','中国台湾','泰国','印度','法国'
            ,'英国','俄罗斯','意大利','西班牙','德国','波兰','澳大利亚','伊朗','其他'],
            yearlist:['全部','2019以后','2019','2018','2017','2016','2015','2014','2013','2012','2011'
            ,'2000-2010','90年代','80年代','70年代','更早']  
        }

    }
}
</script>
<style lang="scss" scoped>
    ul{
        list-style: none;
        margin: 0;
        padding:0;
        a{
            text-decoration: none;
            color: #333333;
        }
    }
    .type_box{
        width: 1120px;
        margin: 0 auto;
        margin-top: 40px;
        border: 1px solid #e5e5e5;
        ul.type_ul{
            padding: 0 20px;
        }
        ul.type_ul>li{
            height:auto; 
            padding: 10px 0;
        }
        ul.type_ul>li.line{
            border-bottom: 1px dashed #e5e5e5;
        }
    }
    .title_type{
        height: 24px;
        line-height: 24px;
        float: left;
        color: #999;
        font-size: 14px;
    }
    ul.title_ul{
        overflow: hidden;
        width: calc(100%-45px);
        height: auto;
        li{
            float: left;
            height: 26px;
            text-align: center;
            margin-left: 10px;
            line-height: 26px;
        }
        a{
            padding: 10px;
        }
        
    }
    .title_ul li.active,.title_ul li:hover{
        background-color:#f34d41;
        border-radius: 12px; 
        a{
            color: #fff !important;
        }
    }

    .my_radio{
        margin-top:20px;
        width: 1120px;
        height: 25px;
        margin: 0 auto;
        margin-top:50px;
        ul{
            text-align: center;
            list-style: none;
            overflow: hidden;
            li{
                height: 25px;
                line-height: 25px;
                float: left;
                padding-right: 30px;
                input{
                    width: 20px;
                    height: 20px;
                }
                span{
                    padding-left: 5px;
                    vertical-align: top;
                }
            }
        }
    }
</style>
