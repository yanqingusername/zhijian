<template>
  <div class="root">
    <div v-if="!mobileStatus && !showNews" class="container-we">
      <vHeader :isShowTop="isShowTop"/>
      <div class="banner"></div>
      <div class="proposition">
       <div class="mainContent top-to-head">
         
         <div class="productinfo" style="width: 1200px;padding-top:30px;">
                  <div style="font-size: 24px;font-weight: bold;color: #333333;text-align: left;">最新、最热好礼推荐，小编带你种草</div>
          </div>
                <div class="productContainer">
                    <div class="list" v-if="strategysList.length > 0">
                          <a v-for="v in strategysList" :key="v.id" :href="'/news?id='+v.id" class="item" style="width:280px;height:400px;">
                            <img style="width: 252px;height: 294px;margin-top:15px;" :src="v.ico" />
                            <h3>{{v.title}}</h3>
                          </a>
                    </div>
                    <div v-else class="emptyDiv"></div>
                </div>
                <div v-if="strategysList.length > 0" style="margin-top:50px;padding-bottom:50px;display: flex;align-items: center;justify-content: center;">
                      <div style="width: 260px;height: 52px;border: 1px solid #EB1615;font-size: 24px;color: #EB1615;display: flex;align-items: center;justify-content: center;" @click="moreClick">更多</div>
                </div>
            </div>
      </div>
    </div>
    
    <div v-if="mobileStatus && !showNews" class="container-we-m">
      <vHeader :isShowTop="isShowTop"/>
      <div class="proposition">
          
          <div class="productinfo">最新、最热好礼推荐，小编带你种草</div>
                  <div class="productContainer" style="min-height:8rem;">
                      <div class="list" v-if="strategysList.length> 0">
                            <a  v-for="v in strategysList" :key="v.id" :href="'/news?id='+v.id" class="item" >
                              <img :src="v.ico" />
                              <h1>{{v.title}}</h1>
                            </a>
                      </div>
                      <div v-else class="emptyDiv"></div>
                  </div>
                  <div class="button-view" v-if="strategysList.length > 0">
                        <div class="button-info" @click="moreClick">更多</div>
                  </div>
              </div>
              <div style="height:0.4rem;background:#FAFAFA;"></div>
    </div>

    <!-- -->
    <div class="pc-product-detail" v-if="!mobileStatus && showNews">
      <div class="container-we">
        <vHeader :isShowTop="isShowTop"/>
        <div class="banner"></div>
        <div class="mainContent top-to-head">
          <div class="productinfo">
            <div style="width: 1200px;">
                  <div class="new-router nongsini" >
                      <span class="shoushi" @click="$router.go(-1)">礼物攻略</span>
                      <img src="~/assets/images/icon_12_09_right.png" alt="arrow|箭头" />
                      <span class="shoushi man-title-small">攻略详情</span>
                    </div>
                  </div>
          </div>
                
                <div class="productinfo">
                  <div style="width: 1200px;background: #FFFFFF;display: flex;align-items: center;justify-content: center;flex-direction: column;">
                      <div style="width:720px;display: flex;justify-content: center;flex-direction: column;">
                        <h1 style="padding:60px 0px 20px 0px;text-align: center;">{{strategysInfo.title}}</h1>
                        <div style="text-align: end;padding-bottom:10px;padding-bottom: 12px;border-bottom: 1px solid #EEEEEE;">
                          <span style="font-size: 14px;color: #333333;">by {{strategysInfo.source}}</span>
                          <img style="width:20px;height:20px;margin-left:34px;margin-right:4px;" src="~/assets/images/icon-view.png" alt="arrow|箭头" />
                          <span style="font-size: 14px;color: #999999;">{{strategysInfo.visits}}</span>
                        </div>
                      </div>
                      <div style="width:720px;display: flex;align-items: center;justify-content: center;flex-direction: column;margin-top:20px;">
                        <div class="pc-content" v-html="text">{{content.content}}</div>
                      </div>
                  </div>
                </div>
            </div>
      </div>
    </div>

    <div class="wap-product-detail" v-if="mobileStatus && showNews">
      <div class="wap-container-we-m" v-if="mobileStatus">
        <vHeader :isShowTop="isShowTop" :isBack="isBack" :paramId="paramId"/>
        <div class="wap-main">
              <div class="wap-main-h1">{{strategysInfo.title}}</div>

              <div class="wap-main-price">
                                <span class="wap-main-price1">by {{strategysInfo.source}}</span>
                                <img class="wap-main-price2" src="~/assets/images/icon-view.png" />
                                <span class="wap-main-price3">{{strategysInfo.visits}}</span>
                            </div>
                
                <div class="wap-main-content">
                  <div class="wap-main-content-m" v-html="text">{{content.content}}</div>
                </div>
        </div>
      </div>
      
    </div>


  </div>
</template>

<script>

import vHeader from "/components/vHeader";
import { strategyList,strategyInfo } from "~/api/zhijianapi";
export default {
  components:{
        vHeader,
  },
  head: {
    title: "指间礼物",
  },
  data() {
    return {
      content: {
        "content": ""
      }, // 富文本内容
      text: "",
      showNews: false,
      
      strategysList: [],
      page: 1,
      limit: 20,
      strategysInfo: "",
      paramId: "",
      isShowTop:true,
      isBack: true
    };
  },
  mounted() {
    this.getStrategyList();

    if (this.$route.query.id) {
      this.paramId = this.$route.query.id;
      this.getStrategyInfo();
    }else{
      this.showNews = false;
    }
    
    if (process.client) {
    }
  },
  methods: {
    getStrategyList() {
      strategyList({
        "action":"strategy",
        "code":"LIST",
        "maxResultCount":this.limit,
        "skipCount":this.page,
        "is_dev":"1"
      }).then(res => {
        if (res.data.sta === 1) {
          this.page = res.data.items.length != 0 ? this.page + 1 : this.page;
          if (this.mobileStatus) {
            this.strategysList = this.strategysList.concat(res.data.items);
          } else {
            this.strategysList = this.strategysList.concat(res.data.items);
          }
        }
        this.$nextTick(() => {
          this.loading = false;
        });
      });
    },
    getStrategyInfo() {
      strategyInfo({
        "action":"strategy",
        "code":"info",
        "id": this.paramId,
        "is_dev":"1"
      }).then(res => {
        if (res.data.sta === 1) {
            this.strategysInfo = res.data.data;
            this.showNews = true;
            this.content.content = res.data.data.content;
            this.text = res.data.data.content;
        }
      });
    },
    moreClick(){
      this.getStrategyList();
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
    }
  },
   watch: {
    mobileStatus() {
      
    }
  }
};
</script>

<style lang="scss">
.container-we-m {
  width: 100%;
  .proposition{
    background: #FAFAFA;
    .productinfo{
      padding: 0.3rem 0.3rem 0rem 0.3rem;
      font-size: 0.3rem;
      color: #666666;
    }
    .productContainer {
      width: 100%;
      overflow: hidden;

      .list {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
        padding: 0rem 0.1rem;
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.16rem;
          margin-left: 0.2rem;
          margin-top: 0.2rem;
          text-decoration: none;
          width: 3.35rem;
          height: 5rem;
          background: #FFFFFF;
          border-radius: 0.06rem;

          img {
            width: 3rem;
            height: 3.52rem;
          }

          h1 {
            overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
            margin: 0.15rem 0.05rem 0rem 0.05rem;
            font-size: 0.28rem;
            color: #666666;
            text-align: left;
          }
          
          
        }
      }
    }
          .button-view{
            margin-top:0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          

            .button-info {
              width: 2.6rem;
              height: 0.6rem;
              border: 1px solid #EB1615;
              font-size: 0.24rem;
              color: #EB1615;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

    .emptyDiv {
      height: 3rem;
    }

    .loadingMore {
      margin: 0.2rem 0;
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
        transition: all 0.6s;
        overflow: hidden;
        position: relative;
      }
      .img-box {
        padding: 0;
        img {
          // width: 100%;
          height: 100%;
          transition: all 0.6s;
          cursor: pointer;
        }
        img:hover {
          transform: scale(1.2);
        }
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
            transition: all 0.6s;
            &:hover {
              transform: scale(1.2);
            }
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


  .mainContent {
    .productContainer {
      width: 100%;
      overflow: hidden;

      .list {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 1240px;
        margin-left: -5px;

        .item {
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 40px 10px 0;
          background: rgba(255, 255, 255, 1);
          text-decoration: none;

          img {
            width: 260px;
            height: 260px;
          }

          h3 {
            overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
            margin: 20px 18px 12px;
            font-size: 18px;
            font-weight: 600;
            color: #333333;
            text-align: left;
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
}



  



.pc-product-detail{
  .pc-content{
              width: 100%;
                height: auto;
            }
            .pc-content img {
                width: 100%;
                height: auto;
              }

  .mainContent {
    width: 100%;

   .new-router {
      width: 1200px;
      box-sizing: border-box;
      // margin: 0 20px;
      padding: 30px 0;
      // border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      color: #333333;
      font-size: 16px;
      // justify-content: center;
      span:hover {
        color: #333333;
      }
      img {
        // transform: rotateZ(90deg);
        width: 15px;
        height: 15px;
        margin: 0 10px;
      }
      .man-title-small {
        margin-left: 0px;
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
      // background: rgba(255, 255, 255, 1);
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


          .help-item {
            // padding: 0 13px;
            // width: 260px;
            text-align: center;
            overflow: hidden;
            .img-box {
              width: 100%;
              border-radius: 0px 0px 0 0;
              overflow: hidden;
              img {
                width: 100%;
                height: 580px;
                transition: all 0.6s;
                &:hover {
                  transform: scale(1.2);
                }
              }
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
             span{
              width: 80px;
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

  .wap-product-detail{
    min-height: 10rem;
    .wap-container-we-m{
      width: 100%;
      
      .wap-main{

         .wap-main-h1{
            padding: 0.3rem;
            font-size: 0.32rem;
            color: #333333;
          }
          .wap-main-price{
            margin: 0rem 0.3rem;
            display: flex;
            align-items: center;
            padding-bottom: 0.12rem;
            border-bottom: 1px solid #EEEEEE;

            .wap-main-price1{
              font-size: 0.22rem;
              color: #666666;
              margin-left: 0rem;
            }

            .wap-main-price2{
              width: 0.28rem;
              height: 0.28rem;
              margin-left: 0.4rem;
            }
            .wap-main-price3{
              font-size: 0.22rem;
              color: #999999;
              margin-left: 0.08rem;
            }
          }
         

          

         
          .wap-main-content{
            width: 100%;
                height: auto;
                margin-top: 0.3rem;
            .wap-main-content-m{
              width: 100%;
                height: auto;
                    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
            }
            .wap-main-content-m img {
                width: 7.2rem;
                height: auto;
              }
          }
      }
    }

   
  }

</style>