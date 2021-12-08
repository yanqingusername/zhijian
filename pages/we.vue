<template>
  <div class="root">
    <div class="pc-product-list" v-if="!mobileStatus && !showNews" >
      <div class="container-we">
        <!-- <shopHeader :paramId="paramId" :shopColumnList="shopColumnList"/> -->
        <header class="shopheader">
              <div class="container">
                  <div class="left">
                      <a href="/" class="logo"><img src="~/assets/images/icon-shop-logo-01.png" /></a>
                      <nav class="navs">
                          <div v-for="i in shopColumnList" :key="i.code">
                            <div :class="paramId==i.code ? 'itemActive':'item'" @click="handleNewsInfo(i.code)">
                                              <img :src="paramId==i.code ? i.select_icons:i.icons" />
                                              <span>{{i.name}}</span>
                                              <span v-if="paramId==i.code" class="underline"></span>
                                          </div>
                          </div>
                      </nav>
                  </div>
                  <div class="right">
                      <div class="button">
                          <img src="~/assets/images/icon-xcx-01.svg" />
                          <span>小程序</span>
                      </div>
                      <div class="drop">
                          <img src="http://admin.zhijianliwu.com/static/images/xcx.png"/>
                          <span>微信扫一扫体验</span>
                      </div>
                  </div>
              </div>
          </header>
        <div class="banner"></div>
        <div class="proposition">
        <div class="mainContent top-to-head">
                  <div class="productContainer">
                      <div class="list" v-if="productList.length > 0">
                            <a v-for="v in productList" :key="v.id" :href="'/we?id='+ paramId + '&detail='+v.id" class="item" >
                                          <img :src="v.pic" />
                                          <h3>{{v.name}}</h3>
                                          <div class="price_view">
                                            <span class="price">￥{{v.price}}</span>
                                            <img class="price-img" v-if="v.sign_pic" :src="v.sign_pic" />
                                            <span class="price-text" v-if="v.marketPrice">￥{{v.marketPrice}}</span>
                                          </div>
                                          <div style="margin-top:12px;margin-bottom:12px;">
                                          <span class="button">立即购买</span>
                                          </div>
                                      </a>
                          
                      </div>
                      <div v-else class="emptyDiv"></div>
                  </div>
                  <!-- <div class="loadingMore">加载中<LoadingOutlined /></div> -->
                  <div style="height:40px;"></div>
              </div>
        </div>
      </div>
      <SideBar />
    </div>

    <div v-if="mobileStatus && !showNews" class="container-we-m">
      <vHeader isShowTop="false"/>
      <div class="mainContent">
                <div class="tabs">
                    <nav class="categorytabs">
                            <div :class="paramId == i.code ? 'itemActive':'item'" :key="i.code" v-for="i in shopColumnList" @click="handleChange(i.code)">
                                <img :src="paramId==i.code ? i.select_icons : i.icons" />
                                <span>{{i.name}}</span>
                                <span v-if="paramId==i.code" class="underline"></span>
                            </div>
                    </nav>
                </div>
                <div class="productContainer" style="min-height:10rem;">
                    <div class="list">
                          <a v-if="productList.length > 0" v-for="v in productList" :key="v.id" :href="'/we?id='+ paramId + '&detail='+v.id" class="item" >
                                        <img :src="v.pic" />
                                        <h3 style="margin-top: 0.24rem;">{{v.name}}</h3>
                                        <div class="price_view">
                                          <span class="price">￥{{v.price}}</span>
                                          <img class="price-img" v-if="v.sign_pic" :src="v.sign_pic" />
                                          <span class="price-text" v-if="v.marketPrice">￥{{v.marketPrice}}</span>
                                        </div>
                                        <div style="margin-top:12px;margin-bottom:12px;">
                                        <span class="button">立即购买</span>
                                        </div>
                                    </a>
                        <div v-else class="emptyDiv"></div>
                    </div>
                </div>

                

            </div>
    </div>


    <!-- -->
    <div class="pc-product-detail" v-if="!mobileStatus && showNews">
      <div class="container-we">
        <!-- <shopHeader :paramId="paramId" :shopColumnList="shopColumnList"/> -->
        <header class="shopheader">
            <div class="container">
                <div class="left">
                    <a href="/" class="logo"><img src="~/assets/images/icon-shop-logo-01.png" /></a>
                    <nav class="navs">
                        <div v-for="i in shopColumnList" :key="i.code">
                          <div :class="paramId==i.code ? 'itemActive':'item'" @click="handleNewsInfo(i.code)">
                                            <img :src="paramId==i.code ? i.select_icons:i.icons" />
                                            <span>{{i.name}}</span>
                                            <span v-if="paramId==i.code" class="underline"></span>
                                        </div>
                        </div>
                    </nav>
                </div>
                <div class="right">
                    <div class="button">
                        <img src="~/assets/images/icon-xcx-01.svg" />
                        <span>小程序</span>
                    </div>
                    <div class="drop">
                        <img src="http://admin.zhijianliwu.com/static/images/xcx.png"/>
                        <span>微信扫一扫体验</span>
                    </div>
                </div>
            </div>
        </header>
        <div class="banner"></div>
        <div class="mainContent top-to-head">
                    <div class="new-router nongsini">
                      <span class="shoushi" @click="$router.push('/')">指间商城</span>
                      <img src="~/assets/images/arr.png" alt="arrow|箭头" />
                      <span class="shoushi" @click="$router.push('/we?id='+paramId)">{{productInfo.modelname}}</span>
                      <img src="~/assets/images/arr.png" alt="arrow|箭头" />
                      <span class="shoushi man-title-small">{{productInfo.name}}</span>
                    </div>
                <div class="productinfo">
                    <div class="container">
                        <div class="left">
                           <div class="swiper-father">
                              <!-- <div class="swiper-container">
                                <div class="swiper-wrapper">
                                  <div class="swiper-slide" v-for="(i,index) in productInfoPics" :key="index">
                                    <img class="swiper-slide-img" :src="i" />
                                  </div>
                                </div>
                                <div class="swiper-pagination"></div>
                                <div class="swiper-scrollbar"></div>

                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                              </div> -->
                              <div class="pc-partner-container">
                            <div class='partner-prev'><i></i></div>
                            <swiper
                                class="partner-list"
                                lazy
                                ref="mySwiper"
                                :options="swiperOption"
                            >
                              <swiper-slide v-for="(i,index) in productInfoPics" :key="index">
                                <img class="swiper-slide-img" :src="i" />
                              </swiper-slide>
                            </swiper>
                            <div style="position:absolute;bottom:10px;width: 100%;display: flex;align-items: center;justify-content: center;height: 20px;z-index: 4;">
                              <span v-for="(i,index) in productInfoPics" :key="index" :class="'swiper-pagination-bullet ' + ( activeIndex == index &&  'swiper-pagination-bullet-active')" ></span>
                            </div>
                            <div class='partner-next'><i></i></div>
                        </div>

                            </div>
                        </div>
                        <div class="right">
                            <h1>{{productInfo.name}}</h1>
                            <div class="price">
                                <span>￥{{productInfo.price}}</span>
                                <img v-if="productInfo.sign_pic" :src="productInfo.sign_pic" />
                                <span v-if="productInfo.marketPrice">￥{{productInfo.marketPrice}}</span>
                            </div>
                            
                            <div class="">
                               <h1>规格：</h1>
                               <div class="skuContent">
                                  <span :class="skuIndex == i.id ? 'span-active' : 'span-default'" @click="skuClick(i)" v-for="(i,index) in productInfo.skus" :key="index">{{i.name}}</span>
                               </div>
                            </div>
                            <div class="qrcontent">
                                <img :src="productInfo.goods_qcode" />
                                <span>小程序扫码下单</span>
                            </div>
                        </div>
                    </div>
                      
                </div>
                <div class="productinfo">
                  <div style="width: 1200px;margin-top:20px;align-items: flex-start;flex-wrap: wrap;">
                          <img :class="activeIndex == index ? 'active-img':'default-img'" v-for="(i,index) in productInfoPics" :key="index" :src="i" @click="handlerClickImg(index)"/>
                      </div>
                </div>
                <div class="productinfo">
                  <div style="width: 1200px;margin-top:30px;margin-bottom:30px;align-items: flex-start;flex-wrap: wrap;">相关推荐</div>
                </div>
                <div class="productinfo" style="height:214px;background:#FAFAFA;padding:20px;position:relative;" v-if="productInfo.recommendList.length > 0">
                  <div class="rela-swiper">
                    <!-- <div class="swiper-co" style="width:1080px;">
                              <div class="swiper-wrapper" style="width:1080px;">
                                <div class="swiper-slide" v-for="(i,index) in productInfo.recommendList" :key="index" style="width: 208px;margin-right:10px;">
                                  <div class="help-item">
                                    <div class="img-box" style="width: 208px;height: 172px;background: #FFFFFF;">
                                      <img :src="i.pic" style="width: 208px;height: 172px;background: #FFFFFF;"/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div> -->

                            <div class="pc-partner-container" style="width:1080px;">
                            <div class='swiper-button-prev'><i></i></div>
                            <swiper
                                class="partner-list"
                                lazy
                                :options="swiperOptionrecommend"
                            >
                              <swiper-slide v-for="(i,index) in productInfo.recommendList" :key="index">
                                <div class="img-box" style="width: 208px;height: 172px;background: #FFFFFF;" v-for="(j,index) in i" :key="index">
                                      <img :src="j.pic" style="width: 208px;height: 172px;background: #FFFFFF;"/>
                                    </div>
                              </swiper-slide>
                            </swiper>
                            <div class='swiper-button-next'><i></i></div>
                        </div>

                  </div>
                </div>
                <div class="productinfo" style="height:72px;background:#FAFAFA;padding:20px;border-top: 4px solid #FFFFFF;">
                  <div style="width: 1200px;align-items: flex-start;flex-wrap: wrap;">
                    <span :style="'font-size: 20px;color: ' + (contentIndex==1 ? '#EC1815':'#666666')+';margin-right:90px;'" @click="clickContent(productInfo.htmlContent,1)">商品介绍</span>
                    <span :style="'font-size: 20px;color: ' + (contentIndex==2 ? '#EC1815':'#666666')+';margin-right:90px;'" @click="clickContent(productInfo.packageContent,2)">规格包装</span>
                    <span :style="'font-size: 20px;color: ' + (contentIndex==3 ? '#EC1815':'#666666')+';'" @click="clickContent(productInfo.serviceContent,3)">售后保障</span>
                  </div>
                </div>
                <div class="productinfo" style="text-align: center;">
                  <div :class="'content ' + ( mobileStatus &&  'content-m')" v-html="text">{{content.content}}</div>
                </div>
            </div>
      </div>
      <SideBar />
    </div>

    <div class="wap-product-detail" v-if="mobileStatus && showNews">
      <div class="wap-container-we-m">
        <vHeader isShowTop="false" isBack="true" :paramId="paramId"/>
        <div class="wap-main">
            <div class="wap-main-swiper">
              <div class="swiper-why">
                              <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(i,index) in productInfoPics" :key="index">
                                  <div class="help-item">
                                    <div class="img-box" style="height: 7.5rem;width: 7.5rem;">
                                      <img :src="i" style="height: 7.5rem;width: 7.5rem;" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                             <!-- 如果需要分页器 -->
                            <div class="swiper-pagination"></div>
                           
              </div>

              <div class="wap-main-h1">{{productInfo.name}}</div>

              <div class="wap-main-price">
                                <span class="wap-main-price1">￥{{productInfo.price}}</span>
                                <img class="wap-main-price2" v-if="productInfo.sign_pic" :src="productInfo.sign_pic" />
                                <span class="wap-main-price3" v-if="productInfo.marketPrice">￥{{productInfo.marketPrice}}</span>
                            </div>
                <div class="wap-main-sku">
                               <h1>规格：</h1>
                               <div class="wap-main-sku-content">
                                  <span :class="skuIndex == i.id ? 'span-active' : 'span-default'" @click="skuClick(i)" v-for="(i,index) in productInfo.skus" :key="index">{{i.name}}</span>
                               </div>
                            </div>
                  <div class="wap-main-qrcontent">
                                <img :src="productInfo.goods_qcode" />
                                <span>小程序扫码下单</span>
                            </div>
                       

                <div class="wap-main-productinfo">
                    <span :class="contentIndex==1 ? 'info-active':'info-default'" @click="clickContent(productInfo.htmlContent,1)">商品介绍</span>
                    <span :class="contentIndex==2 ? 'info-active':'info-default'" @click="clickContent(productInfo.packageContent,2)">规格包装</span>
                    <span :class="contentIndex==3 ? 'info-active':'info-default'" @click="clickContent(productInfo.serviceContent,3)">售后保障</span>
                 
                </div>
                <div class="wap-main-content">
                  <div class="wap-main-content-m" v-html="text">{{content.content}}</div>
                </div>
        </div>
      </div>
      <div class="wap-sidebar">
            <div class="wap-hotline">
                <img class="wap-icon-img" src="~/assets/images/wap_tel_icon.png" />
                <!-- <span>咨询热线</span> -->
                <div class="wap-over">
                    <div class="wap-content">
                        <img src="~/assets/images/wap_tel_xm.png" />
                        <div class="wap-info">
                            <h5>15712864358</h5>
                            <p>7*12小时贴心客服热线<br />周一至周日9:00-21:00</p>
                        </div>
                    </div>
                    <img src="~/assets/images/wap_tec_arrow.png" />
                </div>
            </div>
            <div class="wap-top" @click="handleScrollTo">
                <img class="wap-icon-img" src="~/assets/images/wap_top_icon.png" />
                <!-- <span>回顶部</span> -->
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import vHeader from "/components/vHeader";
// import shopHeader from "/components/shopHeader";
import SideBar from "/components/SideBar";
import Swiper from "swiper";
import { shoplists,shopInfo,shopColumn } from "~/api/zhijianapi";
import { transfromDom } from "~/utils/utils.js";
import pager from "~/components/paging";
import loading from "~/components/loading";
export default {
  components:{
    // shopHeader,
    SideBar,
    vHeader,
    pager,
    loading
  },
  head: {
    title: "指间礼物",
  
  },
  data() {
    return {
      swiperOptionrecommend: {
        // loop: true,
        // // autoplay: {
        // //   stopOnLastSlide: false,
        // //   delay: 1000
        // // },
        // slidesPerView: 5,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
      swiperOption: {
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
      content: {
        "content": ""
      }, // 富文本内容
      text: "",
      
      showNews: false,
      paramId: "",
      productList:[],
      page: 1,
      limit: 100,
      total: "",
      page_num: "",
      detailId: "",
      productInfo: "",
      productInfoPics: [],
      skuIndex: "",
      activeIndex: 0,
      contentIndex: 1,
      shopColumnList: []
    };
  },
  mounted() {
    let that = this;
    this.getShopColumn();

    // if (this.$route.query.id) this.paramId = this.$route.query.id;

    // if (this.$route.query.detail){
    //   this.detailId = this.$route.query.detail;
    //   this.getProductInfo();
    // }else{
    //   this.page = 1;
    //   this.getProductList();
    //   this.showNews = false;
    // }

    if (process.client) {
      window.onscroll = this.onPageScroll;
    }
  },
  destroyed() {
    if (process.client) {
      window.onscroll = this.onPageScroll;
    }
  },
  methods: {
    handlerClickImg(index){
      this.activeIndex = index;
      // this.swiperOption={
      //   initialSlide: index,
      // }
      this.$nextTick(function () {
        this.$refs.mySwiper.$swiper.slideTo(index, 500, false)
        // this.$refs.mySwiper.$swiper.realIndex = index
      })
    },
    handleNewsInfo(id) {
      if(this.paramId == id){

      }else{
        this.$router.replace("/we?id=" + id);
        this.paramId = id;

        this.page = 1;
        this.getProductList();
        this.showNews = false;
      }
      
    },
    getShopColumn(){
      shopColumn({
        "action":"shop",
        "code":"column",
        "is_dev":"1"
      }).then(res => {
        if (res.data.sta === 1) {
            this.shopColumnList = res.data.items;
            this.paramId = res.data.items[0].code;

            if (this.$route.query.id) {
              this.paramId = this.$route.query.id;
            }

            if (this.$route.query.detail){
              this.detailId = this.$route.query.detail;
              this.getProductInfo();
            }else{
              this.page = 1;
              this.getProductList();
              this.showNews = false;
            }

        }
      });
    },
    getProductInfo() {
      
      shopInfo({
        "action":"shop",
        "code":"INFO",
        "id": this.detailId,
        "is_dev":"1"
      }).then(res => {
        if (res.data.sta === 1) {
            this.productInfo = res.data;
            this.productInfoPics = res.data.pics;
            this.skuIndex = res.data.skus[0].id;
            this.showNews = true;
            this.content.content = res.data.htmlContent;
            this.text = res.data.htmlContent;

            this.setSwp();
        }
      });
    },
    getProductList() {
      shoplists({
        "action":"shop",
        "code":"LIST",
        "category": this.paramId,
        "maxResultCount":this.limit,
        "skipCount":this.page,
        "is_dev":"1"
      }).then(res => {
        if (res.data.sta === 1) {
          this.page = res.data.items.length != 0 ? this.page + 1 : this.page;
          if (this.mobileStatus) {
            this.productList = res.data.items;
          } else {
            this.productList = res.data.items;
          }
          this.page_num = res.data.totalCount;
        }
        this.$nextTick(() => {
          this.loading = false;
        });
      });
    },
    setSwp(){
      let that = this;

      if (this.mobileStatus) {
        
          new Swiper(".swiper-why", {
            updateOnWindowResize: true,
            observer: true, //实时检测，动态更新
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            spaceBetween: 15,
            loop: true,
            lazyLoading: true,
            slidesPerView: 1,
            centeredSlides: true,
            pagination: false
          });
         
        
      } else{
        this.swiperOption={
        // loop: true,
        // autoplay: {
        //   stopOnLastSlide: false,
        //   delay: 1000
        // },
        slidesPerView: 1,
        updateOnWindowResize: true,
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            lazyLoading: true,
            watchOverflow: true,
                preventInteractionOnTransition: true,
                // delay: 5000,
                speed: 500,
        navigation: {
          nextEl: '.partner-next',
          prevEl: '.partner-prev',
        },
        // initialSlide: that.activeIndex,
        on:{
           slideChangeTransitionEnd: function(){
            that.activeIndex = this.realIndex;
          },
        }
      }

this.swiperOptionrecommend={
        loop: true,
        // autoplay: {
        //   stopOnLastSlide: false,
        //   delay: 1000
        // },
        loopedSlides: 5,
        slidesPerView: 1,
        updateOnWindowResize: true,
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            lazyLoading: true,
            watchOverflow: true,
                preventInteractionOnTransition: true,
                // delay: 5000,
                speed: 500,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
      }
          //     new Swiper(".swiper-co", {
          //   // autoplay: {
          //   //   delay: 2000, // 设置轮播的时间
          //   //   disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
          //   // },
          //   loop: true,
          //   updateOnWindowResize: true,
          //   grabCursor: true,
          //   observer: true, // 修改swiper自己或子元素时，自动初始化swiper
          //   observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          //   slidesPerView: 5,
          //   spaceBetween: 10,
          //   lazyLoading: true,
          //   navigation: {
          //     nextEl: ".swiper-button-next",
          //     prevEl: ".swiper-button-prev"
          //   },
          //   watchOverflow: true,
          //       preventInteractionOnTransition: true,
          //       // delay: 5000,
          //       speed: 1500,
          
          // });
      }
    },
    onPageScroll() {
      if (this.loading || !this.mobileStatus) return;
      //为了保证兼容性，这里取两个值，哪个有值取哪一个
      //scrollTop就是触发滚轮事件时滚轮的高度

      let scrollTop =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        document.documentElement.clientHeight;
      let pageHeight = document.documentElement.scrollHeight;

      /**保证是向下滑动 */
      if (pageHeight - 50 <= scrollTop && scrollTop > this.scrollTop) {
        // this.getList();
      }
      this.scrollTop = scrollTop;
    },
    handleScrollTo () {
      // let scrollToptimer = setInterval(function () {
      //   let top = document.body.scrollTop || document.documentElement.scrollTop;
      //   let speed = top / 30;
      //   document.documentElement.scrollTop -= speed;
      //   if (top == 0) {
      //     clearInterval(scrollToptimer);
      //   }
      // }, 5);
              document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    skuClick(item){
      this.skuIndex = item.id;
      this.productInfoPics = item.pics;
    },
    clickContent(content, number){
      this.content.content = content;
      this.text = content;
      this.contentIndex = number;
    },
    handleChange(id){
      this.paramId = id;
      this.page = 1;
      this.getProductList();
      this.showNews = false;
    },
    handleHeight(id) {
      /* 由于在vue中不推荐控制dom, 即使我们是在查看属性也是, 确保vue成功定位到dom  并且返回数据 */
      let element = this.$refs["transform_box" + id];
      let height = element.clientHeight;
      return `height: ${height}px; transition: height ${height * 0.0012}s`;
    }
  },
  computed: {
    // 判断当前是否为移动端布局
    mobileStatus() {
      return this.$store.state.isMobile;
    },
    swiper() {
        return this.$refs.mySwiper.$swiper
      }
  },
   watch: {
    mobileStatus() {
      let that = this;
      this.$nextTick(() => {
        if (this.mobileStatus) {
        
          new Swiper(".swiper-why", {
            updateOnWindowResize: true,
            observer: true, //实时检测，动态更新
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            spaceBetween: 15,
            loop: true,
            lazyLoading: true,
            slidesPerView: 1,
            centeredSlides: true,
            pagination: false
          });
         
        
      } else{
        
        this.swiperOption={
        // loop: true,
        // autoplay: {
        //   stopOnLastSlide: false,
        //   delay: 1000
        // },
         slidesPerView: 1,
        updateOnWindowResize: true,
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            lazyLoading: true,
            watchOverflow: true,
                preventInteractionOnTransition: true,
                // delay: 5000,
                speed: 500,
        navigation: {
          nextEl: '.partner-next',
          prevEl: '.partner-prev',
        },
        // initialSlide: that.activeIndex,
        on:{
           slideChangeTransitionEnd: function(){
            that.activeIndex = this.realIndex;
          },
        }
      }

      this.swiperOptionrecommend={
        loop: true,
        // autoplay: {
        //   stopOnLastSlide: false,
        //   delay: 1000
        // },
        loopedSlides: 5,
        slidesPerView: 1,
        updateOnWindowResize: true,
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            lazyLoading: true,
            watchOverflow: true,
                preventInteractionOnTransition: true,
                // delay: 5000,
                speed: 500,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
      }

          //     new Swiper(".swiper-co", {
          //   // autoplay: {
          //   //   delay: 2000, // 设置轮播的时间
          //   //   disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
          //   // },
          //   loop: false,
          //   updateOnWindowResize: true,
          //   grabCursor: true,
          //   observer: true, // 修改swiper自己或子元素时，自动初始化swiper
          //   observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          //   slidesPerView: 5,
          //   spaceBetween: 10,
          //   lazyLoading: true,
          //   navigation: {
          //     nextEl: ".swiper-button-next",
          //     prevEl: ".swiper-button-prev"
          //   },
          //   watchOverflow: true,
          //       preventInteractionOnTransition: true,
          //       // delay: 5000,
          //       speed: 1500,
          
          // });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.container-we-m {
  .mainContent {
    width: 100%;

    .tabs {
      margin-top: 0.4rem;
      // width: 6.9rem;
      border-bottom: 1px solid #eee;

      .categorytabs {
    width          : 100%;
    display        : flex;
    justify-content: space-between;
    align-items    : center;

    .item,
    .itemActive {
          width: 25%;
        display       : flex;
        flex-direction: column;
        align-items   : center;
        color         : #999;
        position      : relative;
        cursor        : pointer;

        img {
            width : 0.36rem;
            height: 0.36rem;
        }

        span {
            font-size    : 0.18rem;
            margin-top   : 0.15rem;
            margin-bottom: 0.15rem;
        }
    }

    .itemActive {
        color : #db3c3a;
        cursor: default;

        .underline {
            position  : absolute;
            bottom    : 0;
            margin    : 0 auto;
            width     : 0.30rem;
            height    : 3px;
            background: rgba(219, 60, 58, 1);
        }
    }
}
    }

    .productContainer {
      // width: 6.9rem;
      overflow: hidden;
padding: 0rem 0.3rem;
      .list {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
            margin-left: 0px;

        .item {
          width: 3.36rem;
          margin: 0.2rem 0 0;
          display: flex !important;
          flex-direction: column;
          align-items: center;
              justify-content: center;
          background: rgba(255, 255, 255, 1);

          img {
            width: 3.36rem;
            height: 3.36rem;
          }

          h3 {
            width: 100%;
            margin-top: 0.24rem;
            font-size: 0.28rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 600;
            color: #333333;
            text-align: center;
          }

          .price_view{
            display: flex;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            align-items: center;
            justify-content: center;
           margin-top: 0.1rem;

            .price {
            font-size: 0.28rem;
            color: #db3c3a;
            font-weight: 600;
          }


            .price-img {
              margin-left: 0.02rem;
              width: 0.25rem;
              height: 0.15rem;
            }

            .price-text{
              margin-left: 0.08rem;
              font-size: 0.16rem;
              color: #AAAAAA;
              text-decoration: line-through;
            }

          }
          
           .button {
            width: 100%;
            height: 0.5rem;
            line-height: 0.5rem;
            margin-top: 0.2rem;
            margin-bottom: 0.2rem;
            color: #db3c3a;
            text-align: center;
            border: 1px solid #db3c3a;
          }
          
        }
      }
    }

    .emptyDiv {
      height: 100vw * (750/1920);
    }

    .loadingMore {
      margin: 20px 0;
    }
  }
}

.container-we {
  background: #FAFAFA;
  .moudle {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .title {
      height: 60px;
      text-align: center;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
  .banner {
    width: 100%;
    height: auto;
    margin-top: 80px;
  }

  .info {
    border-radius: 20px;
    margin-top: -180px;
    margin-bottom: 100px;
    position: relative;
    z-index: 1;
    background-color: #fff;
    padding-top: 60px;
    overflow: hidden;
    .info-list {
      margin-top: 60px;
      display: flex;

      width: 100%;
      flex-wrap: wrap;
      div,
      .img-box {
        width: 50%;
        height: 320px;
        // transition: all 0.6s;
        overflow: hidden;
        position: relative;
      }
      .img-box {
        padding: 0;
        img {
          // width: 100%;
          height: 100%;
          // transition: all 0.6s;
          cursor: pointer;
        }
        // img:hover {
        //   transform: scale(1.2);
        // }
      }

      div {
        padding: 0 42px;
        text-align: left;
        color: #000;
        line-height: 30px;
        font-size: 16px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #fafafa;
        transition: all 0.6s;
        p {
          margin-bottom: 10px;
          text-indent: 26px;
        }
        &:hover {
          background-color: #fff;
        }
      }
    }
  }
  .mien {
    background-color: #fafafa;
    padding: 68px 0 76px;
    .mien-info {
      display: flex;
      // flex-wrap: wrap;
      margin: 64px -5px 0;
      width: 100%;
      // height: 370px;
      overflow: hidden;
      div {
        flex: 580;
        height: 100%;
        padding: 0 40px;
        display: flex;
        margin: 5px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h4 {
          text-align: center;
          font-size: 20px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 30px;
        }
        p {
          margin-top: 30px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 30px;
          text-indent: 26px;
        }
      }
      .img-boxs-mien1 {
        flex: 710;
        height: 100%;
        padding: 0;
        // display: bl;
        overflow: hidden;
        img {
          width: 100%;
          // height: 100%;
          // margin: 5px;
          transition: all 0.6s;
          // overflow: hidden;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
    .mien-info-b {
      display: flex;
      align-items: center;
      height: 270px;
      width: 100%;
      margin: 5px -5px 0;
      overflow: hidden;
      .l {
        flex: 580;
        height: 100%;
        margin: 5px;
        overflow: hidden;
        img {
          height: 100%;
          // width: 100%;
          transition: all 0.6s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .r {
        flex: 606;
        display: flex;
        height: 100%;
        align-items: center;
        overflow: hidden;
        .img-box {
          // width: auto;
          height: 100%;
          // flex: auto;
          margin: 0px 5px 0;
          overflow: hidden;
          img {
            height: 100%;
            // transition: all 0.6s;
            // &:hover {
            //   transform: scale(1.2);
            // }
          }
        }
      }
    }
  }
  .culture {
    margin: 100px auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  .proposition {
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    
    .title {
       height: 60px;
    }
    .proposition-box {
      padding-top: 104px;
      display: flex;
      .proposition-item {
        flex: 1;
        .proposition-text {
          text-align: center;
          padding-bottom: 200px;
          h3 {
            padding: 39px 0 14px 0 ;
          }
          p {
            font-size: 16px;
            color: #686868;
          }
        }
      }
    }
    .vista-list {
      display: flex;
      margin: 80px -10px;
      flex-wrap: wrap;
      & > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        // width: 275px;
        // height: 360px;
        padding: 10px 0 0;
        background: rgba(255, 255, 255, 1);
        font-size: 26px;
        color: #000;
        overflow: hidden;
        margin: 0 10px;
        margin-bottom: 20px;
        transition: transform 0.6s;
        &:hover {
          transform: translateY(-10%);
          .vista-info {
            bottom: 0;
          }
        }
        .vista-info {
          position: absolute;
          width: 100%;
          height: 100%;

          padding: 0 30px 0;
          transition: all 0.6s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          bottom: 100%;
          left: 0;
          background-color: #fff;
          text-align: center;
          color: #333333;
          h5 {
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 20px;
          }
          p {
            font-size: 16px;
            text-align: justify;
            word-break: break-all;
            line-height: 26px;
            color: #333333;
          }
        }
        // img {
        //   width: 66px;
        //   height: 66px;
        //   margin-bottom: 55px;
        // }
      }
    }
  }
  
  .bazaar {
    padding: 100px 0 90px;
    text-align: center;
    h4 {
      font-size: 30px;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 30px;
      margin: 47px auto 32px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 36px;
      padding: 0 20px;
    }
  }
}



  .mainContent {
    .productContainer {
      width: 100%;
      overflow: hidden;

      .list {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 1240px;
        margin-left: -25px;

        .item {
          border-radius: 3px;
          width: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 40px 25px 0;
          background: rgba(255, 255, 255, 1);
          text-decoration: none;

          img {
            width: 260px;
            height: 260px;
          }

          h3 {
            width: 260px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-top: 15px;
            font-size: 20px;
            font-weight: 600;
            color: #333333;
          }

          .price_view{
            display: flex;
            width: 260px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            align-items: center;
            justify-content: center;
            margin-top: 12px;

            .price {
              color: #DB3C3A;
              font-size: 18px;
              font-weight: 600;
            }

            .price-img {
              margin-left: 2px;
              width: 25px;
              height: 15px;
            }

            .price-text{
              margin-left: 8px;
              font-size: 16px;
              color: #AAAAAA;
              text-decoration: line-through;
            }

          }
          
          .button {
            color: #db3c3a;
            width: 106px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #db3c3a;
            margin-top: 12px;
            margin-bottom: 20px;
            padding: 0px 10px;
          }
        }
      }
    }

    .emptyDiv {
      height: 100vw * (750/1920);
    }

    .loadingMore {
      margin: 20px 0;
    }
  }



.pc-product-detail{
  .mainContent {
    width: 100%;

   .new-router {
      width: 1200px;
      box-sizing: border-box;
      // margin: 0 20px;
      padding: 30px 0;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      color: #333333;
      font-size: 16px;
      justify-content: center;
      span:hover {
        color: #FF4925;
      }
      img {
        transform: rotateZ(90deg);
        width: 12px;
        height: 6px;
        margin: 0 10px;
      }
      .man-title-small {
        margin-left: 5px;
        display: inline-block;
        max-width: 60%;
        flex: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #999999;
        &:hover {
          color: #999999;
        }
      }
    }

    .new-router-m {
      font-size: .28rem;
      padding: 0.3rem 0 !important;
      img {
        margin: 0 0.2rem;
      }
    }

    .productinfo {
      width: 100%;
      background: rgba(255, 255, 255, 1);
      display: flex;
      flex-direction: column;
      align-items: center;

      .container {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        .left {
          width: 580px;
          height: 580px;
          position: relative;

          .swiper-father {
        position: relative;
        // padding:0 37px;
        width: 100%;
        box-sizing:border-box;
        }

         .swiper-father .partner-next, .swiper-father .partner-prev {
        width: 30px;
         height: 30px;
        text-align: center;
        display: block;
        // margin-top: -54px;
        }

         .swiper-father .partner-next:after,.swiper-father .partner-prev:after {
          content:''
        }

        .swiper-father .partner-prev {
          background: url("~/assets/images/icon_12_04_left.png") no-repeat center center;
          left:12px;
          top: 46%;
    position: absolute;
    z-index: 88;
        }
        
        .swiper-father .partner-next{
          background:  url("~/assets/images/icon_12_04_right.png") no-repeat center center;
          right:12px;
          top: 46%;
    position: absolute;
    z-index: 88;
        }




          .swiper-father .swiper-button-next,.swiper-father .swiper-button-prev {
        width: 30px;
         height: 30px;
        text-align: center;
        display: block;
        // margin-top: -54px;
        }
        .swiper-father .swiper-button-next:after,.swiper-father .swiper-button-prev:after {
          content:''
        }

        .swiper-father  .swiper-button-prev {
          background: url("~/assets/images/icon_12_04_left.png") no-repeat center center;
          left:12px;
        }
        
        .swiper-father .swiper-button-next {
          background:  url("~/assets/images/icon_12_04_right.png") no-repeat center center;
          right:12px;
        }

        .swiper-container {
        width: 580px;
        height: 580px;
        margin:auto;
        }
        .swiper-slide {
          width: 580px;
        height: 580px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;

          .swiper-slide-img{
            width: 580px;
        height: 580px;
          }
        }


          
        }

        .right {
          width: 580px;

          h1 {
            font-size: 24px;
            color: #333;
            margin-top: 30px;
            line-height: 150%;
          }

          .price {
            margin-top: 20px;
            height: 72px;
            background: linear-gradient(154deg, #fb6a3c 0%, #fa3935 100%);
            border-radius: 3px;
            color: #fff;
            font-size: 24px;
            padding-left: 23px;
            display: flex;
            align-items: center;

            img {
              width: 30px;
              height: 20px;
              margin-left: 5px;
            }

            span:last-child {
              color: rgba(255, 255, 255, 0.6);
              margin-left: 15px;
              text-decoration: line-through;
            }
          }

          .skuContent{
            display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
             .span-active{
              // width: 80px;
              height: 36px;
              border: 1px solid #EC1815;
              font-size: 16px;
              font-weight: 500;
              color: #EC1815;
              display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 20px;
            margin-top: 10px;
            padding: 0px 20px;
            }

            .span-default{
              // width: 80px;
              height: 36px;
              border: 1px solid #CCCCCC;
              font-size: 16px;
              font-weight: 500;
              color: #CCCCCC;
              display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 20px;
            margin-top: 10px;
            padding: 0px 20px;
            }

          }

          .qrcontent {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
            width: 140px;

            img {
              width: 140px;
              height: 140px;
              border: 1px solid #eee;
              box-sizing: border-box;
            }

            span {
              font-size: 14px;
              color: #999;
              margin-top: 10px;
            }
          }
        }
      }

      .rela-swiper{
        width:1200px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        }

         .rela-swiper .swiper-button-next,.rela-swiper .swiper-button-prev {
        width: 20px;
         height: 81px;
        text-align: center;
        display: block;
        // margin-top: -54px;
        }
        .rela-swiper .swiper-button-next:after,.rela-swiper .swiper-button-prev:after {
          content:''
        }

        .rela-swiper  .swiper-button-prev {
          background: url("~/assets/images/icon_12_05_left.png") no-repeat center center;
          left:12px;
          top: 40%;
        }
        
        .rela-swiper .swiper-button-next {
          background:  url("~/assets/images/icon_12_05_right.png") no-repeat center center;
          right:12px;
          top: 40%;
        }
      
    }

    .recommend {
      width: 100%;
      background: rgba(255, 255, 255, 1);
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        width: 1200px;
        font-size: 24px;
        color: #666;
      }

      .swiper {
        width: 100%;
        background: rgba(250, 250, 250, 1);
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .container {
          width: 1200px;
          padding: 20px 0;
        }
      }
    }

    .productbody {
      width: 100%;
      background: rgba(255, 255, 255, 1);
      display: flex;
      flex-direction: column;
      align-items: center;

      .tabContent {
        width: 100%;
        background: rgba(250, 250, 250, 1);
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .tabs {
          width: 1200px;
          display: flex;
          align-items: center;
          height: 80px;

          a {
            font-size: 20px;
            color: #666;
            margin-left: 50px;
          }

          a.active {
            color: #ec1815;
          }
        }
      }

      .introduce,
      .packing,
      .service {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(255, 255, 225, 1);

        img {
          max-width: 1200px;
        }
      }
    }
  }
}


/*包裹自定义分页器的div的位置等CSS样式*/
  .swiper-pagination-bullets {
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 20px;
    /* background-color: red; */
    text-align: center;
  }
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-bullet {
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
  .swiper-pagination-bullet-active {
    opacity: 1;
    border: 3px solid #8e2829;
    background-color: #fff;
  }

  .wap-product-detail{
    position: relative;
    .wap-container-we-m{
      width: 100%;
      .wap-main{
        border-top: 0.28rem solid #FAFAFA;

        .wap-main-swiper{
          display: flex;
          position: relative;
          width: 7.5rem;
          height: 100%;

          .swiper-container{
            .swiper-wrapper{
              .swiper-slide{
                .help-item {
                  // padding: 0 13px;
                  // width: 260px;
                  text-align: center;
                  overflow: hidden;
                  .img-box {
                    width: 100%;
                    overflow: hidden;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                }
              }
            }
          }
            // .swiper-button-prev{
            //   font-weight: bold;
            //   color: #FF4925;
            //   top: 50%;
            //   left: 0px;
            //   outline: none;
            // }
            // .swiper-button-next{
            //   font-weight: bold;
            //   color: #FF4925;
            //   top: 50%;
            //   right: 0px;
            //   outline: none;
            // }
            
        }
         .wap-main-h1{
            padding: 0.3rem 0.3rem 0.2rem;
            font-size: 0.32rem;
            color: #333333;
          }
          .wap-main-price{
            margin: 0rem 0.3rem;
            height: 0.8rem;
            background: linear-gradient(154deg, #FB6A3C 0%, #FA3935 100%);
            border-radius: 0.03rem;
            display: flex;
            align-items: center;

            .wap-main-price1{
              font-size: 0.36rem;
              color: #FFFFFF;
              margin-left: 0.27rem;
            }

            .wap-main-price2{
              width: 0.45rem;
              height: 0.3rem;
              margin-left: 0.04rem;
            }
            .wap-main-price3{
              font-size: 0.3rem;
              color: #FFFFFF;
              margin-left: 0.18rem;
            }
          }
          .wap-main-sku{
            padding: 0.38rem 0.3rem 0.3rem 0.3rem;

            h1{
              font-size: 0.28rem;
              color: #333333;
            }

            .wap-main-sku-content{
              display: flex;
              align-items: flex-start;
              flex-wrap: wrap;
                .span-active{
                  // width: 0.92rem;
                  height: 0.42rem;
                  border: 1px solid #EC1815;
                  font-size: 0.24rem;
                  color: #EC1815;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 0.2rem;
                  margin-top: 0.2rem;
                  padding: 0rem 0.2rem;
                }
                .span-default{
                  // width: 0.92rem;
                  height: 0.42rem;
                  border: 1px solid #CCCCCC;
                  font-size: 0.24rem;
                  color: #CCCCCC;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 0.2rem;
                  margin-top: 0.2rem;
                  padding: 0rem 0.2rem;
                }
            }
          }

          .wap-main-qrcontent{
            display: flex;
            flex-direction: column;
            // align-items: center;
            // width: 2.2rem;
            padding: 0.3rem;

            img {
              width: 2.2rem;
              height: 2.2rem;
              border: 1px solid #eee;
              box-sizing: border-box;
            }

            span {
              font-size: 0.24rem;
              color: #999;
              margin-top: 0.3rem;
            }
          }

          .wap-main-productinfo{
            height: 0.85rem;
            background: #FAFAFA;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 1.1rem;

            .info-active{
              font-size: 0.24rem;
              color: #EC1815;
            }

            .info-default{
              font-size: 0.24rem;
              color: #666666;
            }
          }
          .wap-main-content{
            width: 100%;
            height: auto;
            // .wap-main-content-m{
            //   width: 100%;
            //     height: auto;
            // }
            // .wap-main-content-m img {
            //     width: 100%;
            //     height: auto;
            //   }
            .wap-main-content-m {
              display: flex;
              flex-direction: column;
              align-items: center;
              
                img {
                  width: 7.5rem;
                }
            }
          }

          img {
            width: 100%;
            height: auto;
          }
      }
    }

    .wap-sidebar {
  position: fixed;
  bottom: 0.8rem;
  right: 0;
  display: flex;
  flex-direction: column;

  .wap-hotline,
  .wap-top {
    width: 1.28rem;
      height: 1.28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    .wap-icon-img{
      width: 1.28rem;
      height: 1.28rem;
    }
   
  }

  .wap-hotline {
    

    .wap-over {
      position: absolute;
      top: 0;
      right: 1.2rem;
      align-items: center;
      display: none;

      .wap-content {
        padding: 0.15rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(219, 60, 58, 1);

        img {
          width: 0.58rem;
          height: 0.90rem;
          margin-right: 0.14rem;
        }

        .wap-info {
          display: flex;
          flex-direction: column;
          color: #fff;
          width: 2.5rem;

          h5 {
            color: #fff;
            font-size: 0.18rem;
            white-space: nowrap;
          }

          p {
            font-size: 0.1rem;
            margin-top: 0.1rem;
            line-height: 150%;
          }
        }
      }
    }
  }

  .wap-hotline:hover {
    

    .wap-over {
      display: flex;
      flex-direction: row;
    }
  }

  .wap-top {
    margin-top: 0.2rem;

    
  }

  .wap-top:hover {
   

    span {
      color: #db3c3a;
    }
  }
}
  }



  .shopheader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  background: #fff;
  z-index: 100;
  box-shadow: 0 3px 10px #eee;

  .container {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // width: 70%;

      .logo {
        flex: 0;
      }

      .logo img {
        width: 160px;
        height: 50px;
      }

      .navs {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 112px;

        .item,
        .itemActive {
          height: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #999;
          position: relative;
          margin-right: 80px;
          cursor: pointer;

          img {
            width: 26px;
            height: 26px;
          }

          span {
            font-size: 18px;
          }
        }

        .itemActive {
          color: #db3c3a;
          cursor: default;

          .underline {
            position: absolute;
            bottom: 0;
            margin: 0 auto;
            width: 30px;
            height: 3px;
            background: rgba(219, 60, 58, 1);
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      width: 125px;
      height: 50px;
      position: relative;

      .button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #db3c3a;

        img {
          width: 22px;
          height: 22px;
          margin-right: 5px;
        }
      }

      .drop {
        position: absolute;
        top: 50px;
        left: 0;
        width: 125px;
        height: 166px;
        background: rgba(255, 255, 255, 1);
        display: none;
        border: 1px solid #eee;
        box-sizing: border-box;

        img {
          width: 120px;
          height: 120px;
        }

        span {
          color: #999;
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }

    .right:hover {
      .drop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}


.active-img{
  width:100px;
  height:100px;
  margin-right:10px;
  border: 1px solid #EC1815;
}

.default-img{
  width: 100px;
  height: 100px;
  margin-right:10px;
  border: 1px solid #EEEEEE;
}

</style>