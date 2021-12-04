<template>
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
</template>

<script>
export default {
  name: "shopHeader",
  data() {
    return {
     
     
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
    paramId:{
      type: String,
      default() {
        return '11';
      }
    },
    shopColumnList:{
      type: Array,
      default() {
        return [];
      }
    },
  },
  methods: {
    handleNewsInfo(id) {
      if(this.paramId == id){

      }else{
        this.$router.push("/we?id=" + id);
        this.properties.paramId = id;
      }
      
    },
    pushUrl(path = "/") {
      if (path != this.$route.path && path != "/news") {
        path += "?timestamp=" + +new Date();
        this.$router.push(path);
      } else if (path == "/news") {
        path += "?timestamp=" + +new Date();
        this.$router.replace(path);
      }
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

<style  lang="scss">


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


</style>