<template>
  <div class="loadEffect">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.loadEffect {
  display: inline-block;
  transform: scale(0.8);
  width: 25px;
  height: 25px;
  position: relative;
  margin: 5px;
}
.loadEffect span {
  display: inline-block;
  width: 8px;
  height: 2.5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: #ccc;
  position: absolute;
  -webkit-animation: load 1.04s ease infinite;
}
@-webkit-keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
.loadEffect span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -1.3px;
  -webkit-animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: 2.5px;
  top: 5px;
  -webkit-transform: rotate(45deg);
  -webkit-animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 2.5px;
  margin-left: -3.5px;
  -webkit-transform: rotate(90deg);
  -webkit-animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: 5px;
  right: 2.5px;
  -webkit-transform: rotate(135deg);
  -webkit-animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -1.2px;
  -webkit-transform: rotate(180deg);
  -webkit-animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: 2.5px;
  bottom: 5px;
  -webkit-transform: rotate(225deg);
  -webkit-animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 2.5px;
  left: 50%;
  margin-left: -3.5px;
  -webkit-transform: rotate(270deg);
  -webkit-animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: 5px;
  left: 2.5px;
  -webkit-transform: rotate(315deg);
  -webkit-animation-delay: 1.04s;
}
</style>