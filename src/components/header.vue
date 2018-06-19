<template>
  <header>
     <div class="header-logo">
        <router-link :to="{path: '/'}">
        <Icon type="social-chrome"></Icon>
      </router-link> 
     </div>
     <Menu mode="horizontal" class="header-menu" :theme="theme1" active-name="1">
        <template v-for="(item, index) in list">
            <MenuItem :name="index+1" v-if="item.hasSub == false">
                <Icon :type="item.type"></Icon>
                {{item.text}}
            </MenuItem>

            <Submenu :name="index+1" v-else-if="item.hasSub == true">
                <template slot="title">
                    <Icon :type="item.type"></Icon>
                    {{item.text}}
                </template>
                <MenuGroup title="使用" v-for="sub in item.sublist">
                    <MenuItem name="3-1">{{sub.text}}</MenuItem>
                </MenuGroup>
            </Submenu>
        </template>
    </Menu>
    <div class="header-search">
      <Input v-model="value4"  @on-click="search()"  icon="ios-search" placeholder="Enter something..." style="width: 200px"></Input>
    </div> 
    <div class="header-login">
       <ul class="nav-list">
           <li> {{ username }}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username=== ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username=== ''" @click="regClick">注册</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
    </div>  
      <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>碍因素具运力的客观、深策依据。 </p>
    </my-dialog>
    <!-- 方法名 属性名要和子组件里面对应上 -->
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
   </header>
</template>

<script>
import  Dialog  from "./base/dialog"
import LogForm from './logForm'
export default {
 components: {
    MyDialog: Dialog,
    LogForm
  },
methods: {
    aboutClick () {
      this.isShowAboutDialog = true
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      //this.isShowRegDialog = true
      this.$router.push({path:'/register'})
    },
    closeDialog (attr) {
      this[attr] = false
    },
    onSuccessLog (data) {
      console.log(data)
      this.closeDialog ('isShowLogDialog')
      this.username = data.username
    },
    quit (){
        this.username=''
    }
    },
 data () {
    return {
      value4: '',
      theme1: 'dark',
      isShowAboutDialog: false,
      isShowLogDialog: false,
      username: '',
      list:[
                    {text:'内容管理', hasSub:false,type:'ios-paper'},
                    {text:'用户管理', hasSub:false,type:'ios-people'},
                    {
                        text:'统计分析',
                        hasSub:true,
                        type:'stats-bars',
                        sublist:[
                            {text:"数据分析"},
                            {text:"测试分析"},
                            {text:"单元分析"}
                        ]
                    },
                    {text:'综合设置', hasSub:false,type:'settings'}
                ]
    }
}
}
</script>

<style lang="scss" >
header>div{ display: flex;align-items: center;}
 header{
  display: flex;
  flex-direction: row;
  background: #495060;
  align-items: center;
  .header-logo{ 
    flex: 0 0 20%; 
    padding-left: 25px;
     .ivu-icon{
       font-size: 54px;
       color: #f66;
       cursor: pointer;
     }
    }
   
.header-menu{
    flex: 0 0 40%;
    padding-left: 15px;}
.header-search{flex: 0 0 20%;}
.header-login{flex: 0 0 20%;}
.nav-list li{
    float: left;
    font-size: 18px;
    color: #fafafa;
    margin-right: 10px;
    cursor: pointer;
}
  }
</style>

