

<template>
  <div id="header" :style="{ position: customFixed ? 'fixed' : 'absolute' }">
    <slot name="left">返回</slot>
    {{ customTitle }}
    <slot name="right">主页</slot>
  </div>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
    //   userData: userData,
    };
  },
  props: {
    // 转驼峰的方式 custom-title => customTitle
    customTitle: {
      type: String,
      default: "标题",
    },
    customFixed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    backBtn: function () {
      alert("backBtn");
    },
    homeBtn: function () {
      alert("homeBtn");
    },
  },
};
</script>

<style>
#header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #666;

  color: #fff;
  text-align: center;
  z-index: 100;
}

#header button {
  height: 100%;
  padding: 0 5px;
}

#header button:nth-of-type(1) {
  float: left;
}

#header button:nth-of-type(2) {
  float: right;
}
</style>
