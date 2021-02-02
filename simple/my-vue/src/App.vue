<template>
  <div>
    <my-header custom-title="通讯录" custom-fixed>
      <button @touchstart="backBtn" slot="left">返回</button>
      <button @touchstart="homeBtn" slot="right">主页</button>
    </my-header>

    <my-list :user-data="userData"></my-list>
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

export default {
  name: "app",
  data() {
    return {
      userData: userData,
    };
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



// mint-ui
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
        height:2000px ;
    }
</style>
