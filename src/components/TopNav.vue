<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <div><img src="../assets/my.jpg" alt=""></div>
          <a class="navbar-brand" href="#">刺猬影院</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav my_nav">
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                广州
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">深圳</a>
                </li>
                <li>
                  <a href="#">东莞</a>
                </li>
                <li>
                  <a href="#">广州</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">惠州</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">杭州</a>
                </li>
              </ul>
            </li>
            <li :class="showindex==0?'active':''">
              <router-link to="/index" tag="a" class="mint-tab-item" >
              首页
              </router-link>
            </li>
            <li :class="showindex==1?'active':''">
              <router-link to="/movies/moviehot" tag="a" class="mint-tab-item" >
              电影
              </router-link>
            </li>
            <li :class="showindex==2?'active':''">
              <router-link to="/cinema" tag="a" class="mint-tab-item" >
              影院
              </router-link>
            </li>
            <!-- <li class="tab">
              <a href="#">演出</a>
            </li>
            <li class="tab">
              <a href="#">榜单</a>
            </li>
            <li class="tab">
              <a href="#">热点</a>
            </li>
            <li class="tab">
              <a href="#">商城</a>
            </li> -->
          </ul>
          <ul class="nav navbar-nav navbar-right my_nav">
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                用户
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">退出</a>
                </li>
                <li>
                  <a href="#">订单</a>
                </li>
                <li>
                  <a href="#">收藏</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    data() {
      return {
        showindex:0,
      }
    },
    watch: {//监听路由的变化
        $route (to, from) {
          var path = this.$route.path
          if( path == '/' || path == '/index'){
            this.showindex = 0;
          }
          else if( path.substring(0,7) == '/movies'){
            this.showindex = 1;
          }
          else if( path == '/cinema'){
            this.showindex = 2;
          }
          else{
            this.showindex = -1
          }
      } 
    }
}
</script>

<style lang="scss" scoped>
#bs-example-navbar-collapse-1.collapse.navbar-collapse{
    min-width: 1110px;
    width: 100%;
}
#nav a {
    font-weight: 400;
    color: black;
}
.nav > li{
    position: relative;
    display: block;
    color:black;
}
.navbar-default .navbar-nav  .active  a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
    color: #fff !important;
    background-color: #EF4238;
    
}

.navbar-header{
  position: relative;
  overflow: hidden;
  div{
    float: left;
    width: 50px;
    height: 50px;
    line-height: 50px;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  a{
    font-size: 18px;
    color:#EF4238 !important;
  }
  
}
.navbar.navbar-default.navbar-fixed-top{
  background-color: #fff !important;
}

</style>
