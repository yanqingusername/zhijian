<template>
  <div class="sidebar">
            <div class="hotline">
                <div class="icon"></div>
                <span>咨询热线</span>
                <div class="over">
                    <div class="content">
                        <img src="~/assets/images/hotline-p.png" />
                        <div class="info">
                            <h5>18501957368</h5>
                            <p>7*12小时贴心客服热线<br />周一至周日9:00-21:00</p>
                        </div>
                    </div>
                    <img src="~/assets/images/icon-arrow-right.png" />
                </div>
            </div>
            <div class="top" @click="handleScrollTo">
                <div class="icon"></div>
                <span>回顶部</span>
            </div>
        </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
    
    };
  },
  props: {
    
  },
  methods: {
    handleScrollTo () {
      let scrollToptimer = setInterval(function () {
        let top = document.body.scrollTop || document.documentElement.scrollTop;
        let speed = top / 30;
        document.documentElement.scrollTop -= speed;
        if (top == 0) {
          clearInterval(scrollToptimer);
        }
      }, 5);
    }
  },
  computed: {
    
  }
};
</script>

<style  lang="scss">
.sidebar {
  position: fixed;
  top: 480px;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 3;

  .hotline,
  .top {
    width: 88px;
    height: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 1);
    position: relative;
    cursor: pointer;

    .icon {
      width: 28px;
      height: 28px;
      background-size: 100% 100%;
    }

    span {
      color: #777;
      font-size: 14px;
      margin-top: 6px;
    }
  }

  .hotline {
    .icon {
      background-image: url(~/assets/images/icon-hotline.png);
    }

    .over {
      position: absolute;
      top: 0;
      right: 100px;
      align-items: center;
      display: none;

      .content {
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgba(219, 60, 58, 1);

        img {
          width: 42px;
          height: 65px;
          margin-right: 14px;
        }

        .info {
          display: flex;
          flex-direction: column;
          color: #fff;
          width: 125px;

          h5 {
            color: #fff;
            font-size: 18px;
            white-space: nowrap;
          }

          p {
            font-size: 10px;
            margin-top: 10px;
            line-height: 150%;
          }
        }
      }
    }
  }

  .hotline:hover {
    .icon {
      background-image: url(~/assets/images/icon-hotline-active.png);
    }

    span {
      color: #db3c3a;
    }

    .over {
      display: flex;
      flex-direction: row;
    }
  }

  .top {
    margin-top: 20px;

    .icon {
      background-image: url(~/assets/images/icon-top.png);
    }
  }

  .top:hover {
    .icon {
      background-image: url(~/assets/images/icon-top-active.png);
    }

    span {
      color: #db3c3a;
    }
  }
}


</style>