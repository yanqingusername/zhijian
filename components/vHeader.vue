<template>
  <header :class="isShowTop ? 'headerTop' : 'header'">
    <div v-if="!mobileStatus" class="container" style="align-items: center;">
      <div style="display:flex;align-items: center;">
        <a href="/" v-if="isShowTop" class="logo" style="height:50px;width:160px;"><img class="logo" style="height:50px;width:160px;" src="~/assets/images/icon-shop-logo-01.png" /></a>
        <a href="/" v-else class="logo" style="height:50px;width:160px;"> <img class="logo" style="height:50px;width:160px;" src="~/assets/images/icon-shop-logo-02.png" /></a>
        <ul class="menu">
          <li :class="active === 0 && 'active'" @click="pushUrl('/')">首页</li>
          <li :class="active === 1 && 'active'" @click="pushUrl('/we')">指间商城</li>
          <li :class="active === 2 && 'active'" @click="pushUrl('/news')">礼物攻略</li>
          <li :class="active === 3 && 'active'" @click="pushUrl('/cooperation')">关于我们

          <!-- <ul class="active-li" style="background:#FFFFFF;">
            <li :class="active === 0 && 'active'" @click="pushUrl('/')">公司文化</li>
            <li :class="active === 1 && 'active'" @click="pushUrl('/we')">企业简介</li>
            <li :class="active === 2 && 'active'" @click="pushUrl('/news')">公司业务</li>
            <li :class="active === 3 && 'active'" @click="pushUrl('/cooperation')">我们的优势</li>
            <li :class="active === 3 && 'active'" @click="pushUrl('/cooperation')">联系我们</li>
            <li :class="active === 3 && 'active'" @click="pushUrl('/cooperation')">加入我们</li>
          </ul> -->
          </li>
        </ul>
      </div>
      <!-- <div class="left">
          <a href="/pc"><img class="logo" :src="isShowTop ? 'https://zhijianliwu.com//assets/icon-shop-logo-01.png':'https://zhijianliwu.com//assets/icon-shop-logo-02.png'" /></a>
                   
                  <nav class="navs">
                    <div class="item" v-for="v in menuList" :key="v.id">
                    <a v-if="page === v.page " class="active">{{v.name}}</a>
                    <a v-else :href="'/pc'+ v.url ">{{v.name}}</a> 
                      <div v-if="v.items && v.items.length > 0" class="menu" v-for="m in v.items" :key="m.id">
                          <a v-if="page === m.page " class="active">{{m.name}}</a>
                          <a v-else :href="'/pc'+ m.url ">{{v.name}}</a> 
                      </div> 
                    </div>
                  </nav>
      </div> -->
      <div class="right">
        <div class="button">
          <img v-if="isShowTop" src="~/assets/images/icon-xcx-01.svg" />
          <img v-else src="~/assets/images/icon-xcx.svg" />
          <span>小程序</span>
        </div>
        <div class="drop">
          <img src="http://admin.zhijianliwu.com/static/images/xcx.png" />
          <span>微信扫一扫体验</span>
        </div>
      </div>                      
    </div>
    <div v-if="mobileStatus" class="container-m">
      <img v-if="isBack" class="logo" style="height: 0.44rem;" @click="pushUrls('/we?id='+paramId); handleChangeMenu(true)" src="~/assets/images/icon-arrow-left.png" />
      <img v-else class="logo" @click="pushUrl('/'); handleChangeMenu(true)" src="~/assets/images/icon-shop-logo-01.png" />
      <div class="menu">
        <img
          v-if="hideMenu"
          @click="handleChangeMenu"
          src="~/assets/images/icon-menu.png"
          alt="菜单"
          title="菜单"
        />
        <img
          v-if="!hideMenu"
          @click="handleChangeMenu"
          src="~/assets/images/icon-menu.png"
          alt="菜单"
          title="菜单"
        />
        <ul class="menu-list" :style="hideMenu ? '' : 'transform: translateX(-100%);'">
          <li :class="active === 0 && 'active'" @click="pushUrl('/'); handleChangeMenu(true)">首页</li>
          <li :class="active === 1 && 'active'" @click="pushUrl('/we'); handleChangeMenu(true)">指间商城</li>
          <li
            :class="active === 2 && 'active'"
            @click="pushUrl('/news'); handleChangeMenu(true)"
          >礼物攻略</li>
          <li
            :class="active === 3 && 'active'"
            @click="pushUrl('/cooperation'); handleChangeMenu(true)"
          >关于我们</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "vHeader",
  data() {
    return {
      hideMenu: true,
      menuList:[
  {
    page: 'home',
    name: '首页',
    url: '/',
  },
  {
    page: 'product',
    name: '指间商城',
    url: '/product/list',
  },
  {
    page: 'strategy',
    name: '礼物攻略',
    url: '/strategy/list/1',
  },
  {
    page: 'aboutus',
    name: '关于我们',
    url: '/aboutus',
    items: [
      {
        page: 'culture',
        name: '公司文化',
        url: '/aboutus#culture',
      },
      {
        page: 'intro',
        name: '企业简介',
        url: '/aboutus#intro',
      },
      {
        page: 'business',
        name: '公司业务',
        url: '/aboutus#business',
      },
      {
        page: 'advantage',
        name: '我们的优势',
        url: '/aboutus#advantage',
      },
      {
        page: 'contactus',
        name: '联系我们',
        url: '/aboutus#contactus',
      },
      {
        page: 'joinus',
        name: '加入我们',
        url: '/aboutus#joinus',
      },
    ],
  },
]
    };
  },
  props: {
    isShowTop: {
      // 默认提示
      type: Boolean,
      default() {
        return false;
      }
    },
    page:{
      type: String,
      default() {
        return 'home';
      }
    },
    isBack: {
      // 默认提示
      type: Boolean,
      default() {
        return false;
      }
    },
    paramId:{
      type: String,
      default() {
        return '';
      }
    },
  },
  methods: {
    pushUrl(path = "/") {
      if (path != this.$route.path && path != "/news") {
        path += "?timestamp=" + +new Date();
        this.$router.push(path);
      } else if (path == "/news") {
        path += "?timestamp=" + +new Date();
        this.$router.replace(path);
        this.isBack = false;
      }
    },
    pushUrls(path = "/") {
        // path += "?timestamp=" + +new Date();
        // this.$router.push(path);
        this.$router.go(-1);
    },
    /**
     * 开关移动端状态下的右侧菜单
     * @param {Boolean} status 菜单显示状态
     */
    handleChangeMenu(status) {
      if (typeof status !== "boolean") {
        this.hideMenu = !this.hideMenu;
      } else {
        this.hideMenu = status;
      }
    }
  },
  computed: {
    active() {
      switch (this.$route.path) {
        case "/":
          return 0;
        case "/we":
          return 1;
        case "/news":
          return 2;
        case "/cooperation":
          return 3;
        // case "/agent":
        //   return 4;
        case "/join":
          return 4;
      }
    },
    mobileStatus() {
      return this.$store.state.isMobile;
    }
  }
};
</script>

<style  scoped>
/** 移动端样式 start */
.container-m {
  height: 1.2rem;
  padding: 0.2rem 0.3rem 0.18rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
}
.container-m .logo {
  height: 100%;
  width: auto;
}
.container-m .menu {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-m .menu > img {
  height: 0.44rem;
  width: auto;
}
.container-m .menu-list {
  position: absolute;
  top: 1.2rem;
  left: 100%;
  transition: all 0.4s;
  height: 100vh;
  padding: 0.62rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.623);
  overflow-y: scroll;
}
.container-m .menu-list li {
  white-space: nowrap;
  width: 1.4rem;
  color: #bababa;
  position: relative;
  font-size: 0.32rem;
  margin-bottom: 1rem;
  transition: all 0.2s;
}
.container-m .menu-list li.active {
  color: #fff;
  font-weight: bold;
}
.container-m .menu-list li.active::after {
  transition: all 0.4s;
  position: absolute;
  content: "";
  width: 0.5rem;
  height: 0.04rem;
  background-color: #fff;
  border-radius: 0.02rem;
  bottom: -0.15rem;
  left: 0;
}
/** 移动端样式 end */

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
}
.headerTop{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: #FFFFFF;
}
.header .container {
  height: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 10px 15px 8px;
  box-sizing: border-box;
}
.header .container .logo {
  height: 100%;
  width: auto;
}
.header .container .menu {
  display: flex;
  position: relative;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.header .container .menu li {
  width: 120px;
  height: 100%;
  text-align: center;
  line-height: 62px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color:#fff;
  transition: all 0.4s;
  cursor: pointer;
  opacity: .69;
}
.header .container .menu li:hover {
  font-weight: bold;
  opacity: 1;
}

.header .container .menu li.active {
  font-weight: bold;
  opacity: 1;
}

.header .container .menu .active-li1{
  /* display: flex;
  position: relative;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; */
}

  .header .container .menu .active-li li{
   position: absolute;
            width: 120px;
            top: 50px;
            left: 0;
            background: rgba(255, 255, 255, 1);
            border: 1px solid #eee;
            border-top: 0;
            box-sizing: border-box;
            display: none;
}

.header .container .menu .active-li li:hover {
  background: rgba(219, 60, 58, 1);
  color: #fff;
}

.header .container .menu .active-li li.active {
  background: rgba(219, 60, 58, 1);
  color: #fff;
}

.header .container .menu .active-li1:hover {
      
    }
   .header .container .menu .active-li1:hover .active-li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      


.header .container .menu .active-bar {
  position: absolute;
  width: 36px;
  height: 4px;
  border-radius: 6px;
  background-color: #fff;
  bottom: 12px;
  transform: translateX(-50%);
  transition: all 0.4s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


   .header .container .right {
      display: flex;
      align-items: center;
      width: 125px;
      height: 50px;
      position: relative;
    }

    .header .container  .right .button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #FFFFFF;
      }

     .header .container .right .button  img {
          width: 22px;
          height: 22px;
          margin-right: 5px;
        }
      

    .header .container  .drop {
        position: absolute;
        top: 50px;
        left: 0;
        width: 125px;
        height: 166px;
        background: rgba(255, 255, 255, 1);
        display: none;
        border: 1px solid #eee;
        box-sizing: border-box;
      }

     .header .container   .drop img {
          width: 120px;
          height: 120px;
        }

      .header .container  .drop span {
          color: #999;
          font-size: 12px;
          margin-top: 10px;
        }
     

   .header .container .right:hover {
      
    }
   .header .container .right:hover .drop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }


      .item {
          position: relative;
          width: 120px;
          height: 50px;
          text-align: center;
      }

        .item   > a {
            font-size: 18px;
            color: #999;
            line-height: 50px;
            display: block;
          }

         .item  > a.active {
            color: #333;
            font-weight: 600;
          }

         .item  .menu {
            position: absolute;
            width: 120px;
            top: 50px;
            left: 0;
            background: rgba(255, 255, 255, 1);
            border: 1px solid #eee;
            border-top: 0;
            box-sizing: border-box;
            display: none;
         }

         .item  .menu   > a {
              line-height: 40px;
              border-top: 1px solid #eee;
              box-sizing: border-box;
              color: #888;
              font-size: 14px;
            }

        .item  .menu    > a:hover {
              background: rgba(219, 60, 58, 1);
              color: #fff;
            }
          
        

        .item:hover {
        

         
        }
        .item:hover  > a {
            color: #333;
            font-weight: 600;
          }
          .item:hover .menu {
            display: flex;
            flex-direction: column;
          }

.headerTop {
  box-shadow: 0 3px 10px #eee;
}

.headerTop .container {
  height: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 10px 15px 8px;
  box-sizing: border-box;
}
.headerTop .container .logo {
  height: 100%;
  width: auto;
}
.headerTop .container .menu {
  display: flex;
  position: relative;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.headerTop .container .menu li {
  width: 120px;
  height: 100%;
  text-align: center;
  line-height: 62px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color:#999999;
  transition: all 0.4s;
  cursor: pointer;
}
.headerTop .container .menu li:hover {
  font-weight: bold;
  color: #333333;
}

.headerTop .container .menu li.active {
  font-weight: bold;
  color: #333333;
}

.headerTop .container .menu .active-bar {
  position: absolute;
  width: 36px;
  height: 4px;
  border-radius: 6px;
  background-color: #fff;
  bottom: 12px;
  transform: translateX(-50%);
  transition: all 0.4s;
}

.headerTop .container .right {
      display: flex;
      align-items: center;
      width: 125px;
      height: 50px;
      position: relative;
    }

    .headerTop .container  .right .button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #db3c3a;
      }

     .headerTop .container .right .button  img {
          width: 22px;
          height: 22px;
          margin-right: 5px;
        }
      

    .headerTop .container  .drop {
        position: absolute;
        top: 50px;
        left: 0;
        width: 125px;
        height: 166px;
        background: rgba(255, 255, 255, 1);
        display: none;
        border: 1px solid #eee;
        box-sizing: border-box;
      }

     .headerTop .container   .drop img {
          width: 120px;
          height: 120px;
        }

      .headerTop .container  .drop span {
          color: #999;
          font-size: 12px;
          margin-top: 10px;
        }
     

   .headerTop .container .right:hover {
      
    }
   .headerTop .container .right:hover .drop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }



/* 

.pc-header,
.pc-headerTop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  background: #fff;
  z-index: 100;
}

  .pc-header,
.pc-headerTop .container {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

   .pc-header,
.pc-headerTop .left {
      display: flex;
    align-items: center;
}

  .pc-header,
.pc-headerTop .left    .logo {
        flex: 0;
      }

  .pc-header,
.pc-headerTop .left    .logo img {
        width: 160px;
        height: 50px;
      }

    .pc-header,
.pc-headerTop .left  .navs {
        display: flex;
        justify-content: space-between;
        align-items: center;
}

   .pc-header,
.pc-headerTop .left  .navs   .item {
          position: relative;
          width: 120px;
          height: 50px;
          text-align: center;}

       .pc-header,
.pc-headerTop .left  .navs   .item    > a {
            font-size: 18px;
            color: #999;
            line-height: 50px;
            display: block;
          }

       .pc-header,
.pc-headerTop .left  .navs   .item    > a.active {
            color: #333;
            font-weight: 600;
          }

        .pc-header,
.pc-headerTop .left  .navs   .item   .menu {
            position: absolute;
            width: 120px;
            top: 50px;
            left: 0;
            background: rgba(255, 255, 255, 1);
            border: 1px solid #eee;
            border-top: 0;
            box-sizing: border-box;
            display: none;
}

         .pc-header,
.pc-headerTop .left  .navs   .item   .menu   > a {
              line-height: 40px;
              border-top: 1px solid #eee;
              box-sizing: border-box;
              color: #888;
              font-size: 14px;
            }

         .pc-header,
.pc-headerTop .left  .navs   .item   .menu   > a:hover {
              background: rgba(219, 60, 58, 1);
              color: #fff;
            }
        

       .pc-header,
.pc-headerTop .left  .navs .item:hover {}
        .pc-header,
.pc-headerTop .left  .navs .item:hover  > a {
            color: #333;
            font-weight: 600;
          }

        .pc-header,
.pc-headerTop .left  .navs .item:hover  .menu {
            display: flex;
            flex-direction: column;
          }

    .pc-header,
.pc-headerTop .right {
      display: flex;
      align-items: center;
      width: 125px;
      height: 50px;
      position: relative;}

      .pc-header,
.pc-headerTop .right .button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #db3c3a;}

        .pc-header,
.pc-headerTop .right .button img {
          width: 22px;
          height: 22px;
          margin-right: 5px;
        }
      

      .pc-header,
.pc-headerTop .right .drop {
        position: absolute;
        top: 50px;
        left: 0;
        width: 125px;
        height: 166px;
        background: rgba(255, 255, 255, 1);
        display: none;
        border: 1px solid #eee;
        box-sizing: border-box;
}

       .pc-header,
.pc-headerTop .right .drop  img {
          width: 120px;
          height: 120px;
        }

       .pc-header,
.pc-headerTop .right .drop  span {
          color: #999;
          font-size: 12px;
          margin-top: 10px;
        }

    .pc-header,
.pc-headerTop .right:hover {}
     .pc-header,
.pc-headerTop .right:hover  .drop {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

.pc-headerTop {
  background: transparent;
}

  .pc-headerTop .container {}
   .pc-headerTop .container .left {}
     .pc-headerTop .container .left  .navs {}
        .pc-headerTop .container .left  .navs .item {}
         .pc-headerTop .container .left  .navs .item > a {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.7);
          }

         .pc-headerTop .container .left  .navs .item > a.active {
            color: #fff;
            font-weight: 600;
          }

         .pc-headerTop .container .left  .navs .item .menu {
            border: 0;
         }
          .pc-headerTop .container .left  .navs .item .menu  a:first-child {
              border: 0;
            }

         .pc-headerTop .container .left  .navs .item:hover {}
         .pc-headerTop .container .left  .navs .item:hover > a {
            color: #fff;
            font-weight: 600;
          }

    .pc-headerTop .container .right {}
      .pc-headerTop .container .right .button {
        color: rgba(255, 255, 255, 0.7);
      }

     .pc-headerTop .container .right .drop {
        border: 0;
      }

    .pc-headerTop .container  .right:hover {}
     .pc-headerTop .container  .right:hover .button {
        color: #fff;
      }

.pc-header {
  box-shadow: 0 3px 10px #eee;
} */

</style>