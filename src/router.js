import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: () =>
        import("./views/Index.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () =>
        import("./views/Index.vue")
    },
    {
      path: "/cinema",
      name: "cinema",
      component: () =>
        import("./views/Cinema.vue")
    }, 
    
    {//热映电影
      path: "/movies/moviehot",
      name: "moviehot",
      component: () =>
        import("./components/MovieHot.vue")
    },
    {//即将上映
      path: "/movies/moviecome",
      name: "moviecome",
      component: () =>
        import("./components/MovieCome.vue")
    },
    {//经典电影
      path: "/movies/movieold",
      name: "movieold",
      component: () =>
        import("./components/MovieOld.vue")
    },
     {//电影详情
      path: "/movieDetail",
      name: "movieDetail",
      component: () =>
        import("./views/MovieDetail.vue")
    },
    {//影院详情
      path: "/cinemaDetail",
      name: "cinemaDetail",
      component: () =>
        import("./views/CinemaDetail.vue")
    },
    {//选座位
      path: "/selectseat",
      name: "selectseat",
      component: () =>
        import("./views/SelectSeat.vue")
    }
  ],
  linkActiveClass: "con"//重新设置类名
});
