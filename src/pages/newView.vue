<template>
    <div class="wrappers">
        <Button type="info">Info</Button>
        <Table stripe :columns="columns1" :data="data1"></Table>
        <testcompen :sds="contents"></testcompen>        
        <div class="extends">测试继承
            <div class="pos">我是定位元素</div>
        </div>
    </div>
</template>
<script>
import { Button, Table } from 'iview'
import testcompen from '../components/testcompen';
export default {
  components: {
  Button,
  Table,
  testcompen
  },

  computed: {

  }, 
  mounted(){
            //初始化调用
        //  this.testAction();
        },
  methods: {

  },
 
  created: function () {
   
  },
 data () {
            return {
                contents:'按数据江湖大道时空',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
}
</script>

<style lang="scss" scoped>
@import "../style/mixin.scss";
// $var : left;申明变量
// 字符串引用变量   .mr-#{$right} {margin-right : #{$right}px;}
// 嵌套替换空格选择符
// &在嵌套中表示父选择器的引用，往往在一些伪类样式用到 &:hover
// 属性嵌套  border : 1px solid #ccc { left : 0px; right : 0px;  }
//混合器 @mixin sc{} ，可以帮我们规避大段样式的重用 在样式中引入@include sc(0.6rem, #fff);
// 混合器支持我们传入自定义参数和设置默认参数
// @extend .class1; 继承
// 在样式中可以判断  @if 1 > 0 { background-color :  #000;} @else { background-color :  #fff;}
// 用each遍历  @each $member in a, b, c { .#{$member} {background-image: url("/image/#{$member}.jpg");}
// for循环和while循环 @for $i from 1 to 3 {}
// @function自定义函数 @return返回
$wh : 80%;
$blue: #3190e8;  
$bc: #e4e4e4;
$fc:#fff;
.wrappers{
    width: $wh;
    .extends{
        @include widthAndHeight(100%,200px);
        @include sizeColor(30px,#f66);
        background: $bc;
        position: relative;
        .pos{
            background:$blue;
            @include widthAndHeight(140px,80px);
            @include sizeColor(22px,#000);
            @include leftRightCenter;
        }
    }
}
</style>
