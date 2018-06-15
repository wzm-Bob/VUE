<template>
 <div class="allWrap">
   <Header></Header> 
   <section>
        <Carousel
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
            <CarouselItem v-for="item in value3">
                <div class="demo-carousel"><img :src="item.src" style="width:100%;height:410px;" alt=""></div>
            </CarouselItem>
      </Carousel>
   </section>
   <footer>
    <h2>知识改变人的命运  扶贫共奔和谐之路</h2>
		<p class="zhichi-company">甘肃万维软件研发公司技术支持<span class="copyright-info">Copyright@    2010-2016</span></p>	
		<p class="english-info">wanwei Poverty Reduction Network  Information Center  All  Righ</p>	
  </footer>   
  
 </div>
</template>
<script>
/* iview中的事件 方法绑定需要加上on-*/
import  Header  from "../components/header"
import {mapState,mapGetters,mapActions,mapMutations} from'vuex'
export default {
  components: {
    Header
  },
  computed: {
  
  }, 
  mounted(){
      
        },
  methods: {
     search:function(params) {
       alert(999)
     }
  },
 
  created: function () {
  
  },
  data () {
    return {
      value3: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      setting: {
          autoplay: true,
          autoplaySpeed: 2000,
          dots: 'inside',
          radiusDot: true,
          trigger: 'click',
          arrow: 'hover'
      }
    }
}
}
</script>

<style lang="scss" scoped>
section{
    width: 100%;
    height: 410px;}
footer{
  display: flex;
  flex-flow: column nowrap;
  height: calc(100% - 60px - 410px);
  align-items: center;
  justify-content: center;
  h2{
    padding: 15px 0;
  }
}
</style>
