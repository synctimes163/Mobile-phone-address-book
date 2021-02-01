

<template>
  <div id="list">
    <ul class="list_user" ref="listUser" @touchmove="bMove = true">
      <li v-for="item in userData">
        <p>{{ item.index }}</p>
        <ul>
          <li @touchstart="showTel(user.tel)" v-for="user in item.users">
            {{ user.name }}
          </li>
        </ul>
      </li>
    </ul>

    <ul class="list_index" ref="listIndex">
      <li @touchstart="setScroll" v-for="item in userIndex">{{ item }}</li>
    </ul>
  </div>
</template>

<script>

import myAlert from './Alert.js';

export default {
  name: "my-list",
  data() {
    return {
        // userData: [],
    };
  },
  props: {
    "user-data": {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  computed: {
    userIndex: function () {
      return this.filterIndex(this.userData);
    },
  },
  methods: {
    filterIndex: function (data) {
      var result = [];

      for (var i = 0; i < data.length; i++) {
        if (data[i].index) {
          result.push(data[i].index);
        }
      }

      return result;
    },
    setListIndexPos: function () {
      let iH = this.$refs.listIndex.offsetHeight;
      this.$refs.listIndex.style.marginTop = -iH / 2 + "px";
    },
    setScroll: function (ev) {
      // console.log( ev.target.innerHTML)
      var aP = this.$refs.listUser.getElementsByTagName("p");
      //    console.log( aP)
      for (var i = 0; i < aP.length; i++) {
        if (aP[i].innerHTML == ev.target.innerHTML) {
          //    console.log(document.documentElement.scrollTop, aP[i].scrollTop, aP[i])
          document.documentElement.scrollTop = aP[i].offsetTop; // 这里不是  aP[i].scrollTop ，而是元素的  aP[i].offsetTop

          //    document.body.scrollTop = aP[i].offsetTop;
        }
      }
    },
    showTel: function (tel) {
        if (!this.bMove) {
          console.log(tel);
          // busVM.$emit("changeEvent", tel)
          myAlert({
            title: "呼叫",
            body: tel,
            confirm: function () {
              alert("confirm");
            },
            cancel: function () {
              // alert("cancel")
              document.body.removeChild(document.getElementById("alert"));
            },
          });
        } else {
          this.bMove = false;
        }
    },
  },
  mounted: function () {
    this.setListIndexPos();
  },
};
</script>

<style>
#list {
  position: relative;
  top: 40px;
  overflow: hidden;
}

#list .list_user p {
  background-color: #ccc;
  padding-left: 10px;
}
#list .list_user ul li {
  height: 50px;
  line-height: 50px;
  border-bottom: solid thin #ccc;
  padding-left: 10px;
}

#list .list_index {
  position: fixed;
  right: 10px;
  top: 50%;
  font-size: 20px;
}
#list .list_index li {
  margin: 5px 0;
}
</style>
