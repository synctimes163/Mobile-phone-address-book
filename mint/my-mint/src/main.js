import Vue from 'vue'
import App from './App.vue'


import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';



// import {MessageBox} from "mint-ui"


// Vue.use(MessageBox);

Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(App)
})
