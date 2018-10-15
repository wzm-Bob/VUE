import Vue from 'vue'
export default new Vue();
/* 非父子组件之间的传值 所谓eventproxy就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件 */
/* 
组件1:
  import eventHub from '../js/eventHub.js';
eventHub.$emit(‘changeThing’, 1);
组件2:
  import eventHub from '../js/eventHub.js';
eventHub.$on(‘changeThing’, function (val) {
  console.log(val); //1
});
路由跳转
 1.< router - link to = ’/hello’></router - link >
  2. this.$router.push(‘/path’);
路由传参
1.this.$router.push({
  path: ’ /path’,
  query: {
    form: form
  }
});
接收参数:
  this.$route.query.form
2. this.$router.push({
  name: hello,
  params: {
    page: '1',
    code: '8989'
  }
})
接收参数:
  this.$route.params.page
总结：
1. query要用path来引入， params要用name来引入， 接收参数都是类似的， 是$route而不是$router
2. query更加类似于我们ajax中get传参， params则类似于post, 说的再简单一点， 前者在浏览器地址栏中显示参数， 后者不显示。
*/