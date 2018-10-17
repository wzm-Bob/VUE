<template>
    <div>
        <h3>注册</h3>
        <!--:label-width='100' 左侧margin-->
    <Form ref='formRegister' :model='formRegister' :rules='ruleCustom' >
        <FormItem prop='email'>
            <Input v-model='formRegister.email' placeholder='邮箱'></Input>
        </FormItem>
        <FormItem prop='password'>
            <Input type="password" v-model='formRegister.password' placeholder='密码'></Input>
        </FormItem>
        <FormItem prop='repeatpassword'>
            <Input type="password" v-model='formRegister.repeatpassword' placeholder='确认密码'></Input>
        </FormItem>
       
        <FormItem>
                  <Row>
                    <Col span='8'>
                     <FormItem >
            <Select v-model='formRegister.select' value='86'>
                <Option value='86'>+86</Option>
                <Option value='87'>+87</Option> 
            </Select>
        </FormItem>
                    </Col>
                    <Col span='16'  >
                   <FormItem prop='iphone'>
                      <Input type='text' v-model='formRegister.iphone' placeholder='11位手机号码'>
                      
                      </Icon>
                      </Input>
                    </FormItem>
                    </Col>
                  </Row>
                </FormItem>
        <FormItem>
                  <Row>
                    <Col span='16'>
                    <FormItem prop='captcha'>
                      <Input type='text' v-model='formRegister.captcha' placeholder='验证码'>
                      </Icon>
                      </Input>
                    </FormItem>
                    </Col>
                    <Col span='6' offset='1'>
                    <Button type='ghost' @click='onGetCaptcha' :disabled='!show'>
                      <span v-show='show'>获取验证码</span>
                      <span v-show='!show' class='count'>{{count}} s</span>
                    </Button>
                    </Col>
                  </Row>
                </FormItem>
                <Row>
                <Col span='10'>
                <Button type='primary' 
                @click='onSubmit(`formRegister`)'
                :disabled='formRegister.isDisabled'
                :class='{disabled:formRegister.isDisabled}'
                long>{{formRegister.registerState}}</Button>
                </Col>
                <Col span='14'>
                <span class='inside'>
                  <router-link to='/loginwrap'>使用已有账号登录</router-link>
                </span>
                </Col>
              </Row>                 
    </Form>
    </div>
</template>
<script>
export default {
  data() {
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('注册邮箱不能为空'));
      } else if (!/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(value)) {
        callback(new Error('注册邮箱格式不对'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('注册密码不能为空'));
      } else if (!/^[0-9a-zA-Z]{6,14}$/.test(value)) {
        callback(new Error(' 注册密码只能为6-14位数字或英文字符哦！'));
      } else {
        /*必须要有else啊 不然一直转圈刷新 一直寻找回调函数*/
        callback();
      }
    };
    const validateRepeatPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('注册确认密码不能为空'));
      } else if (value!== this.formRegister.password) {
        callback(new Error('密码不一致'));
      } else {
        /*必须要有else啊 不然一直转圈刷新 一直寻找回调函数*/
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'));
      } else if (
        !/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(
          value
        )
      ) {
        callback(new Error(' 手机号码格式错啦!'));
      } else {
        callback();
      }
    };
    const validateCaptcha = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'));
      } else if (!/^[0-9]*$/.test(value)) {
        callback(new Error('验证码不能是非数字'));
      } else {
        callback();
      }
    };
    return {
      count: '',
      show: true,
      formRegister: {
        registerState: '注册',
        isDisabled: false,
        email: '',
        password: '',
        repeatpassword: '',
        select: '86',
        iphone: '',
        captcha: ''
      },
      ruleCustom: {
        email: [
          {
            validator: validateEmail,
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validatePass,
            trigger: 'blur'
          }
          /*   { min: 6, message: '请输入最少6位' } */
        ],
        repeatpassword: [
          {
            validator: validateRepeatPassword,
            trigger: 'blur'
          }
        ],
        iphone: [
          {
            validator: validatePhone,
            trigger: 'blur'
          }
        ],
        captcha: [
          {
            validator: validateCaptcha,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onGetCaptcha() {
      const TIME_COUNT = 59;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    onSubmit(name) {
      this.$refs[name].validate( valid =>{
        if(valid){
          this.comOperation();
        }else{
          return false
        }
      })
    },
    comOperation() {
      this.beforeSubmit()
      this.$store.dispatch('register',this.formRegister).then(
        res=>{
          debugger
          const zcinfo = JSON.parse(res.text);
          if (zcinfo.status === 'ok') {
            this.onSuccess(zcinfo)
          }else{
            this.onError(zcinfo)
          }
        }
      )
    },
    beforeSubmit() {
      this.formRegister.isDisabled = true
      this.formRegister.registerState = '正在注册...'
    },
    onSuccess(res) {
      debugger
       this.$router.push('/registerSuccess');
    },
    onError(err) {
       this.$Modal.error({
        content: err.currentAuthority
      });

      this.formRegister.isDisabled = false
      this.formRegister.registerState = '注册'
    }
  }
};
</script>

<style scoped>
.ivu-col-span-6 {
  width: 29%;
}
.ivu-btn {
  width: 100%;
}
h3 {
  font-size: 16px;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
.inside {
  color: #2d8cf0;
  font-size: 14px;
}
</style>


