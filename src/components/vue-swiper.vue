<template>
  <div class="vue-swiper">
    <h1>{{ msg }}</h1>
    <div class="container">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-container-no-flexbox">
        <swiper-slide>
          <img src="../../static/images/1.jpg" alt class="1">
        </swiper-slide>
        <swiper-slide>
          <img src="../../static/images/2.jpg" alt class="2">
        </swiper-slide>
        <swiper-slide>
          <img src="../../static/images/3.jpg" alt class="3">
        </swiper-slide>
        <swiper-slide>
          <img src="../../static/images/4.jpg" alt class="4">
        </swiper-slide>
        <swiper-slide>
          <img src="../../static/images/5.jpg" alt class="5">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);
import Swiper from "swiper";

export default {
  name: "vueSwiper",
  data() {
    return {
      msg: "Vue-swiper",
      swiperOption: {
        notNextTick: true,
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        autoplay: 3000,
        forceToAxis: true, //鼠标竖向滚动无法控制横向切换
        slideToClickedSlide: true, //设置为true则点击slide会过渡到这个slide。
        grabCursor: true,
        setWrapperSize: true,
        mousewheelControl: true,
        observeParents: true,
        on: {
          slideChangeTransitionEnd: function() {
            //切换结束时，回调函数
            console.log(this.realIndex); //当前选择滑块的索引
          }
        }
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.container{width:500px;overflow: hidden;margin: 0 auto;border: 1px solid #000;}
img{
    max-width: 100%;
    display: block;
}
.swiper-slide-shadow-right,.swiper-slide-shadow-left{
    background-image: none !important;
    opacity: 0 !important;
}

.swiper-slide{
    transform: scale(.7);
    transition: all .3s linear;
}
.swiper-slide.swiper-slide-active{
    transform: scale(1);
}
@import "../../node_modules/swiper/dist/css/swiper.min.css";
</style>