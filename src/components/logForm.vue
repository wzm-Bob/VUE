<template>
  <form  class="login-form" method="get" @submit.prevent="onSubmit()">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <Input  type="text" v-model="usernameModel" placeholder="请输入用户名" clearable style="width: 280px"></Input>
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <Input type="password" v-model="passwordModel" placeholder="请输入密码" clearable style="width: 280px"></Input>
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
         <button
          class="submit"
          type="submit"
          :disabled="isDisabled"
          style="width:280px"
          :class="{disabled: isDisabled}"
          >
          {{loginState}}
        </button>
        </div>       
      <p>{{ errorText }}</p>
    </div>
  </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      loginState: '登录',
      usernameModel: '',
      passwordModel: '',
      errorText: '',
      isDisabled: false
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '不包含@'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码不是1-6位'
      }
      else {
        status = true
        errorText = ''
      }
      // 初始化加载的时候加入旗子 将校验取消
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    beforeSubmit: function () {
      debugger
      
      // console.log('Submiting...')
      this.isDisabled = true
      this.loginState = '正在登录...'
      
    },
    onSubmit: function () {
      // Disabled submit button
       if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过'
        return 
      }else{
      this.beforeSubmit()
      // Login...
        this.errorText = ''
        this.$http.get('api/login')
        .then((res) => {
          this.$emit('has-log', res.data)
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form{
    display: flex;
    justify-content: center;
}
.g-form-line{margin-bottom: 0px;

}
.g-form-btn{padding-top: 15px;}
.g-form-line span.g-form-label{display: inline-block;padding: 5px 0;}
.g-form-error{height: 18px;display: inline-block;line-height: 18px;color:#f00;width: 100%;}
.submit{background: #4bb4ff;color: #fff;font-size: 20px;}
</style>
