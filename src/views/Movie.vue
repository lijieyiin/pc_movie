<template>
    <div>
        <div class="nav">
            <div>
                <ul>
                    <li>
                        <router-link to="/movies/moviehot" tag="a" :class="showindexone==0?'active':''">
                            正在热映
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/movies/moviecome" tag="a" :class="showindexone==1?'active':''">
                            即将上映
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/movies/movieold" tag="a" :class="showindexone==2?'active':''">
                            经典影片
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        showindexone:0,
      }
    },
    created() {
        var path = this.$route.path
            if( path == '/movies/moviehot'){
                this.showindexone = 0;
            }
            else if( path == '/movies/moviecome'){
                this.showindexone = 1;
            }
            else if( path == '/movies/movieold'){
                this.showindexone = 2;
            }
            else{
                this.showindexone = -1;
            }
    },
    
}
</script>
<style lang="scss" scoped>
    .nav{
        background-color: #47464a;
        height: 60px;
        width: 100%;
        min-width: 1200px;
        text-align: center;
        ul{
            width: 500px;
            margin: 0 auto;
            list-style: none;
            overflow: hidden;
            li{
                float: left;
                line-height: 60px;
                text-align: center;
                a{
                    display: inline-block;
                    width: 150px;
                    padding: 0 10px;
                }
                a:link,a:visited{
                    text-decoration: none;
                    color: #999999;
                    font-size: 16px;
                }
                a:hover,a:focus{
                    color:#EF4238; 
                }
                a.active{
                    color:#EF4238; 
                }
            }
        }
    }
</style>
