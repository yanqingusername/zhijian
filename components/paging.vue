<template>
  <div class="root">
    <div @click="goPrior" :class="pageSize === 1 && 'disalbe'">上一页</div>
    <!-- 初始页码 1 -->
    <div @click="changePage(1)" v-show="before">1</div>
    <div v-show="before && pageList[0] - 1 != 1" class="omit">…</div>

    <div
      @click="changePage(item)"
      v-for="(item,index) in pageList"
      :key="item + '' + index"
      :class="pageSize == item && 'active'"
    >{{ item }}</div>

    <div v-show="after  && pageList[pageList.length - 1] + 1 != pageNum" class="omit">…</div>
    <div @click="changePage(pageNum)" v-show="after">{{ pageNum }}</div>
    <div @click="goNext" :class="pageSize === pageNum && 'disalbe'">下一页</div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "page",
    event: "change"
  },
  props: ["pageNum", "page"],

  data() {
    return {
      pageSize: "",
      pageList: [], // 用于遍历跳转的页面列表
      after: false,
      before: false
    };
  },

  mounted() {
    this.pageSize = this.page;
  },
  methods: {
    changePage(page) {
      this.$emit("change", page);
      // this.$emit('change', page);
      this.pageSize = page;
    },
    // 上一个
    goPrior() {
      if (this.pageSize === 1) return;
      this.changePage(this.pageSize - 1);
    },

    // 下一个
    goNext() {
      if (this.pageSize === this.pageNum) return;
      this.changePage(this.pageSize + 1);
    },
    setList(newPage) {
      if (newPage == 1) {
        let arr = [];
        for (let i = 1; i <= this.pageNum; i++) {
          arr.push(i);
          if (arr.length == 5) break;
        }
        this.pageList = arr;
        this.before = false;
        this.after = this.pageNum > 5;
      } else {
        let arr = [];
        let first = this.pageSize <= 2 ? 1 : this.pageSize - 2;
        while (true) {
          if (first >= 1 && first <= this.pageNum) {
            arr.push(first);
          }

          if (first === this.pageNum) {
            if (arr.length < 5) {
              while (true) {
                if (arr.length === 5 || arr[0] === 1) break;
                arr.unshift(this.pageNum - arr.length);
              }
            }
            break;
          }

          if (arr.length === 5) break;

          first++;
        }

        this.after = arr[arr.length - 1] < this.pageNum;
        this.before = arr[0] > 1;
        this.pageList = arr;
      }
    }
  },

  watch: {
    //   监听页码修改, 重构页码条
    pageSize(newPage) {
      this.setList(newPage);
    },
    pageNum() {
      this.setList(this.pageSize);
    }
  }
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    font-size: 16px;
    color: #000;
    // line-height: 30px;
    min-width: 30px;
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid rgba(220, 220, 220, 1);
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    text-align: center;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    &.active {
      background-color: #FF4925;
      color: #fff;
    }
    &:hover {
      border-color: #FF4925;
    }
    &.omit {
      background: none;
      &:hover {
        border: none;
      }
    }
    &.disalbe {
      color: #8b8585;
      cursor: not-allowed;
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;
    }
  }
}
</style>