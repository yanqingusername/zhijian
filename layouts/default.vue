<template>
  <div id="root">
    <!-- <vHeader v-show="!hideHeaderFoot" /> -->
    <!-- 顶部header的站位符 (header fixed定位) -->
    <!-- <div v-show="!isMobile && !hideHeaderFoot" class="header-placeholder"></div> -->
    <div v-show="isMobile && !hideHeaderFoot" class="header-placeholder-m"></div>
    <nuxt />
    <vFooter v-show="!hideHeaderFoot" :class="footerFix && 'footer-fixed'" />
    <div v-show="footerFix && !hideHeaderFoot" class="footer-placeholder-m"></div>
  </div>
</template>
<script>
import vHeader from "~/components/vHeader";
import vFooter from "~/components/vFooter";
export default {
  head() {
    return {
      meta: [
      ],
      script: [
        {
          src: "https://v1.cnzz.com/z_stat.php?id=1278659783&web_id=1278659783"
        },
        {
          src:
            "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba",
          id: "sozz"
        }
      ]
    };
  },

  components: {
    vHeader,
    vFooter
  },
  data() {
    return {
      isMobile: false
    };
  },
  mounted() {
    if (process.client) {
      this.isMobile = document.documentElement.clientWidth <= 980;
      
      this.$store.commit("changeIsMobile", this.isMobile);
      if (this.isMobile) {
        document.documentElement.style.fontSize =
          document.documentElement.clientWidth / 7.5 + "px";
      } else {
        document.documentElement.style.fontSize = "16px";
      }

      /**
       * 注意!  我的设置为当页面为移动端布局状态下, html的font-size为750屏幕下的100px
       * 即如果设计图上为100px, 即在rem中为 1rem !!!! 请注意. 并且在特定区域请设置好自己的默认字体大小
       */

      window.onresize = () => {
        /**
         * 如果页面宽度大于980 ,则为pc布局模式. 默认字体大小16px.
         * 反之为移动端布局, 开启rem布局模式
         */
        this.isMobile = document.documentElement.clientWidth <= 980;
        this.$store.commit("changeIsMobile", this.isMobile);
        if (this.isMobile) {
          document.documentElement.style.fontSize =
            document.documentElement.clientWidth / 7.5 + "px";
        } else {
          document.documentElement.style.fontSize = "16px";
        }
      };
    }
  },
  computed: {
    // 什么情况下需要固定footer
    footerFix() {
      // 在移动端的新闻列表(不是新闻详情)中固定底部,
      // return (
      //   this.$route.path === "/news" && !this.$route.query.id && this.isMobile
      // );
    },

    // 隐藏头部与底部
    hideHeaderFoot() {
      const path = this.$route.path;
      return (
        path == "/seek_agent" ||
        path == "/set_up_shop" ||
        path == "/supply_commodity" ||
        path == "/funong_progress" ||
        path == "/progress_detail" || 
        path == "/recruit" || 
        path == "/seek_agent1" || 
        path == "/exstep" || 
        path == "/seek" ||
        path == "/realEstate"
      );
    }
  }
};
</script>

<style>
/* #cnzz_stat_icon_1278659783 {
  display: none;
} */
a {
  display: none;
}

.header-placeholder {
  height: 80px;
}
.header-placeholder-m {
  height: 1.2rem;
}
.footer-placeholder-m {
  height: 3rem !important;
}
body {
  font-size: 16px;
  overflow-x: hidden;
}
#root a {
  display: inline;
}
.footer-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
