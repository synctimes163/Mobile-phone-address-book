<template>
  <div id="app">
    <!-- fixed 用于头部固定 -->
    <mt-header title="同步通讯录" fixed>
      <!-- <router-link to="/" slot="left"> -->
      <mt-button icon="back" slot="left">返回</mt-button>
      <!-- </router-link> -->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-index-list>
      <mt-index-section
        v-for="item in userData"
        :index="item.index"
        :key="item.id"
      >
        <mt-cell
          v-for="user in item.users"
          :title="user.name"
          :key="user.id"

          @click.native="telAlert(user.tel)"
        ></mt-cell>
      </mt-index-section>

      <!-- 
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Barden"></mt-cell>
      </mt-index-section>

      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section> -->
    </mt-index-list>
  </div>
</template>
 
<script>
var userData = [
  {
    index: "A",
    users: [
      {
        name: "a1",
        tel: "13011112222",
      },
      {
        name: "a2",
        tel: "13011112223",
      },
      {
        name: "a3",
        tel: "13011112224",
      },
    ],
  },
  {
    index: "B",
    users: [
      {
        name: "b1",
        tel: "13011112225",
      },
      {
        name: "b2",
        tel: "13011112226",
      },
      {
        name: "b3",
        tel: "13011112227",
      },
    ],
  },
  {
    index: "C",
    users: [
      {
        name: "c1",
        tel: "13011112228",
      },
      {
        name: "c2",
        tel: "13011112229",
      },
      {
        name: "c3",
        tel: "13011112282",
      },
    ],
  },
  {
    index: "D",
    users: [
      {
        name: "d1",
        tel: "13011112452",
      },
      {
        name: "d2",
        tel: "17511116222",
      },
      {
        name: "d3",
        tel: "13019012222",
      },
    ],
  },
  {
    index: "E",
    users: [
      {
        name: "e1",
        tel: "13011166222",
      },
      {
        name: "e2",
        tel: "13011132222",
      },
      {
        name: "e3",
        tel: "13011172222",
      },
    ],
  },
  {
    index: "F",
    users: [
      {
        name: "f1",
        tel: "13011512222",
      },
      {
        name: "f2",
        tel: "13031112222",
      },
      {
        name: "f3",
        tel: "12011112222",
      },
    ],
  },
];

import {MessageBox} from "mint-ui"

export default {
  name: "app",
  data() {
    return {
      userData: userData,
    };
  },
  methods: {
    telAlert: function(tel) {
      MessageBox({
        title:"呼叫",
        message:tel,
        showCancelButton:true
      }).then(function(){
        alert(1)
      })
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

body {
  height: 2000px;
}
</style>
