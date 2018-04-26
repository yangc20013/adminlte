import Vue from 'vue'
import store from "./store";
import AdminLTE from './components/AdminLTE'
import User from './components/User'

new Vue({
  el: '#app',
  store,
  template: `
  <AdminLTE>
    <User @btnClick="btnClick" btnText="点我向父组件传递信息"></User>
  </AdminLTE>`,
  components: {
    AdminLTE, User
  },
  methods: {
    btnClick(msg){
      alert(msg);
    }
  }
})