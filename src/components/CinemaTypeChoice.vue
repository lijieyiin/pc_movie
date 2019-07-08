<template>
    <div>
        <div class="type_box">
            <ul class="type_ul">
                <li class="line">
                    <div class="title_type">品牌：</div>
                    <ul class="title_ul">
                        <li :class="i==0?'active':''" v-for="(item,i) in brandlist" :key="item"><a href="#">{{item}}</a></li>
                    </ul>
                </li>
                <li class="line">
                    <div class="title_type">行政区：</div>
                    <ul class="title_ul">
                        <li :class="i==0?'active':''" v-for="(item,i) in arealist" :key="item"><a href="#">{{item}}</a></li>
                    </ul>
                </li>
                <li>
                    <div class="title_type">特殊厅：</div>
                    <ul class="title_ul">
                        <li :class="i==0?'active':''" v-for="(item,i) in speciallist" :key="item"><a href="#">{{item}}</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            brandlist:['全部','金逸影城','大地影院','哈艺时尚影城','万达影城','星美国际影城','中影佰纳国际影城','CGV影城','FUN范影城','横店电影城'
            ,'DY影城','烽禾影城','飞扬影城','百丽宫影城','英皇UA电影城','中影火山湖电影城','UME国际影城','星汇电影城','保利国际影城','天河电影城','左岸国际影城'],
            arealist:['全部','白云区','番禺区','天河区','增城市','海珠区','荔湾区','越秀区','黄埔区','从化市'
            ,'南沙区','花都区'],
            speciallist:['全部','IMAX厅','CGS中国巨幕厅','杜比全景声厅','Dolby Cinema厅','RealD厅','RealD 6FL厅','LUXE巨幕厅','4DX厅','DTS:X 临境音厅','4K厅'
            ,'4D厅','巨幕厅']  
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
        overflow: hidden;
        ul.type_ul{
            padding: 0 20px;
        }
        ul.type_ul>li{
            height: auto; 
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

</style>
