<template>
 <div class="testChildren">
     <p :sds="sds">{{sds}}</p>
     <router-link :to="{path: '/'}">
     <h3>跳转</h3>
     </router-link>
 </div>
</template>
<script>
export default {
   props: {
   
     sds: {
      type: String,
      default: '缺省'
    }
  }, 
 
  data () {
    return {
      
    }
  },
  computed: {

  },
  methods: {
   
  },
  mounted () {
    //this.runInv();
  }
}
</script>

<style lang="less" scoped>
.testChildren{
    background: #f56;
    p{
        font-size:18px;
        color: #fad507;
        font-weight: 700;
        background-image: -webkit-linear-gradient(90deg, #FFE2B7, #fff);
        -webkit-background-clip: text;// 裁剪只留文字
        -webkit-text-fill-color: transparent; //填充裁剪的文字
    }
}
</style>
