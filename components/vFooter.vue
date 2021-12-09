
<template>
  <footer :class="`footer ${mobileStatus ? 'footer-m' : ''}`">
    
    <div v-if="!mobileStatus" class="container">
      <!-- <ul class="menu">
        <li @click="pushUrl('/')">首页</li>
        <li @click="pushUrl('/we')">走进我们</li>
        <li @click="pushUrl('/news')">新闻中心</li>
        <li @click="pushUrl('/cooperation')">合作加盟</li>
        <li @click="pushUrl('/join')">加入我们</li>
      </ul> -->
      <div class="new-menu">
                            <h3>关于指间</h3>
                            <a href="/cooperation#intro" style="text-decoration: none;">公司简介</a>
                            <a href="/cooperation#culture" style="text-decoration: none;">企业文化</a>
                            <a href="/cooperation#business" style="text-decoration: none;">公司业务</a>
                            <a href="/cooperation#partner" style="text-decoration: none;">合作伙伴</a>
                        </div>
                        <div class="new-menu">
                            <h3>指间商城</h3>
                            <a style="text-decoration: none;" v-for="i in shopColumnList" :key="i.code" :href="'/we?id=' + i.code">{{i.name}}</a>
                        </div>
                        <div class="new-menu">
                            <h3>指间服务</h3>
                            <a style="text-decoration: none;">在线送礼</a>
                            <a style="text-decoration: none;">礼品采购</a>
                            <a style="text-decoration: none;">礼品兑换</a>
                            <a style="text-decoration: none;">礼品定制</a>
                        </div>
                        <div class="new-menu">
                            <h3>联系我们</h3>
                            <a href="/cooperation" style="text-decoration: none;">公司采购</a>
                            <a href="/cooperation#contactus" style="text-decoration: none;">供应商合作</a>
                            <a href="/cooperation#joinus" style="text-decoration: none;">人才招聘</a>
                        </div>
      <div class="code">
        <div class="code-module">
          <img src="http://admin.zhijianliwu.com/static/images/gzh.png" alt="指间礼物公众号" title="在微信上扫一扫即可关注" />
          <p>指间礼物公众号</p>
        </div>
        <div class="code-module">
          <img src="http://admin.zhijianliwu.com/static/images/xcx.png" alt="指间礼物小程序" title="在微信上扫一扫即可关注" />
          <p>指间礼物小程序</p>
        </div>
      </div>
    </div>
    <h4 v-if="!mobileStatus" class="certificate">
      <span v-if="!mobileStatus&&rullist.length>0">友情链接：<a v-for="(item,index) in rullist" :key="index" :href="item.path">{{item.title}}</a></span>
      <span style="margin-left:40px !important;">ICP备案证书号：</span><a href='https://beian.miit.gov.cn/#/Integrated/index' target="_blank">京ICP备15002753号-9</a><span>|</span>
      <span>Copyright©2020 zhijianliwu.com 指间礼物. 版权所有</span>
    </h4>

    <div v-if="mobileStatus" class="container-m">
       <div class="top">
                <div class="container">
                    <div class="left">
                        <div class="menu">
                            <h3>关于指间</h3>
                            <a href="/cooperation#intro" style="text-decoration: none;">公司简介</a>
                            <a href="/cooperation#culture" style="text-decoration: none;">企业文化</a>
                            <a href="/cooperation#business" style="text-decoration: none;">公司业务</a>
                            <a href="/cooperation#partner" style="text-decoration: none;">合作伙伴</a>
                        </div>
                        <div class="menu">
                            <h3>指间商城</h3>
                            <a style="text-decoration: none;" v-for="i in shopColumnList" :key="i.code" :href="'/we?id=' + i.code">{{i.name}}</a>
                        </div>
                        <div class="menu">
                            <h3>指间服务</h3>
                            <a style="text-decoration: none;">在线送礼</a>
                            <a style="text-decoration: none;">礼品采购</a>
                            <a style="text-decoration: none;">礼品兑换</a>
                            <a style="text-decoration: none;">礼品定制</a>
                        </div>
                        <div class="menu">
                            <h3>联系我们</h3>
                            <a href="/cooperation" style="text-decoration: none;">公司采购</a>
                            <a href="/cooperation#contactus" style="text-decoration: none;">供应商合作</a>
                            <a href="/cooperation#joinus" style="text-decoration: none;">人才招聘</a>
                        </div>
                    </div>
                    <div class="right">
                        <div class="item">
                            <img src="http://admin.zhijianliwu.com/static/images/gzh.png" />
                            <span>指间礼物公众号</span>
                        </div>
                        <div class="item">
                            <img src="http://admin.zhijianliwu.com/static/images/xcx.png" />
                            <span>指间礼物小程序</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="container">
                    <span>Copyright©2020 zhijianliwu.com 指间礼物. 版权所有</span>
                </div>
            </div>
    </div>
  </footer>
</template>

<script>
import { companylists,shopColumn  } from "~/api/zhijianapi";
export default {
  name: "vFooter",
  data() {
    return {
      rullist: [],
      year: '2018',
      shopColumnList: []
    };
  },

  filters: {
    updateYear(value) {
      const y =  new Date().getFullYear()
      return `2018-${y}`      
    }
  },

  methods: {
    pushUrl(path = "/") {
      path += "?timestamp=" + +new Date();
      this.$router.push(path);
    },

    list() {
      companylists({}).then(res => {
        if (res.data.sta == 1) {
          this.rullist = res.data.items;
        }
      });
    },
    getShopColumn(){
      shopColumn({
        "action":"shop",
        "code":"column",
        "is_dev":"1"
      }).then(res => {
        if (res.data.sta === 1) {
            this.shopColumnList = res.data.items;
        }
      });
    },
  },
  computed: {
    // 判断当前是否为移动端布局
    mobileStatus() {
      return this.$store.state.isMobile;
    }
  },
  created() {
    this.list();
    this.getShopColumn();
  }
};
</script>

<style lang="scss" scoped>
/** 移动端布局 start */
// .footer-m {
//   height: 3rem !important;
// }

.foot-info-m {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.certificate-m {
  flex: 1;
  margin-top: 0.1rem;
  padding-top: 0.1rem;
  border-top: 0.01rem solid rgba(238, 238, 238, 0.795);
  font-size: 0.14rem;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.certificate-m-title {
  -ms-transform: scale(0.8);
  -webkit-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
  width: 150%;
  text-align: center;
}

.certificate-m-info {
  width: 160%;
  text-align: center;
  -ms-transform: scale(0.8);
  -webkit-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
}
.info-m {
  font-size: 0.24rem;
  line-height: 0.34rem;
}
.info-m p a {
  color: #fff;
  text-decoration: none;
}
.info-m p:first-child {
  margin-bottom: 0.1rem;
}
.code-m {
  display: flex;
}
.code-m > div {
  margin-left: 0.27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.code-m p {
  margin-top: 0.1rem;
  font-size: 0.2rem;
  white-space: nowrap;
}

.code-m img {
  width: 1.24rem;
  height: 1.24rem;
}
/** 移动端布局 end */

.footer {
  background-color: #282a28;
  /* height: 380px; */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.certificate {
  text-align: center;
  line-height: 50px;
  border-top: 1px solid #444;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
}
.certificate a,
.certificate span {
  color: #999;
  margin: 0 5px;
  text-decoration: none;
}

.certificate a:hover {
  color: #fff;
  margin: 0 5px;
  text-decoration: underline;
}

.container {
  flex: 1;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 40px 20px;
  box-sizing: border-box;
}
.container .avatar {
  width: 26px;
  height: 25px;
  flex-shrink: 0;
  margin-right: 10px;
}
.info {
  display: flex;
  max-width: 24%;
  /* margin-right: ; */
}
.phome-laber {
  font-size: 18px;
  font-weight: normal;
}
.phone {
  font-size: 24px;
  color: #fff;
  font-weight: normal;
  text-decoration: none;
}
.site-laber {
  font-size: 18px;
  font-weight: normal;
  margin: 30px 0 5px;
}
.site {
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
}
.menu {
  margin-right: 20px;
  flex: 1;
  display: flex;
  font-size: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.menu li {
  margin: 0 14px;
  white-space: nowrap;
  cursor: pointer;
  height: 20px;
  margin-bottom: 20px;
}
.menu li:hover {
  color: rgba(160, 107, 89, 0.582);
}
.code {
  display: flex;
  justify-content: flex-end;
}
.code > div {
  text-align: center;
}
.code > div:first-child {
  margin-right: 46px;
}
.code > div > img {
  width: 124px;
  height: 124px;
  margin-bottom: 20px;
}
.youqing {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 20px;
  height: 60px;
  font-size: 16px;
  line-height: 16px;
}
.youqing > a {
  color: #fff;
  border-right: 1px solid #dcdcdc;
  padding: 0 10px;
  font-size: 16px;
  height: 16px;
  text-decoration: none;
  line-height: 16px;
}
.youqing > a:last-child {
  border: none;
}
.youqing > a:hover {
  text-decoration: underline;
}

.new-menu {
          display: flex;
          flex-direction: column;
          margin-right: 120px;
}

         .new-menu h3 {
            font-size: 16px;
            color: #fff;
            margin-bottom: 20px;
          }

          .new-menu a {
            font-size: 14px;
            color: #bfbfbf;
            line-height: 200%;
          }

          .new-menu a:hover {
            color: #fff;
            text-decoration: underline;
          }


          .container-m {
  // margin-top: 0.8rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .top {
    background: rgba(31, 31, 31, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem 0;

    .container {
      width: 100%;
      padding: 0 0.8rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .left {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .menu {
          display: flex;
          flex-direction: column;
          margin-right: 0;

          h3 {
            font-size: 0.16rem;
            margin-bottom: 0.2rem;
            color: #fff;
          }

          a {
            font-size: 0.14rem;
            color: #bfbfbf;
            line-height: 200%;
          }

          a:hover {
            color: #fff;
            text-decoration: underline;
          }
        }
      }

      .right {
        display: flex;
        justify-content: end;
        margin-top: 0.4rem;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 0;
          margin-right: 0.7rem;

          img {
            width: 1.8rem;
            height: 1.8rem;
          }

          span {
            font-size: 0.18rem;
            color: #e6e6e6;
            margin-top: 20px;
          }
        }
      }
    }
  }

  .bottom {
    background: rgba(10, 10, 10, 1);
    height: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
      width: 100%;
      height: 100%;
      text-align: center;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding:0.1rem 0rem;

      a {
        color: #999;
      }

      a:hover {
        color: #fff;
        text-decoration: underline;
      }

      a,
      span {
        font-size: 0.12rem;
        margin: 0 3px;
      }
    }
  }
}

        
</style>