<template>
  <div class="root">
    <div v-if="!mobileStatus" class="container-index">
       <vHeader :isShowTop="isShowTop"/>
      <div class="banner" style="position:relative;">
        <!-- <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(i,index) in homeBannerList" :key="index">
              <img :src="i.source" class="banner-item" />
            </div>
          </div>
          <div class="swiper-pagination" style="bottom: 10px;width: 100%;"></div>
        </div> -->
        <swiper
          class="partner-list"
          lazy
          :key='homeBannerList.length'
          :options="swiperOptionBanner">
                              <swiper-slide class="swiper-slide" v-for="(i,index) in homeBannerList" :key="index">
                                <img :src="i.source" class="banner-item" />
                              </swiper-slide>
                            </swiper>
                            <div style="position:absolute;bottom:10px;width: 100%;display: flex;align-items: center;justify-content: center;height: 20px;z-index: 4;">
                              <span v-for="(i,index) in homeBannerList" :key="index" :class="'swiper-pagination-customs ' + ( bannerIndex == index &&  'swiper-pagination-customs-active')" ></span>
                            </div>
      </div>

      <div class="mainContent">
                <div class="home-intro-view">
                    <h1 style="margin-top:80px;">全套礼赠方案 多种送礼方式</h1>
                    <div class="home-intro-view-bg">
                      <div>
                        <div class="swiper-father" style="width: 1200px;display: flex;align-items: center;">
                        <!--   <div class="swiper-containers" ref="indexSwiper" style="width:526px;">
                            <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="(i,index) in homeImgList" :key="index">
                                <a :href="'/we?id='+ i.id"><img  class="swiper-slide-img" :src="i.source" /></a>
                              </div>
                            </div>
                          </div>
                          <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                         -->
                            <div class='partner-prev'><i></i></div>
                            <swiper
                                class="swiper-con-list"
                                lazy
                                ref="indexSwiper"
                                 style="width:526px;"
                                 :key='homeImgList.length'
                                :options="swiperOptionImg"
                            >
                              <swiper-slide v-for="(i,index) in homeImgList" :key="index">
                                <a :href="'/we?id='+ i.id"><img  class="swiper-slide-img" :src="i.source" /></a>
                              </swiper-slide>
                            </swiper>
                            <div class='partner-next'><i></i></div>
                          </div>
                      </div>
                    </div>

                    <div class="home-intro-view-div">
                      <div @click="handleClickDiv(0)" :class="activeIndex == 0 ? 'active-div':'default-div'">自选卡</div>
                      <div @click="handleClickDiv(1)" :class="activeIndex == 1 ? 'active-div':'default-div'">储值卡</div>
                      <div @click="handleClickDiv(2)" :class="activeIndex == 2 ? 'active-div':'default-div'">电影卡</div>
                      <div @click="handleClickDiv(3)" :class="activeIndex == 3 ? 'active-div':'default-div'">节日礼品</div>
                    </div>
                </div>

                <div class="home-intro">
                    <h1 style="margin-top:200px;">指间礼物产品介绍</h1>
                    <span style="font-size: 18px;color: #6A6B6C;margin-top:24px;">指间礼物小程序支持线上购买、微信送礼、定制祝福卡、拼手气礼包等多种送礼方式，为您提供全套礼赠方案。</span>
                    <div class="items">
                        <div class="item">
                            <img src="~/assets/images/intro-01.png" />
                            <span>人群选礼</span>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/intro-04.png" />
                            <span>场景送礼</span>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/intro-03.png" />
                            <span>风格挑礼</span>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/intro-02.png" />
                            <span>类别筛礼</span>
                        </div>
                    </div>
                </div>
                <div class="home-oper">
                    <h1>OPERATION GUIDE</h1>
                    <span>操作指南</span>
                    <span>|</span>
                    <div class="steps">
                        <div class="stepRight">
                            <div class="name">
                                <h2>
                                    <span>01</span>
                                    <span>挑礼物</span>
                                </h2>
                                <p>礼物商城挑选心仪礼物送给TA(们)</p>
                            </div>
                            <div class="demo">
                                <img class="show" src="~/assets/images/demo-01.png" />
                                <img class="person01" src="~/assets/images/demo-p-01.png" />
                            </div>
                        </div>
                        <div class="stepLeft">
                            <div class="name">
                                <h2>
                                    <span>02</span>
                                    <span>送祝语</span>
                                </h2>
                                <p>任意编辑文字、卡片祝福，生成礼包</p>
                            </div>
                            <div class="demo">
                                <img class="show" src="~/assets/images/demo-02.png" />
                                <img class="person02" src="~/assets/images/demo-p-02.png" />
                            </div>
                        </div>
                        <div class="stepRight">
                            <div class="name">
                                <h2>
                                    <span>03</span>
                                    <span>微信发送</span>
                                </h2>
                                <p>发送给好友或微信群，惊喜一键到达</p>
                            </div>
                            <div class="demo">
                                <img class="show" src="~/assets/images/demo-03.png" />
                                <img class="person03" src="~/assets/images/demo-p-03.png" />
                            </div>
                        </div>
                        <div class="stepLeft">
                            <div class="name">
                                <h2>
                                    <span>04</span>
                                    <span>查收礼物</span>
                                </h2>
                                <p>点开礼物红包查收礼物，填写收货地址，快递到家</p>
                            </div>
                            <div class="demo">
                                <img class="show" src="~/assets/images/demo-04.png" />
                                <img class="person04" src="~/assets/images/demo-p-04.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
      <div style="height:100px;"></div>
    </div>

    <div v-if="mobileStatus" class="wap-pageContainer">
      <vHeader :isShowTop="isShowTop"/>
     
      <!-- <div class="swiper-containers">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(i,index) in homeBannerWapList" :key="index">
            <div class="good-item" style="height: 7.5rem;width: 7.5rem;">
              <img :src="i.source" style="height: 7.5rem;width: 7.5rem;"/>
            </div>
          </div>
          
          
        </div> 
        <div class="swiper-pagination"></div>
      </div> -->
      <div style="position:relative;">
        <swiper
              class="partner-list"
              lazy
              :key='homeBannerWapList.length'
              :options="swiperWapBanner">
                              <swiper-slide class="swiper-slide" v-for="(i,index) in homeBannerWapList" :key="index">
                                <img :src="i.source" class="banner-item" style="height: 7.5rem;width: 7.5rem;"/>
                              </swiper-slide>
                            </swiper>
                            <div style="position:absolute;bottom:0.1rem;width: 100%;display: flex;align-items: center;justify-content: center;height: 0.2rem;z-index: 77;">
                              <span v-for="(i,index) in homeBannerWapList" :key="index" :class="'wap-swiper-pagination-customs ' + ( bannerWapIndex == index &&  'wap-swiper-pagination-customs-active')" ></span>
                            </div>
      </div>
     
     <div class="mainContentWap">
                <div class="home-intro">
                    <h1>指间礼物产品介绍</h1>
                    <p>指间礼物小程序支持线上购买、微信送礼、定制祝福卡、拼手气礼包等多种送礼方式，为您提供全套礼赠方案。</p>
                    <div class="items">
                        <div class="item">
                          <img src="~/assets/images/intro-01.png" />
                            <span>人群选礼</span>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/intro-04.png" />
                            <span>场景送礼</span>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/intro-03.png" />
                            <span>风格挑礼</span>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/intro-02.png" />
                            <span>类别筛礼</span>
                        </div>
                    </div>
                </div>
                <div class="home-oper">
                    <h1>OPERATION GUIDE</h1>
                    <span>操作指南</span>
                    <span>|</span>
                    <div class="steps">
                        <div class="stepRight">
                            <div class="name">
                                <h2>
                                    <span>01</span>
                                    <span>挑礼物</span>
                                </h2>
                                <p>礼物商城挑选心仪礼物送给TA(们)</p>
                            </div>
                            <div class="demo">
                                <img class="show" src="~/assets/images/demo-01.png" />
                                <img class="person01" src="~/assets/images/demo-p-01.png" />
                            </div>
                        </div>
                        <div class="stepLeft">
                            <div class="name">
                                <h2>
                                    <span>02</span>
                                    <span>送祝语</span>
                                </h2>
                                <p>任意编辑文字、卡片祝福，生成礼包</p>
                            </div>
                            <div class="demo">
                                <img class="show" src="~/assets/images/demo-02.png" />
                                <img class="person02" src="~/assets/images/demo-p-02.png" />
                            </div>
                        </div>
                        <div class="stepRight">
                            <div class="name">
                                <h2>
                                    <span>03</span>
                                    <span>微信发送</span>
                                </h2>
                                <p>发送给好友或微信群，惊喜一键到达</p>
                            </div>
                            <div class="demo">
                                <img class="show" src="~/assets/images/demo-03.png" />
                                <img class="person03" src="~/assets/images/demo-p-03.png" />
                            </div>
                        </div>
                        <div class="stepLeft">
                            <div class="name">
                                <h2>
                                    <span>04</span>
                                    <span>查收礼物</span>
                                </h2>
                                <p>点开礼物红包查收礼物，填写收货地址，快递到家</p>
                            </div>
                            <div class="demo">
                                <img class="show" src="~/assets/images/demo-04.png" />
                                <img class="person04" src="~/assets/images/demo-p-04.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style="height:0.5rem;"></div>
            </div>
      
    </div>
  </div>
</template>

<script>
import vHeader from "/components/vHeader";
import Swiper from "swiper";
import { transfromDom } from "~/utils/utils.js";
import { getHomeBanner  } from "~/api/zhijianapi";
export default {
  components:{
    vHeader
  },
  head() {
    return {
      title: "指间礼物",
    };
  },
  data() {
    return {
      bannerWapIndex:0,
      swiperWapBanner:{
        
      },
      bannerIndex:0,
      swiperOptionBanner:{
        
      },
      clearIndex: 0, // 用于清除当前需要进行清除计时器的滑块index
      isShowTop: false, //是否滑动
      activeIndex: 0,
      homeBannerList: [],
      homeBannerWapList:[],
      homeImgList:[],
      swiperOptionImg: {
        // loop: true,
        // // autoplay: {
        // //   stopOnLastSlide: false,
        // //   delay: 1000
        // // },
        // slidesPerView: 1,
        // navigation: {
        //   nextEl: '.partner-next',
        //   prevEl: '.partner-prev',
        // },
      },
    };
  },
  mounted() {
    this.getList();

    window.addEventListener('scroll', this.handleScroll);

    let that = this;
    if (this.mobileStatus) {
      // new Swiper(".swiper-containers", {
      //   updateOnWindowResize: true,
      //   autoplay: {
      //     delay: 3000, // 设置轮播的时间
      //     disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
      //   },
      //   loop: true, // 循环模式选项，true 循环播放
      //   // observer: true, //实时检测，动态更新
      //   grabCursor: true,
      //   observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      //   observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      //   lazyLoading: true,
      //   delay: 5000,
      //   pagination: false,
      //   spaceBetween: 15,
      //   slidesPerView: 1,
      //   centeredSlides: true,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     type: "custom",
      //     autoplayDisableOnInteraction: false,
      //     renderCustom: function(swiper, current, total) {
      //       var paginationHtml = " ";
      //       for (var i = 0; i < total; i++) {
      //         // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
      //         if (i === current - 1) {
      //           paginationHtml +=
      //             '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
      //         } else {
      //           paginationHtml +=
      //             '<span class="swiper-pagination-customs"></span>';
      //         }
      //       }
      //       return paginationHtml;
      //     }
      //   },
      // });
    } else {
      // new Swiper(".swiper-container", {
      //   updateOnWindowResize: true,
      //   autoplay: {
      //     delay: 4000, // 设置轮播的时间
      //     disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
      //   },
      //   // loop: true, // 循环模式选项，true 循环播放 !!!! 注: 有动画效果, 请不要随意打开, 除非你要重新设置动画
      //   // observer: true, //实时检测，动态更新
      //   grabCursor: true,
      //   observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      //   observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      //   watchOverflow: true,
      //   preventInteractionOnTransition: true,
      //   // delay: 5000,
      //   speed: 1500,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     type: "custom",
      //     autoplayDisableOnInteraction: false,
      //     renderCustom: function(swiper, current, total) {
      //       var paginationHtml = " ";
      //       for (var i = 0; i < total; i++) {
      //         // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
      //         if (i === current - 1) {
      //           paginationHtml +=
      //             '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
      //         } else {
      //           paginationHtml +=
      //             '<span class="swiper-pagination-customs"></span>';
      //         }
      //       }
      //       return paginationHtml;
      //     }
      //   },
        
      // });

     

      
    }
    if (process.client) {
      /**
       * 参数:  adv_transfrom: 需要进行操作的元素id
       *        adv_transfrom_to:  当屏幕滚动到此元素区域的一半时进行触发添加的类名
       */
      // transfromDom("adv_transfrom", "adv_transfrom_to");

      // transfromDom("company-info", "company-info-to");
      // transfromDom("adv_good", "adv_good_to");
    }
  },
  methods: {
    getList() {
      getHomeBanner({}).then(res => {
        if (res.data.sta == 1) {
          this.homeBannerList = res.data.items;
          this.homeImgList = res.data.gd_img_list;
          this.homeBannerWapList = res.data.items_wap;

            this.getSw();
          
        }
      });
    },
    getSw(){
      let that = this;

      if(this.mobileStatus){
        this.swiperWapBanner={
          updateOnWindowResize: true,
          autoplay: {
            delay: 3000, // 设置轮播的时间
            stopOnLastSlide: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
          },
          // loop: true, // 循环模式选项，true 循环播放 !!!! 注: 有动画效果, 请不要随意打开, 除非你要重新设置动画
          // observer: true, //实时检测，动态更新
          grabCursor: true,
          observer: true, // 修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          watchOverflow: true,
          preventInteractionOnTransition: true,
          // delay: 5000,
          slidesPerView: 1,
          speed: 1500,
          on:{
            slideChangeTransitionStart: function(){
              that.bannerWapIndex = this.realIndex;
            },
          }
        }
      }else{
        this.swiperOptionBanner={
          updateOnWindowResize: true,
          autoplay: {
            delay: 3000, // 设置轮播的时间
            stopOnLastSlide: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
          },
          // loop: true, // 循环模式选项，true 循环播放 !!!! 注: 有动画效果, 请不要随意打开, 除非你要重新设置动画
          // observer: true, //实时检测，动态更新
          grabCursor: true,
          observer: true, // 修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          watchOverflow: true,
          preventInteractionOnTransition: true,
          // delay: 5000,
          slidesPerView: 1,
          speed: 1500,
          on:{
            slideChangeTransitionStart: function(){
              that.bannerIndex = this.realIndex;
            },
          }
        }

        this.swiperOptionImg = {
          slidesPerView: 1,
          updateOnWindowResize: true,
              grabCursor: true,
              observer: true, // 修改swiper自己或子元素时，自动初始化swiper
              observeParents: true, // 修改swiper的父元素时，自动初始化swiper
              lazyLoading: true,
              watchOverflow: true,
                  preventInteractionOnTransition: true,
                  // delay: 5000,
                  speed: 1500,
          navigation: {
            nextEl: '.partner-next',
            prevEl: '.partner-prev',
          },
          on:{
            slideChangeTransitionStart: function(){
              that.activeIndex = this.realIndex;
            },
          }
        }
      }
      // new Swiper(".swiper-container", {
      //   updateOnWindowResize: true,
      //   // autoplay: {
      //   //   delay: 4000, // 设置轮播的时间
      //   //   disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
      //   // },
      //   // loop: true, // 循环模式选项，true 循环播放 !!!! 注: 有动画效果, 请不要随意打开, 除非你要重新设置动画
      //   grabCursor: true,
      //   observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      //   observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      //   watchOverflow: true,
      //   preventInteractionOnTransition: true,
      //   initialSlide: that.activeIndex,
      //   slidesPerView: 1,
      //   // delay: 5000,
      //   speed: 1500,
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      //   on:{
      //      slideChangeTransitionEnd: function(){
      //       that.activeIndex = this.realIndex;
      //     },

      //   }
        
      // });
    },
    handleClickDiv(number) {
      let that = this;
      that.activeIndex= number;

     
      this.$nextTick(function () {
        this.$refs.indexSwiper.$swiper.slideTo(number, 500, false)
      });
    },
    handleScroll() {
        if (window.scrollY > 0) {
            this.isShowTop = true;
        }
        else {
            this.isShowTop = false;
        }
    },
    onPageScroll() {
      // this.$nextTick(() => {
      //   this.adv_transfrom = transfromDom("adv_transfrom");
      //   this.text_transfrom = transfromDom("text_transfrom");
      // });

      // let pageHeight = document.documentElement.scrollHeight;
    }
  },
  beforeDestroy() {},
  computed: {
    // 判断当前是否为移动端布局
    mobileStatus() {
      return this.$store.state.isMobile;
    },

    swiper() {
        return this.$refs.indexSwiper.$swiper
      }
  },
  watch: {
    // 当用户进行pc端与移动端样式切换时, 在他dom操作结束之后进行swiper的重新注册
    mobileStatus() {
      let that = this;
      this.$nextTick(() => {
        if (this.mobileStatus) {
          that.getSw();
        //   new Swiper(".swiper-containers", {
        //     updateOnWindowResize: true,
        //     autoplay: {
        //       delay: 3000, // 设置轮播的时间
        //       disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
        //     },
        //     loop: true, // 循环模式选项，true 循环播放
        //     // observer: true, //实时检测，动态更新
        //     grabCursor: true,
        //     observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        //     observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        //     lazyLoading: true,
        //     delay: 5000,
        //     pagination: false,
        //     spaceBetween: 15,
        //     slidesPerView: 1,
        //     centeredSlides: true,
        //     pagination: {
        //   el: ".swiper-pagination",
        //   type: "custom",
        //   autoplayDisableOnInteraction: false,
        //   renderCustom: function(swiper, current, total) {
        //     var paginationHtml = " ";
        //     for (var i = 0; i < total; i++) {
        //       // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
        //       if (i === current - 1) {
        //         paginationHtml +=
        //           '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
        //       } else {
        //         paginationHtml +=
        //           '<span class="swiper-pagination-customs"></span>';
        //       }
        //     }
        //     return paginationHtml;
        //   }
        // },
        //   });
        } else {
          that.getSw();
          
          // new Swiper(".swiper-container", {
          //   updateOnWindowResize: true,
          //   autoplay: {
          //     delay: 4000, // 设置轮播的时间
          //     disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
          //   },
          //   // loop: true, // 循环模式选项，true 循环播放 !!!! 注: 有动画效果, 请不要随意打开, 除非你要重新设置动画
          //   // observer: true, //实时检测，动态更新
          //   grabCursor: true,
          //   observer: true, // 修改swiper自己或子元素时，自动初始化swiper
          //   observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          //   watchOverflow: true,
          //   preventInteractionOnTransition: true,
          //   // delay: 5000,
          //   speed: 1500,
          //   pagination: {
          //     el: ".swiper-pagination",
          //     type: "custom",
          //     autoplayDisableOnInteraction: false,
          //     renderCustom: function(swiper, current, total) {
          //       var paginationHtml = " ";
          //       for (var i = 0; i < total; i++) {
          //         // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
          //         if (i === current - 1) {
          //           paginationHtml +=
          //             '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
          //         } else {
          //           paginationHtml +=
          //             '<span class="swiper-pagination-customs"></span>';
          //         }
          //       }
          //       return paginationHtml;
          //     }
          //   },
            
          // });

      //     this.swiperOptionBanner={
      //   updateOnWindowResize: true,
      //   autoplay: {
      //     delay: 4000, // 设置轮播的时间
      //     disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
      //   },
      //   // loop: true, // 循环模式选项，true 循环播放 !!!! 注: 有动画效果, 请不要随意打开, 除非你要重新设置动画
      //   // observer: true, //实时检测，动态更新
      //   grabCursor: true,
      //   observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      //   observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      //   watchOverflow: true,
      //   preventInteractionOnTransition: true,
      //   // delay: 5000,
      //   speed: 1500,
      //   on:{
      //      slideChangeTransitionEnd: function(){
      //       that.bannerIndex = this.realIndex;
      //     },
      //   }
      // }
        }
      });
    }
  }
};
</script>

<style lang="scss">
/** 移动端渲染样式 start */
.container-index-m {
  // width: 100vw;
  overflow: hidden;
  background-color: #fff;
  .banner {
    width: 100%;
    height: auto;
  }
  .title {
    text-align: center;
    margin: 0.6rem auto 0.4rem;
    height: 0.6rem;
    img {
      height: 100%;
      width: auto;
    }
  }
  .swiper-wrapper {
    display: -webkit-box;
    .good-item {
    // height: 4.8rem;
    height: 5.9rem;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: -1;
    }
    .good-title {
      margin: 25% auto 1.05rem;
      font-size: 0.36rem;
      text-align: center;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
    .good-info {
      padding: 0 0.9rem;
      text-align: center;
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 0.45rem;
    }
  }
  }
  .info {
    padding: 0 0.32rem 0.15rem;
    video {
      width: 100%;
      height: auto;
      margin-bottom: 0.6rem;
    }
    h3 {
      font-size: 0.36rem;
      color: rgba(34, 34, 34, 1);
      line-height: 0.36rem;
      margin-bottom: 0.35rem;
      span {
        padding: 0 0.3rem;
      }
    }
    p {
      font-size: 0.27rem;
      color: #000;
      line-height: 0.48rem;
      text-align: left;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-indent: 0.29rem;
      a {
        color: #34C21A;
        text-decoration: none;
      }
    }
  }
  .push {
    img {
      margin: 0.7rem auto 0.3rem;
      width: 100%;
      height: auto;
    }
  }
  
  .cake {
    padding: 0 0.3rem;
    .cake-item {
      margin-bottom: 0.4rem;
      > div {
        display: flex;
        align-items: center;
        font-size: 0.32rem;
        font-weight: bold;
        color: rgba(34, 34, 34, 1);
        margin-bottom: 0.2rem;
        img {
          width: 0.34rem;
          margin-right: 0.08rem;
        }
      }
      p {
        font-size: 0.28rem;
        font-weight: 500;
        color: rgba(83, 83, 83, 1);
        line-height: 0.48rem;
      }
    }
  }  
}

/** 移动端渲染样式 end */

/* pc端首页部分渲染 */
.container-index {
  .swiperPag {
    display: flex;
    align-items: center;
    margin: 0 auto;
    background-color: rgba($color: #000000, $alpha: 0.8);
  }

  /*包裹自定义分页器的div的位置等CSS样式*/
  .swiper-pagination-custom {
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 20px;
    /* background-color: red; */
    text-align: center;
  }
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-customs {
    cursor: pointer;
    width: 49px;
    height: 6px;
    background-color: rgb(199, 195, 195);
    opacity: 0.7;
    border-radius: 3px;
    display: inline-block;

    /* box-shadow: 0 0 2px  #000; */
    margin: 0 5px;
    outline: 0;
  }
  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    border: 3px solid #8e2829;
    background-color: #EEEEEE;
  }
  .banner-item {
    position: relative;
    width: 100%;
    height: 561px;
    background-size: cover;
    overflow: hidden;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 2;
    }
    .left {
      width: 30vw;
      position: absolute;
      transform: translateX(200%);
      transition: all 1s;
      transition-delay: 0.4s;
      height: auto;
      // left: 19%;
      // top: 15%;
      left: 24%;
      top: 40%;
      opacity: 0;
      // will-change: transform;
    }

    // 19%
    .right {
      position: absolute;
      transform: translateX(200%);
      transition: all 1.6s;
      transition-delay: 0.6s;
      width: 40vw;
      height: auto;
      right: 19%;
      bottom: 0;
      opacity: 0;
      // will-change: transform;
    }
  }
  .module {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding-left: 20px !important;
    padding-right: 20px !important;
    img.title {
      height: 60px;
      width: auto;
      margin: 0 auto;
      display: block;
    }
  }

  .company {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0 61px;
    overflow: hidden;
    .company-info {
      opacity: 0;
      transform: translateY(60%);
      transition: all 1s;
      margin-top: 58px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      video {
        width: 50%;
        height: auto;
      }
      & > div {
        flex: 1;
        margin-right: 0px;
        h4 {
          color: #222222;
          font-size: 28px;
          margin-bottom: 15px;
          font-weight: 500;
          span {
            padding: 0 10px;
          }
        }
        p {
          font-size: 18px;
          margin-top: 20px;
          line-height: 36px;
          color: #000;
          // text-indent: 26px;
          font-weight: 400;
          a {
            color: #2eb828;
            text-decoration: underline;
          }
        }
      }
    }
    .company-info-to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .advantage {
    background-color: #fafafa;
    padding-top: 80px;
    .advantage-info {
      width: 100%;
      margin-top: 75px;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 20px;
      // justify-content: space-around;
      li {
        width: 286px;
        height: 220px;
        padding: 25px 55px 34px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition-property: transform, background-color;
        transition-duration: 0.6s, 0s;
        cursor: pointer;
        &:hover {
          padding: 40px 55px;
          background-color: #fff;
          justify-content: space-around;
          transform: translateY(-10%);
          img {
            display: none;
          }
          p,
          div {
            margin: 0;
            color: #333333;
          }
        }
        img {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
        }
        p {
          color: #222222;
          font-size: 18px;
          margin: 25px auto 16px;
        }
        div {
          font-size: 14px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 26px;
        }
      }
    }
  }
  .adv_bonus {
    position: relative;
    margin: 0 auto;
    height: 40vw;
    background-color: #fff;
    .left {
      position: absolute;
      left: 18%;
      top: 16%;

      z-index: 2;
      width: 40vw;
      opacity: 0;
      transform: translateX(-60%);
      transition: all 1s;
    }
    .right {
      position: absolute;
      right: 18%;
      top: 15%;
      width: 35vw;
      opacity: 0;
      transform: translateX(60%);
      transition: all 1s;
    }
  }
  /* 动画数据 */
  .adv_transfrom_to {
    .left {
      opacity: 1;
      transform: translateX(0);
      // left: -50%;
    }
    .right {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .adv_good {
    margin: 0 -20px;
    display: flex;
    height: 50vw;
    max-height: 600px;
    background-color: #fff;
    flex-direction: column;
    .adv_good_l {
      padding: 53px 0 0 41px;
      height: 190px;
      width: 234px;

    }
    .adv_good_center {
      width: 100%;
      padding: 0 125px;
    }
  }
  .adv_good_to {
    .adv_good_l {
      img {
        opacity: 1;
      }
    }
    .adv_good_r {
      div,
      div.green {
        .adv_good_title,
        .adv_good_text {
          opacity: 1;
        }
      }
    }
  }
  
  



  .mainContent {
    .home-intro-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      // width: 85%;
      h1 {
        margin-top: 40px;
        font-size: 40px;
        color: #333;
        margin-bottom: 30px;
      }
      .home-intro-view-bg{
        margin: 0 auto;
        width: 1200px;
        height: 416px;
        background-image: url('~/assets/images/icon_12_03_01.png');
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        .swiper-father {
        position: relative;
        // padding:0 37px;
        width: 100%;
        box-sizing:border-box;
        }
        .swiper-father .partner-next,.swiper-father .partner-prev {
        width: 60px;
         height: 60px;
        text-align: center;
        display: block;
        // margin-top: -54px;
        }
        .swiper-father .partner-next:after,.swiper-father .partner-prev:after {
          content:''
        }

        .swiper-father  .partner-prev {
          background: url("~/assets/images/icon_12_03_left.png") no-repeat center center;
          left:60px;
        }
        
        .swiper-father .partner-next {
          background:  url("~/assets/images/icon_12_03_right.png") no-repeat center center;
          right:60px;
        }

        .swiper-con-list {
        width: 526px;
        height: 414px;
        margin:auto;
        }

        .swiper-container {
        width: 526px;
        height: 414px;
        margin:auto;
        }
        .swiper-slide {
          width: 526px;
        height: 414px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;

          .swiper-slide-img{
            width: 526px;
        height: 414px;
          }
        }
      }

      .home-intro-view-div{
        margin-top: 70px;
        width: 1000px;
        height: 56px;
        background: #F6F6F6;
        display: flex;

        .active-div{
          width: 250px;
          height: 56px;
          background: #DB3C3A;
          font-size: 21px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .default-div{
          width: 250px;
          height: 56px;
          background: #F6F6F6;
          font-size: 21px;
          color: #333333;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }

    }
    .home-intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      // width: 85%;
      h1 {
        margin-top: 30px;
        font-size: 40px;
        color: #333;
      }

      p {
        width: 1060px;
        margin-top: 20px;
        font-size: 18px;
        color: #666;
      }

      .items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1100px;
        margin-top: 80px;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 142px;
            height: 142px;
          }

          span {
            font-size: 24px;
            color: #333;
            margin-top: 26px;
          }
        }
      }
    }

    .home-oper {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        color: rgba(219, 60, 58, 0.2);
        font-size: 50px;
        margin-top: 80px;
      }

      > span {
        color: #db3c3a;
        font-size: 36px;
        margin-top: 20px;
      }

      .steps {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1200px;

        .stepLeft,
        .stepRight {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 80px;

          .name {
            display: flex;
            flex-direction: column;

            h2 {
              font-size: 92px;
              color: rgba(102, 102, 102, 0.2);
              display: flex;
              align-items: baseline;

              span:last-child {
                font-size: 36px;
                color: #333;
              }
            }

            p {
              font-size: 20px;
              color: #666;
              margin-top: 20px;
            }
          }

          .demo {
            display: flex;
            align-items: flex-end;

            img.show {
              width: 260px;
            }
          }
        }

        .stepLeft {
          background: rgba(250, 250, 250, 1);

          .name {
            margin-left: 80px;

            h2 {
              span:first-child {
                margin-right: -60px;
              }
            }
          }

          .demo {
            margin-right: 80px;
            flex-direction: row-reverse;

            .person02,
            .person04 {
              margin-right: 30px;
            }
          }
        }

        .stepRight {
          flex-direction: row-reverse;

          .name {
            margin-right: 80px;
            align-items: flex-end;

            h2 {
              flex-direction: row-reverse;

              span:first-child {
                margin-left: -60px;
              }
            }
          }

          .demo {
            margin-left: 80px;

            .person01,
            .person03 {
              margin-left: 30px;
            }
          }
        }
      }
    }
  }


}

.wap-pageContainer {
  .focusContent {
    width: 100%;
    margin-top: 1.08rem;
  }

  .mainContentWap {
    margin-top: 0rem !important;
    .home-intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0.3rem;

      h1 {
        margin-top: 0.6rem;
        font-size: 0.4rem;
        color: #333;
      }

      p {
        width: 100%;
        margin-top: 0.3rem;
        font-size: 0.18rem;
        color: #666;
      }

      .items {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 0.3rem;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 1.2rem;
            height: 1.2rem;
          }

          span {
            font-size: 0.24rem;
            color: #333;
            margin-top: 0.26rem;
          }
        }
      }
    }

    .home-oper {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        color: rgba(219, 60, 58, 0.2);
        font-size: 0.5rem;
        margin-top: 0.8rem;
      }

      > span {
        color: #db3c3a;
        font-size: 0.36rem;
        margin-top: 0.2rem;
      }

      .steps {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .stepLeft,
        .stepRight {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 0.6rem 0.3rem 0;

          .name {
            display: flex;
            flex-direction: column;

            h2 {
              font-size: 0.92rem;
              color: rgba(102, 102, 102, 0.2);
              display: flex;
              align-items: baseline;

              span:last-child {
                color: #333;
                font-size: 0.36rem;
              }
            }

            p {
              color: #666;
              font-size: 0.24rem;
              margin-top: 0.2rem;
            }
          }

          .demo {
            display: flex;
            align-items: flex-end;
            position: relative;

            img.show {
              width: 3.36rem;
            }
          }
        }

        .stepLeft {
          background: rgba(250, 250, 250, 1);

          .name {
            margin-left: 0;

            h2 {
              span:first-child {
                margin-right: -0.6rem;
              }
            }
          }

          .demo {
            margin-right: 0;
            flex-direction: row-reverse;

            .person02,
            .person04 {
              margin-right: 0.3rem;
            }

            .person02 {
              width: 1.14rem;
              height: 1.83rem;
            }

            .person04 {
              width: 1.89rem;
              height: 1.31rem;
              position: absolute;
              bottom: 0;
              right: 3.66rem;
            }
          }
        }

        .stepRight {
          flex-direction: row-reverse;

          .name {
            margin-right: 0;
            align-items: flex-end;

            h2 {
              flex-direction: row-reverse;

              span:first-child {
                margin-left: -0.6rem;
              }
            }
          }

          .demo {
            margin-left: 0;

            .person01,
            .person03 {
              margin-left: 0.3rem;
            }

            .person01 {
              width: 1.34rem;
              height: 1.65rem;
            }

            .person03 {
              width: 1.15rem;
              height: 1.77rem;
            }
          }
        }
      }
    }
  }

  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .wap-swiper-pagination-customs {
    cursor: pointer;
    width: 0.36rem;
    height: 0.04rem;
    background-color: #FFFFFF;
    opacity: 0.7;
    border-radius: 0.01rem;
    display: inline-block;

    /* box-shadow: 0 0 2px  #000; */
    margin: 0 0.05rem;
    outline: 0;
  }
  /*自定义分页器激活时的样式表现*/
  .wap-swiper-pagination-customs-active {
    opacity: 1;
    border: 0.03rem solid #8e2829;
    background-color: #FFFFFF;
  }
}

@keyframes left {
  from {
    // left: 50%;
    transform: translateX(200%);
    opacity: 0;
  }

  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes right {
  from {
    right: -20%;
    opacity: 0;
  }
  50% {
    right: 0;
    opacity: 0;
  }
  to {
    right: 19%;
    opacity: 1;
  }
}
</style>