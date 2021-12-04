<template>
  <div class="root">
    <div v-if="!mobileStatus" class="container-cooperation">
      <vHeader :isShowTop="true" :page="home"/>
      
     <div class="focus" style="backgroundImage: url('https://scpic.chinaz.net/files/pic/pic9/202012/bpic22149.jpg')">
                <h1>ABOUT US</h1>
                <h3>关于我们</h3>
            </div>
            <div class="mainContent">
                <div id="intro" class="pc-intro">
                    <h2>公司简介</h2>
                    <p>指间礼物是中国领先的场景礼品方案服务商，主要服务商务礼赠、职场福利、社交送礼等场景。指间礼物提供全套礼品方案，支持文字、语音、视频等多种祝福送礼方式。</p>
                    <div class="data">
                        <div><span>2013年度</span><span>金牌服务企业</span></div>
                        <div><span>13项</span><span>送礼解决方案</span></div>
                        <div><span>96%</span><span>以上客户复购率</span></div>
                        <div><span>1357位</span><span>企业客户信赖首选</span></div>
                        <div><span>378</span><span>上市/集团定制送礼方案</span></div>
                    </div>
                </div>
                <div id="culture" class="pc-block">
                    <h2><img src="~/assets/images/CULTURE.png" /><span>企业文化</span></h2>
                    <div class="culture">
                        <div class="item">
                            <img src="~/assets/images/icon-culture-01.png" />
                            <div>
                                <h4>愿景</h4>
                                <span>Vision</span>
                                <p>成为每个人选择礼物的首选平台！</p>
                                <p>Become the preferred platform for everyone to choose gifts!</p>
                            </div>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/icon-culture-02.png" />
                            <div>
                                <h4>使命</h4>
                                <span>Aission</span>
                                <p>传播中国礼文化，让礼物温暖人间，让生活更多惊喜！</p>
                                <p>Spread Chinese etiquette culture and make gifts warm，Warm the world, let life more surprise!</p>
                            </div>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/icon-culture-03.png" />
                            <div>
                                <h4>价值观</h4>
                                <span>Sense of Worth</span>
                                <p>感恩、创新、合作、诚信、卓越</p>
                                <p>Gratitude, innovation, cooperation, integrity，excellent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="business" class="pc-block">
                    <h2><img src="~/assets/images/BUSINESS.png" /><span>公司业务</span></h2>
                    <div class="business">
                        <div class="item" :style="{backgroundImage: 'url('+picSrc2 +')'}">
                            <div class="modal">
                                <img src="~/assets/images/icon-business-01.png" />
                                <h4>在线送礼</h4>
                                <div></div>
                            </div>
                        </div>
                        <div class="item" :style="{backgroundImage: 'url('+picSrc1 +')'}">
                            <div class="modal">
                                <img src="~/assets/images/icon-business-02.png" />
                                <h4>礼品采购</h4>
                                <div></div>
                            </div>
                        </div>
                        <div class="item" :style="{backgroundImage: 'url('+picSrc3 +')'}">
                            <div class="modal">
                                <img src="~/assets/images/icon-business-03.png" />
                                <h4>礼品兑换</h4>
                                <div></div>
                            </div>
                        </div>
                        <div class="item" :style="{backgroundImage: 'url('+picSrc4 +')'}">
                            <div class="modal">
                                <img src="~/assets/images/icon-business-04.png" />
                                <h4>礼品定制</h4>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="advantage" class="pc-block">
                    <h2><img src="~/assets/images/ADVANTAGE.png" /><span>我们的优势</span></h2>
                    <div class="advantage">
                        <img src="~/assets/images/advantage-line.png" />
                        <div class="advantage01">
                            <img class="icon" src="~/assets/images/icon-advantage-01.png" />
                            <span>专业化礼品垂直平台</span>
                        </div>
                        <div class="advantage02">
                            <img class="icon" src="~/assets/images/icon-advantage-02.png" />
                            <span>12年礼品供应链资源</span>
                        </div>
                        <div class="advantage03">
                            <img class="icon" src="~/assets/images/icon-advantage-03.png" />
                            <span>专业化礼品服务团队</span>
                        </div>
                        <div class="advantage04">
                            <img class="icon" src="~/assets/images/icon-advantage-04.png" />
                            <span>低于其他主流电商平台的价格</span>
                        </div>
                    </div>
                </div>
                <div id="partner" class="pc-block">
                    <h2><img src="~/assets/images/PARTNER.png" /><span>合作伙伴</span></h2>
                    <div class="partner">
                        <!-- <PCPartnerSwiper data={partners} /> -->
                    </div>
                </div>
                <div id="contactus" class="pc-block">
                    <h2><img src="~/assets/images/CONTACTUS.png" /><span>联系我们</span></h2>
                    <div class="contactus">
                        <div class="left">
                            <h3>北京购实惠电子商务有限公司</h3>
                            <p>
                                总&nbsp;部&nbsp;地&nbsp;址&nbsp;：北京市丰台区新华国际中心C座221室<br />
                                客&nbsp;服&nbsp;电&nbsp;话&nbsp;：18501957368<br />
                                供应商合作：zhijianliwu@bjlipince.com<br />
                                微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信：zhijiangift
                            </p>
                        </div>
                        <div class="right">
                            <form>
                                <div class="formControl">
                                    <input type="text" name="name" placeholder="姓名" />
                                    <input type="text" name="email" placeholder="邮箱" />
                                </div>
                                <div class="formControl">
                                    <input type="text" name="phone" placeholder="电话" />
                                    <input type="text" name="company" placeholder="公司" />
                                </div>
                                <div class="formControl">
                                    <textarea name="remark" placeholder="留言"></textarea>
                                </div>
                                <div class="formControl">
                                    <button>提交</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="joinus" class="pc-block">
                    <h2><img src="~/assets/images/JOINUS.png" /><span>加入我们</span></h2>
                    <div class="joinus">
                        <p>我司正在热招的岗位具体职责与要求，有意者请详阅并发简历、相应的作品及个人阐述至：hanzibiao@bjlipince.com，邮件标题请注明“应聘职位”。</p>
                        <div class="positions">
                            <!-- <PCPositions
                                data={newPositions}
                                onChange={handlePositionChange} /> -->
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <div v-else class="wap-pageContainer">
      <vHeader :isShowTop="true" :page="home"/>
      <div class="aboutus-focus" style="backgroundImage: url('https://scpic.chinaz.net/files/pic/pic9/202012/bpic22149.jpg')">
                <h1>ABOUT US</h1>
                <h3>关于我们</h3>
            </div>
            <div class="mainContentWap">
                <div id="intro" class="aboutus-intro">
                    <h2>公司简介</h2>
                    <p>指间礼物是中国领先的场景礼品方案服务商，主要服务商务礼赠、职场福利、社交送礼等场景。指间礼物提供全套礼品方案，支持文字、语音、视频等多种祝福送礼方式。</p>
                    <div class="data">
                        <div><span>2013年度</span><span>金牌服务企业</span></div>
                        <div><span>13项</span><span>送礼解决方案</span></div>
                        <div><span>96%</span><span>以上客户复购率</span></div>
                        <div><span>1357位</span><span>企业客户信赖首选</span></div>
                        <div><span>378</span><span>上市/集团定制送礼方案</span></div>
                    </div>
                </div>
                <div id="culture" class="aboutus-block">
                    <h2><img src="~/assets/images/CULTURE.png" /><span>企业文化</span></h2>
                    <div class="culture">
                        <div class="item">
                            <img src="~/assets/images/icon-culture-01.png" />
                            <div>
                                <h4>愿景</h4>
                                <span>Vision</span>
                                <p>成为每个人选择礼物的首选平台！</p>
                            </div>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/icon-culture-02.png" />
                            <div>
                                <h4>使命</h4>
                                <span>Aission</span>
                                <p>传播中国礼文化，让礼物温暖人间，让生活更多惊喜！</p>
                            </div>
                        </div>
                        <div class="item">
                            <img src="~/assets/images/icon-culture-03.png" />
                            <div>
                                <h4>价值观</h4>
                                <span>Sense of Worth</span>
                                <p>感恩、创新、合作、诚信、卓越</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="business" class="aboutus-block">
                    <h2><img src="~/assets/images/BUSINESS.png" /><span>公司业务</span></h2>
                    <div class="business">
                        <div class="item" :style="{backgroundImage: 'url('+picSrc2 +')'}">
                            <div class="modal">
                                <img src="~/assets/images/icon-business-01.png" />
                                <h4>在线送礼</h4>
                                <div></div>
                            </div>
                        </div>
                        <div class="item" :style="{backgroundImage: 'url('+picSrc1 +')'}">
                            <div class="modal">
                                <img src="~/assets/images/icon-business-02.png" />
                                <h4>礼品采购</h4>
                                <div></div>
                            </div>
                        </div>
                        <div class="item" :style="{backgroundImage: 'url('+picSrc3 +')'}">
                            <div class="modal">
                                <img src="~/assets/images/icon-business-03.png" />
                                <h4>礼品兑换</h4>
                                <div></div>
                            </div>
                        </div>
                        <div class="item" :style="{backgroundImage: 'url('+picSrc4 +')'}">
                            <div class="modal">
                                <img src="~/assets/images/icon-business-04.png" />
                                <h4>礼品定制</h4>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="advantage" class="aboutus-block">
                    <h2><img src="~/assets/images/ADVANTAGE.png" /><span>我们的优势</span></h2>
                    <div class="advantage">
                        <div class="advantage01">
                            <img class="num" src="~/assets/images/icon-advantage-num-01.png" />
                            <img class="icon" src="~/assets/images/icon-advantage-01.png" />
                            <span>专业化礼品垂直平台</span>
                        </div>
                        <div class="advantage02">
                            <img class="num" src="~/assets/images/icon-advantage-num-02.png" />
                            <img class="icon" src="~/assets/images/icon-advantage-02.png" />
                            <span>12年礼品供应链资源</span>
                        </div>
                        <div class="advantage03">
                            <img class="num" src="~/assets/images/icon-advantage-num-03.png" />
                            <img class="icon" src="~/assets/images/icon-advantage-03.png" />
                            <span>专业化礼品服务团队</span>
                        </div>
                        <div class="advantage04">
                            <img class="num" src="~/assets/images/icon-advantage-num-04.png" />
                            <img class="icon" src="~/assets/images/icon-advantage-04.png" />
                            <span>低于其他主流电商平台的价格</span>
                        </div>
                    </div>
                </div>
                <div id="partner" class="aboutus-block">
                    <h2><img src="~/assets/images/PARTNER.png" /><span>合作伙伴</span></h2>
                    <div class="aboutus-partner">
                        <!-- <WapPartnerSwiper data={partners} /> -->
                    </div>
                </div>
                <div id="contactus" class="aboutus-block">
                    <h2><img src="~/assets/images/CONTACTUS.png" /><span>联系我们</span></h2>
                    <div class="contactus">
                        <div class="left">
                            <h3>北京购实惠电子商务有限公司</h3>
                            <p>
                                总&nbsp;部&nbsp;地&nbsp;址&nbsp;：北京市丰台区新华国际中心C座221室<br />
                                客&nbsp;服&nbsp;电&nbsp;话&nbsp;：18501957368<br />
                                供应商合作：zhijianliwu@bjlipince.com<br />
                                微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信：zhijiangift
                            </p>
                        </div>
                        <div class="right">
                            <form>
                                <div class="formControl">
                                    <input type="text" name="name" placeholder="姓名" />
                                    <input type="text" name="email" placeholder="邮箱" />
                                </div>
                                <div class="formControl">
                                    <input type="text" name="phone" placeholder="电话" />
                                    <input type="text" name="company" placeholder="公司" />
                                </div>
                                <div class="formControl">
                                    <textarea name="remark" placeholder="留言"></textarea>
                                </div>
                                <div class="formControl">
                                    <button>提交</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="joinus" class="aboutus-block">
                    <h2><img src="~/assets/images/JOINUS.png" /><span>加入我们</span></h2>
                    <div class="joinus">
                        <p>我司正在热招的岗位具体职责与要求，有意者请详阅并发简历、相应的作品及个人阐述至：hanzibiao@bjlipince.com，邮件标题请注明“应聘职位”。</p>
                        <div class="positions">
                            <!-- <WapPositions
                                data={newPositions}
                                onChange={handlePositionChange} /> -->
                        </div>
                    </div>
                </div>
            </div>
    </div>


  </div>
</template>

<script>
import vHeader from "/components/vHeader";
import Swiper from "swiper";
// import { getAjax, setForm } from "~/api/base";
import { transfromDom } from "~/utils/utils.js";
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
      showM: {
        m1: false,
        m2: false,
        m3: false,
        m4: false,
        m5: false,
        m6: false,
        m7: false,
        m8: false,
        m9: false
      },
      province: [], // 省列表
      province_code: "", // 省code
      city: [], // 城市列表
      city_code: "", // 城市code
      area: [], // 地区列表
      area_code: "", // 地区code
      userName: "", // 用户名
      phone: "", // 电话
      firmName: "", //公司名称,
      site: "", // 详细地址
      picSrc1: require("~/assets/images/business-01.png"),
      picSrc2: require("~/assets/images/business-02.png"),
      picSrc3: require("~/assets/images/business-03.png"),
      picSrc4: require("~/assets/images/business-04.png"),
    };
  },
  mounted() {
    if (this.mobileStatus) {
      new Swiper("#swiper-why", {
        updateOnWindowResize: true,
        observer: true, //实时检测，动态更新
        grabCursor: true,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        lazyLoading: true,
        slidesPerView: 1.25,
        centeredSlides: true,
        pagination: false
      });
      new Swiper("#swiper-help", {
        autoplay: {
          delay: 3000, // 设置轮播的时间
          disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
        },
        updateOnWindowResize: true,
        observer: true, //实时检测，动态更新
        grabCursor: true,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        lazyLoading: true,
        slidesPerView: 1.25,
        centeredSlides: true
      });
      new Swiper("#swiper-help-al", {
        autoplay: {
          delay: 3000, // 设置轮播的时间
          disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
        },
        updateOnWindowResize: true,
        observer: true, //实时检测，动态更新
        grabCursor: true,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        lazyLoading: true,
        slidesPerView: 1.25,
        centeredSlides: true
      });

      
    } else {
      new Swiper("#swiper-co", {
        autoplay: {
          delay: 2000, // 设置轮播的时间
          disableOnInteraction: false // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
        },
        loop: false,
        updateOnWindowResize: true,
        observer: true, //实时检测，动态更新
        grabCursor: true,
        // observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        // observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        slidesPerView: 4,
        spaceBetween: 13,
        lazyLoading: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
    if (process.client) {
      transfromDom("baner_coo", "banner_coo_to");
    }
    // this.getSite();
  },
  methods: {
    handleHeight(id) {
      /* 由于在vue中不推荐控制dom, 即使我们是在查看属性也是, 确保vue成功定位到dom  并且返回数据 */
      let element = this.$refs["transform_box" + id];
      let height = element.clientHeight;
      return `height: ${height}px; transition: height ${height * 0.0012}s`;
    },

    /**
     * 获取地区下级code
     * 如 获取所有的省, 不传值,
     * 获取所有的市, 传省code
     */
    getSite(type = 1) {
      let code;
      if (type == 1) {
        code = 0;
      } else if (type == 2) {
        code = this.province_code;
      } else {
        code = this.city_code;
      }

      getAjax({
        where: code
      }).then(res => {
        if (res.data.code === 1) {
          if (type == 1) {
            this.province = res.data.data;
          } else if (type == 2) {
            this.city = res.data.data;
          } else {
            this.area = res.data.data;
          }
        }
      });
    },
    handleChange(type) {
      if (type == 1) {
        this.city = [];
        this.city_code = "";
        this.area = [];
        this.area_code = "";
        this.getSite(2);
      } else {
        this.area = [];
        this.area_code = "";
        this.getSite(3);
      }
    },
    commit() {
      setForm({
        type: 2,
        user_name: this.userName || "",
        phone: this.phone || "",
        company_name: this.firmName || "",
        province_code: this.province_code || "",
        city_code: this.city_code || "",
        area_code: this.area_code || "",
        address: this.site || ""
      }).then(res => {
        alert(res.data.msg || "请求失败");
      });
    }
  },
  computed: {
    // 判断当前是否为移动端布局
    mobileStatus() {
      return this.$store.state.isMobile;
    }
  },
  watch: {
    mobileStatus() {
      this.$nextTick(() => {
        if (this.mobileStatus) {
          new Swiper("#swiper-why", {
            updateOnWindowResize: true,
            observer: true, //实时检测，动态更新
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            // slidesPerView: 4,
            spaceBetween: 15,
            loop: true,
            lazyLoading: true,
            slidesPerView: 1.25,
            centeredSlides: true
          });
          new Swiper("#swiper-help", {
            updateOnWindowResize: true,
            observer: true, //实时检测，动态更新
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            // slidesPerView: 4,
            spaceBetween: 15,
            loop: true,
            lazyLoading: true,
            slidesPerView: 1.25,
            centeredSlides: true
          });
          new Swiper("#swiper-help-al", {
            updateOnWindowResize: true,
            observer: true, //实时检测，动态更新
            grabCursor: true,
            observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            // slidesPerView: 4,
            spaceBetween: 15,
            loop: true,
            lazyLoading: true,
            slidesPerView: 1.25,
            centeredSlides: true
          });
        } else {
          new Swiper("#swiper-co", {
            updateOnWindowResize: true,
            observer: true, //实时检测，动态更新
            grabCursor: true,
            // observer: true, // 修改swiper自己或子元素时，自动初始化swiper
            // observeParents: true, // 修改swiper的父元素时，自动初始化swiper
            slidesPerView: 4,
            spaceBetween: 13,
            lazyLoading: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" >
.container-cooperation-m {
  .banner {
    width: 100%;
    height: auto;
  }
  .show-list {
    .show-item {
      .item-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        // box-shadow: 0 1px 3px rgb(136, 132, 132);
        border-bottom: 0.02rem solid #dcdcdc;
        font-size: 0.36rem;
        font-weight: bold;
        color: rgba(11, 11, 11, 1);
        margin: 0 0.3rem;
        img {
          width: 0.4rem;
          height: 0.2rem;
          transition: all 0.3s;
        }
        .rotate {
          transform: rotateZ(180deg);
        }
      }
      .transition-box {
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: height 0.4s;
      }
    }
    .what {
      padding: 0.5rem 0.3rem 0.5rem;
      font-size: 0.3rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 0.46rem;
      .info {
        color: #000000;
        font-weight: bold;
      }
      p {
        margin-bottom: 0.3rem;
      }
      video {
        width: 100%;
        height: auto;
        min-height: 1.94rem;
      }
      .laber {
        font-size: 0.28rem;
        margin-top: 0.1rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        line-height: 0.26rem;
        text-align: center;
      }
    }
    .why {
      padding: 0.4rem 0;
      img {
        width: 100%;
        height: auto;
      }
    }

   
    .good {
      padding: 0.6rem 0.3rem 0;
      overflow: hidden;
      background-color: #fafafa;
      .good-item {
        height: 4rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0.02rem 0.08rem 0px rgba(183, 183, 183, 0.34);
        border-radius: 0.2rem;
        padding: 0 0.6rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.54rem;
        .good-item-title {
          font-size: 0.36rem;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          line-height: 0.3rem;
          position: relative;
          margin-bottom: 0.4rem;
          &::after {
            position: absolute;
            content: "";
            width: 0.4rem;
            height: 0.03rem;
            background-color: #FF4925;
            border-radius: 0.02rem;
            bottom: -0.13rem;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .good-item-info {
          font-size: 0.3rem;
          font-weight: 500;
          color: rgba(117, 117, 117, 1);
          line-height: 0.5rem;
        }
      }
    }
    .condition {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      padding: 0.2rem 0.3rem 0.4rem;
      overflow: hidden;
      .cond-item {
        margin-top: 0.4rem;
        flex: 33%;
        text-align: center;

        img {
          height: 1rem;
          width: auto;
          margin-bottom: 0.3rem;
        }
        .cond-item-title {
          font-size: 0.28rem;

          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          line-height: 0.3rem;
          margin-bottom: 0.1rem;
        }
        .cond-item-info {
          margin: 0 auto;
          max-width: 2.7rem;
          padding: 0 0.15rem;
          font-size: 0.24rem;
          font-weight: 500;
          color: rgba(117, 117, 117, 1);
          line-height: 0.36rem;
        }
      }
    }
    .flow {
      padding: 0.7rem 0 0.5rem;
      img {
        width: 100%;
        height: auto;
      }
    }
    .please {
      padding: 0.6rem 0.3rem;
      .please-info {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0.01rem 0.18rem 0px rgba(156, 156, 156, 0.44);
        border-radius: 0.1rem;
        overflow: hidden;
        padding: 0 0.3rem;
        .laber-not {
          margin-left: 1.9rem;
        }
        .input-item {
          display: flex;
          justify-content: space-between;
          // height: 1rem;
          padding-top: 0.2rem;
          // border-bottom: 0.02rem solid #eee;
          .laber {
            width: 1.9rem;
            position: relative;
            padding-left: 0.35rem;
            font-size: 0.3rem;
            line-height: 0.6rem;
            border-bottom: 0.02rem solid #eee;
          }
          .must::after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0.15rem;
            content: "*";
            color: red;
          }
          input,
          select {
            flex: 1;
            border: none;
            border-bottom: 0.02rem solid #eee;;
            outline: none;
            line-height: 0.5rem;
            font-size: 0.3rem;
            padding-left: 0.2rem;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            background-color: #fff;
          }
          .after-laber {
            width: 0.9rem;
            text-align: left;
          }
        }
        .commit {
          width: 100%;
          height: 0.8rem;
          text-align: center;
          line-height: 0.8rem;
          font-size: 0.3rem;
          color: #fff;
          background: linear-gradient(
          180deg,
          #FABE75,
          #FD2E0A
        );
          margin: 0.4rem auto;
          border: none;
          border-radius: 0.4rem;
          outline: none;
        }
        .please-code-info {
          margin: 0 auto 0.4rem;
          text-align: center;
          img {
            width: 2.17rem;
            height: auto;
            margin-bottom: 0.2rem;
          }
          div {
            font-size: 0.24rem;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(109, 109, 109, 1);
            line-height: 0.36rem;
          }
        }
      }
    }
  }
}

.swiper-button-next {
  font-weight: bold;
  color:#FF4925;
  top: 80px;
  right: -80px;
  outline: none;
}
.swiper-button-prev {
  font-weight: bold;
  color: #FF4925;
  top: 80px;
  left: -80px;
  outline: none;
}
.container-cooperation {
  .banner {
    width: 100%;
    height: 20.83vw;
    margin-top: 80px;
    position: relative;

    .left {
      position: absolute;
      left: 18%;
      bottom: 5%;
      width: 25.31vw;
      height: auto;
      opacity: 0;
      // transform: translateX(-50%);
      transition: all 0.6s;
      transition-delay: 1s;
    }
    .right {
      opacity: 0;
      transition: all 0.6s;

      transform: translateX(50%);
      position: absolute;
      top: 0;
      right: 12%;
      // height: 100%;
      width: 43.28vw;
      height: 100%;
      // max-width: 1200px;
      // right: 18%;
    }
  }
  .banner_coo_to {
    .left {
      // transform: translateX(0);
      opacity: 1;
    }
    .right {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .module {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .title {
    height: 60px;
    text-align: center;
    img {
      height: 100%;
    }
  }
  .what {
    .title {
      margin: 80px auto 97px;
    }
    .what-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 96px;
      video {
        width: 580px;
        height: auto;
      }
      .what-text {
        text-indent: 26px;
        flex: 1;
        margin-right: 50px;
        padding-left: 20px;
        height: 100%;
        font-size: 18px;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 40px;
        .b {
          font-size: 24px;
          margin-bottom: 15px;
        }
      }
    }
  }
  .why {
    padding-bottom: 90px;
    overflow: hidden;
    .title {
      margin: 55px auto;
    }
    .why-info {
      display: flex;
      justify-content: space-around;
      .partner {
          width: 280px;
          background: #fff;
          height: 360px;
          margin-right: 26px;
        .partner-img {
          width: 260px;
          height: 170px;
          text-align: center;
          line-height: 170px;
        }
          .title {
          margin-top: -2px;
          
          h3{
            font-size: 20px;
            color: #000000;
            position: relative;
            margin-bottom: 20px;
          }
          h3::after {
            content: "";
            display: block;
            background: #FF4925;
            width: 30px;
            height: 3px;
            position: absolute;
            left: 44%;
            top: 126%;

          }
          .title-info {
           
            p {
            color:#686868;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 14px;
            padding: 0 32px;
            }
          }
        }
      }
      
    }
  }
  
  .good {
    padding: 70px 0 40px;
    .title {
      margin-bottom: 60px;
    }
    .good-box {
      display: flex;
      justify-content: space-between;
      margin: 0 -10px;
      .good-item {
        flex: 1;
        margin: 0 10px;
        width: 286px;
        height: 360px;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.6s;
        cursor: pointer;
        position: relative;
        box-shadow: 0px 1px 16px 0px rgba(187, 187, 187, 0.13);
        border-radius: 10px;
        &:hover {
          transform: translateY(-10%);
          .top {
            bottom: 100%;
          }
          .bottom {
            top: 100%;
          }
        }
        .good-detail {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: #fff;
          border-radius: 10px;
          padding: 30px;
          color: #333333;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          div {
            font-size: 20px;
            line-height: 28px;
            text-align: center;
          }
          .subscript {
            width: 30px;
            height: 3px;
            background: #FF4925;
            border-radius: 2px;
            margin: 15px auto 25px;
          }
          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
          }
        }
        .top,
        .bottom {
          z-index: 1;
          position: absolute;
          width: 100%;
          height: 50%;
          background-color: #fff;
          text-align: center;
          transition: all 0.6s;
        }
        .top {
          bottom: 50%;
          left: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          img {
            height: 60px;
            width: auto;
            margin-bottom: 27px;
          }
        }
        .bottom {
          left: 0;
          top: 50%;
          p {
            font-size: 20px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
          }

          padding-top: 27px;
        }
      }
    }
  }
  .remain {
    overflow: hidden;
    .condition-title {
      margin: 100px auto 65px;
    }
    .condition-list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 130px;
      .condition-item {
        max-width: 176px;
        text-align: center;
        img {
          height: 100px;
          width: auto;
        }
        div {
          margin: 35px auto 10px;
          font-size: 22px;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          line-height: 30px;
        }
        p {
          font-size: 16px;
          font-weight: 400;
          color: rgba(104, 104, 104, 1);
          line-height: 30px;
        }
      }
    }
    

    .flow {
      width: 100%;
      display: block;
      max-width: 1200px;
      height: auto;
      text-align: center;
      margin: 0 auto 110px;
    }
    .request-title {
      margin: 110px auto 80px;
    }
    .request {
      ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #b2b2b2 !important;
      }

      // margin: 0 20px;
      height: 591px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 1px 12px 0px rgba(156, 156, 156, 0.14);
      border-radius: 10px;
      margin-bottom: 125px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .red {
        color: #ff0000;
        margin-right: 6px;
      }
      .user {
        display: flex;
        justify-content: space-between;
        .code {
          margin-left: 50px;
          img {
            width: 147px;
            height: 147px;
            margin-bottom: 22px;
          }
          div {
            font-size: 20px;
            color: rgba(109, 109, 109, 1);
            line-height: 36px;
            text-align: center;
          }
        }
        .user-info {
          & > div {
            display: flex;
            line-height: 50px;
            font-size: 20px;
            margin-bottom: 25px;
            > div {
              width: 120px;
              text-align: right;
              color: #000;
            }
            input {
              margin-left: 20px;
              width: 500px;
              height: 50px;
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgba(229, 229, 229, 1);
              padding-left: 20px;
              font-size: 20px;
              line-height: 50px;
              outline: none;
            }
          }
        }
      }
      .input-item {
        display: flex;
        line-height: 50px;
        font-size: 20px;
        margin-bottom: 25px;
        > div {
          width: 180px;
          text-align: right;
          color: #000;
        }
        
        input {
          margin-left: 20px;
          width: 760px;
          height: 50px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(229, 229, 229, 1);
          padding-left: 20px;
          font-size: 20px;
          line-height: 50px;
          outline: none;
        }
      }
      .button {
        width: 180px;
        height: 50px;
        background: linear-gradient(
          180deg,
          #FABE75,
         #FD2E0A
        );
        border-radius: 25px;
        margin-top: 65px;
        cursor: pointer;
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 50px;
        text-align: center;
        box-shadow: 0px 2px 13px 2px rgba(204, 198, 198, 0.281);
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
      }
    }
  }
  
}

.new_pc{
    margin: -50px auto 0px auto;
    z-index: 3333;
    position: relative;
  .new_pc_view {
      img {
        width: 100%;
        height: auto;
      }
    }
}






// .pc-pageContainer {
  .focus {
    width: 100%;
    height: calc(100vw / 1920 * 300);
    margin-top: 80px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 48px;
      color: #fff;
    }

    h3 {
      margin-top: 20px;
      font-size: 40px;
      color: #fff;
      border-bottom: 2px solid #fff;
      padding-bottom: 10px;
    }
  }

  .mainContent {
    // width: 1200px !important;
    .pc-intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 55px;
      width: 100%;

      h2 {
        font-size: 38px;
        color: #333;
      }

      p {
        width: 1060px;
        margin-top: 25px;
        font-size: 16px;
        text-align: center;
        color: #666;
      }

      .data {
        // width: 1200px;
        height: 150px;
        margin-top: 40px;
        background: rgba(247, 247, 247, 1);
        display: flex;
        justify-content: space-between;

        > div {
          width: 240px;
          height: 150px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 1px solid #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          span:first-child {
            font-size: 24px;
            font-weight: 600;
            color: #333;
          }

          span:last-child {
            font-size: 15px;
            color: #666;
            margin-top: 10px;
          }
        }

        div:last-child {
          border: 0;
        }
      }
    }

    .pc-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 60px;
      // width: 1200px;

      h2 {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          font-size: 28px;
          color: #333;
          padding-bottom: 10px;
          border-bottom: 3px solid #e60000;
          margin-top: -14px;
        }
      }

      .culture {
        display: flex;
        justify-content: space-between;
        margin-top: 110px;
        width: 1100px;
        // width: 100%;

        .item {
          width: 310px;
          height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 1);
          border-radius: 7px;
          box-shadow: 0 10px 10px #eee;
          box-sizing: border-box;
          padding: 0 40px;

          img {
            width: 110px;
            height: 110px;
            margin-top: -55px;
          }

          div {
            display: flex;
            flex-direction: column;
            align-items: center;

            h4 {
              font-size: 24px;
              margin-top: 24px;
            }

            > span {
              font-size: 16px;
              color: #ccc;
              margin-top: 10px;
            }

            > p {
              font-size: 18px;
              color: #666;
              margin-top: 20px;
            }

            > p:last-child {
              font-size: 14px;
              color: #ccc;
            }
          }
        }

        .item:hover {
          background: rgba(51, 51, 75, 1);

          div {
            h4 {
              color: #fff;
            }

            > p {
              color: #fff;
            }

            > p:last-child {
              color: #ccc;
            }
          }
        }
      }

      .business {
        // width: 1200px;
        display: flex;
        justify-content: space-between;
        margin-top: 60px;

        .item {
          width: 299px;
          height: 460px;
          position: relative;
          background-size: 100% 100%;

          .modal {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(35, 36, 37, 0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
              width: 48px;
              height: 48px;
            }

            h4 {
              font-size: 24px;
              color: #fff;
              margin-top: 25px;
            }

            div {
              width: 40px;
              border-top: 2px solid #fff;
              margin-top: 40px;
            }
          }
        }

        .item:hover {
          .modal {
            background: rgba(129, 0, 0, 0.8);
          }
        }
      }

      .advantage {
        // width: 1200px;
        height: 400px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;

        img{
          width: 100%;
        }

        .advantage01,
        .advantage02,
        .advantage03,
        .advantage04 {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;

          img.icon {
            width: 88px;
            height: 88px;
          }

          span {
            font-size: 22px;
            color: #666;
            margin-top: 15px;
          }
        }

        .advantage01 {
          top: 0;
          left: 58px;
        }

        .advantage02 {
          bottom: 0;
          left: 340px;
        }

        .advantage03 {
          top: 0;
          right: 313px;
        }

        .advantage04 {
          bottom: 0;
          right: 5px;
        }
      }

      .partner {
        // width: 1200px;
        margin-top: 60px;
      }

      .contactus {
        display: flex;
        justify-content: space-between;
        // width: 1200px;
        height: 400px;
        margin-top: 60px;

        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(250, 250, 250, 1);
          width: 600px;
          height: 100%;
          box-sizing: border-box;
          padding-left: 70px;

          h3 {
            font-size: 18px;
            color: #333;
            font-weight: 600;
          }

          p {
            margin-top: 40px;
            font-size: 15px;
            color: #666;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(242, 242, 242, 1);
          width: 600px;
          height: 100%;

          form {
            width: 450px;
            display: flex;
            flex-direction: column;

            .formControl {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 30px;

              input[type='text'],
              textarea {
                color: #666;
                font-size: 15px;
                border: 0;
                padding-left: 30px;
              }

              input[type='text'] {
                width: 200px;
                line-height: 40px;
              }

              textarea {
                width: 100%;
              }

              button {
                width: 100%;
                line-height: 40px;
                background: rgba(219, 60, 58, 0.7);
                color: #fff;
                font-size: 15px;
                border: 0;
              }
            }
          }
        }
      }

      .joinus {
        // width: 1200px;
        background: rgba(250, 250, 250, 1);
        margin-top: 60px;
        box-sizing: border-box;
        padding: 70px;

        > p {
          font-size: 15px;
          color: #666;
        }

        .positions {
          margin-top: 50px;
        }
      }
    }
  }
// }

.wap-pageContainer {
  .aboutus-focus {
    width: 100%;
    height: 2.5rem;
    // margin-top: 1.08rem;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 0.48rem;
      color: #fff;
    }

    h3 {
      margin-top: 0.2rem;
      font-size: 0.4rem;
      color: #fff;
      padding-bottom: 0.2rem;
      border-bottom: 2px solid #fff;
    }
  }

  .mainContentWap {
    margin-top: 0rem !important;
    .aboutus-intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0.6rem;

      h2 {
        font-size: 0.4rem;
        color: #333;
      }

      p {
        width: 7.5rem;
        margin-top: 0.25rem;
        font-size: 0.16rem;
        text-align: left;
        box-sizing: border-box;
        padding: 0 0.3rem;
        color: #666;
      }

      .data {
        width: 7.5rem;
        margin-top: 0.4rem;
        background: rgba(247, 247, 247, 1);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        > div {
          width: 3.75rem;
          height: 1.5rem;
          flex: none;
          border-top: 1px solid #fff;
          border-right: 1px solid #fff;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          span:first-child {
            font-size: 0.3rem;
            font-weight: 600;
            color: #333;
          }

          span:last-child {
            font-size: 0.24rem;
            margin-top: 0.15rem;
            color: #666;
          }
        }

        > div:last-child {
          width: 7.5rem;
        }
      }
    }

    .aboutus-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0.8rem;
      width: 100%;

      h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 0.34rem;
        }

        span {
          font-size: 0.36rem;
          margin-top: -0.14rem;
          padding-bottom: 0.1rem;
          color: #333;
          border-bottom: 3px solid #e60000;
        }
      }

      .culture {
        margin-top: 0.6rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;

        .item {
          width: 6.9rem;
          height: auto;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          background: rgba(51, 51, 75, 1);
          border-radius: 7px;
          box-sizing: border-box;
          padding: 0.2rem;
          margin-bottom: 0.4rem;

          img {
            width: 1.1rem;
            height: 1.1rem;
            flex: none;
          }

          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            flex: auto;
            margin-left: 0.2rem;
            align-items: flex-start;

            h4 {
              font-size: 0.28rem;
              color: #fff;
            }

            > span {
              font-size: 0.3rem;
              color: rgba(204, 204, 204, 0.2);
              position: absolute;
              right: 0.2rem;
              top: -0.1rem;
            }

            > p {
              font-size: 0.22rem;
              color: rgba(255, 255, 255, 0.8);
              margin-top: 0.1rem;
            }
          }
        }
      }

      .business {
        width: 100%;
        margin-top: 0.6rem;
        box-sizing: border-box;
        padding: 0 0.3rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .item {
          width: 3.45rem;
          height: 3.45rem;
          position: relative;
          background-size: 100% 100%;

          .modal {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(35, 36, 37, 0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img {
              width: 0.5rem;
              height: 0.5rem;
            }

            h4 {
              font-size: 0.28rem;
              margin-top: 0.2rem;
              color: #fff;
            }

            div {
              width: 0.4rem;
              margin-top: 0.4rem;
              border-top: 2px solid #fff;
            }
          }
        }

        .item:hover {
          .modal {
            background: rgba(129, 0, 0, 0.8);
          }
        }
      }

      .advantage {
        width: 6.9rem;
        height: 6.9rem;
        margin-top: 0.6rem;
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        .advantage01,
        .advantage02,
        .advantage03,
        .advantage04 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 3.45rem;
          height: 3.45rem;
          box-sizing: border-box;
          flex: none;
          img.num {
            width: 0.88rem;
            height: 0.77rem;
          }

          img.icon {
            width: 0.88rem;
            height: 0.88rem;
          }

          span {
            font-size: 0.24rem;
            margin-top: 0.25rem;
            color: #666;
          }
        }

        .advantage01 {
          border-right: 1px dashed #db3c3a;
          border-bottom: 1px dashed #db3c3a;
        }

        .advantage02 {
          border-bottom: 1px dashed #db3c3a;
        }

        .advantage03 {
          border-right: 1px dashed #db3c3a;
        }
      }

      .partner {
        width: 100%;
        margin-top: 0.6rem;
      }

      .contactus {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
        margin-top: 0.6rem;

        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(250, 250, 250, 1);
          box-sizing: border-box;
          width: 100%;
          height: auto;
          padding: 0.7rem 0.6rem;

          h3 {
            font-size: 0.32rem;
            color: #333;
            font-weight: 600;
          }

          p {
            margin-top: 0.2rem;
            font-size: 0.24rem;
            color: #666;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(242, 242, 242, 1);
          height: auto;
          width: 7.5rem;
          padding: 0.3rem 0 0.6rem;
          box-sizing: border-box;

          form {
            width: 7.1rem;
            display: flex;
            flex-direction: column;

            .formControl {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 0.3rem;

              input[type='text'],
              textarea {
                color: #666;
                border: 0;
                font-size: 0.24rem;
                padding-left: 0.3rem;
              }

              input[type='text'] {
                width: 3.45rem;
                line-height: 0.6rem;
              }

              textarea {
                width: 100%;
              }

              button {
                width: 100%;
                background: rgba(219, 60, 58, 0.7);
                color: #fff;
                border: 0;
                width: 100%;
                line-height: 0.6rem;
                font-size: 0.24rem;
              }
            }
          }
        }
      }

      .joinus {
        background: rgba(250, 250, 250, 1);
        box-sizing: border-box;
        width: 100%;
        margin-top: 0.6rem;
        padding: 0.7rem 0.3rem;

        > p {
          font-size: 0.15rem;
          color: #666;
        }

        .positions {
          margin-top: 0.5rem;
        }
      }
    }
  }
}



</style>
