<template>
        <div >
            <Tabs value='account'>    
              <TabPane label='账户密码登录' name='account'>
                  <Form ref='account' 
          :model='formLogin'
          :rules='ruleCustom'>
                <FormItem prop='user'>
                  <Input type='text' v-model='formLogin.user' placeholder='admin/user'>
                  <Icon type='ios-person-outline' slot='prepend'></Icon>
                  </Input>
                </FormItem>
                <FormItem prop='password'>
                  <Input type='password' v-model='formLogin.password' placeholder='888888/123456'>
                  <Icon type='ios-locked-outline' slot='prepend'></Icon>
                  </Input>
                </FormItem>
                <FormItem>
              <Row class='add__margin'>
                <Col span='18'>
                <!--注意事件要用@监听 属性要用：绑定-->
                <Checkbox @on-change='onTabChange' v-model='formLogin.single'>自动登录</Checkbox>
                </Col>
                <Col span='6'>
                <span class='forget'>
                  <router-link to='/IndexPage'>忘记密码</router-link>
                </span>

                </Col>
              </Row>
            </FormItem>
            <FormItem>
              <Button type='primary' @click='onSubmit(`account`)' :disabled='formLogin.isDisabled' :class='{disabled: formLogin.isDisabled}' long>{{formLogin.loginState}}</Button>
              <!--  <Button type='primary'  @click='formLoginReset('formLogin')' long>重置</Button> -->
            </FormItem>

          </Form>
              </TabPane>
              <TabPane label='手机号码登录' name='mobile'>
                  <Form ref='mobile' 
          :model='formLogin'
          :rules='ruleCustom'>
                <FormItem prop='phone'>
                  <Input type='text' v-model='formLogin.phone' placeholder='17797592879'>
                  <Icon type='ios-telephone-outline' slot='prepend'></Icon>
                  </Input>
                </FormItem>
                <FormItem>
                  <Row>
                    <Col span='16'>
                    <FormItem prop='captcha'>
                      <Input type='text' v-model='formLogin.captcha' placeholder='1234'>
                      <Icon type='ios-email-outline' slot='prepend'></Icon>
                      </Icon>
                      </Input>
                    </FormItem>
                    </Col>
                    <Col span='6' style='width:29%;' offset='1'>
                    <Button type='ghost' style='width:100%' @click='onGetCaptcha' :disabled='!show'>
                      <span v-show='show'>获取验证码</span>
                      <span v-show='!show' class='count'>{{count}} s</span>
                    </Button>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem>
              <Row class='add__margin'>
                <Col span='18'>
                <Checkbox on-change='onTabChange' v-model='formLogin.single'>自动登录</Checkbox>
                </Col>
                <Col span='6'>
                <span class='forget'>
                  <router-link to='/IndexPage'>忘记密码</router-link>
                </span>
                </Col>
              </Row>
            </FormItem>
            <FormItem>
              <Button type='primary' @click='onSubmit(`mobile`)' :disabled='formLogin.isDisabled' :class='{disabled: formLogin.isDisabled}' long>{{formLogin.loginState}}</Button>
              <!--  <Button type='primary'  @click='formLoginReset('formLogin')' long>重置</Button> -->
            </FormItem>

          </Form>
              </TabPane>
            </Tabs>
            
          <Row class='add__margin'>
            <Col span='18'>
            <span>其他登录方式</span>
            <span>
              <a @click="See('https://github.com/wzm-Bob/VUE.git')">
               <Icon type='social-tux'></Icon>
              </a>
              <!-- 这里跳外站链接不能用router-link  -->
              <!-- <router-link @click="See('https://github.com/wzm-Bob/VUE.git')">
                <Icon type='social-tux'></Icon>
              </router-link> -->
            </span>
             <span>
              <a @click="See('https://github.com/wzm-Bob/VUE.git')">
                <Icon type='social-chrome'></Icon>
              </a>
            </span>
            <span>
              <a @click="See('https://github.com/wzm-Bob/VUE.git')">
                <Icon type='social-python'></Icon>
              </a>
            </span> 
            </Col>
            <Col span='6'>
            <span class='forget'>
              <router-link to='/registerWrap'>注册账户</router-link>
            </span>
            </Col>
          </Row>
           <Modal v-if='formLogin.error'
          :styles="{top: '20px'}">
        <p>{{formLogin.error}}</p>
    </Modal>
        </div>
</template>
<script>
//Alt+Shift+F格式化
export default {
  name:'loginWrap',
  data() {
    const validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
        callback(new Error("用户名只能包含中英文字符，数字和下划线"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (!/^[0-9a-zA-Z]{6,14}$/.test(value)) {
        callback(new Error(" 登录密码只能为6-14位数字或英文字符哦！"));
      } else {
        /*看来必须要有else啊 不然一直转圈刷新*/
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不能为空"));
      } else if (
        !/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(
          value
        )
      ) {
        callback(new Error(" 手机号码格式错啦!"));
      } else {
        callback();
      }
    };
    const validateCaptcha = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("验证码不能为空"));
      } else if (!/^[0-9]*$/.test(value)) {
        callback(new Error("验证码不能是非数字"));
      } else {
        callback();
      }
    };

    return {
      show: true,
      count: "",
      timer: null,
      formLogin: {
        count: "获取验证码",
        user: "",
        single: false,
        password: "",
        phone: "",
        captcha: "",
        loginState: "登录",
        isDisabled: false,
        error: ""
      },
      ruleCustom: {
        user: [
          {
            validator: validateUser,
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: validatePass,
            trigger: "blur"
          }
          /*   { min: 6, message: '请输入最少6位' } */
        ],
        phone: [
          {
            validator: validatePhone,
            trigger: "blur"
          }
        ],
        captcha: [
          {
            validator: validateCaptcha,
            trigger: "blur"
          }
        ]
      }
    };
  },

  methods: {
    See(e){
       window.location.href = e;
    },
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
    onTabChange() {
      if (
        this.formLogin.single == true &&
        localStorage.getItem("user") &&
        localStorage.getItem("password")
      ) {
        this.formLogin.user = localStorage.getItem("user");
        this.formLogin.password = localStorage.getItem("password");
        setTimeout(() => {
          this.$router.push({ name: "IndexPage" });
        }, 6000);
      }
    },
    beforeSubmit(name) {
      this.formLogin.isDisabled = true;
      this.formLogin.loginState = "正在登录...";
    },
    onSubmit(name) {
      debugger;
      this.$refs[name].validate(valid => {
        if (valid) {
          debugger;
          this.validBehind(name);
        } else {
          return false;
        }
      });
    },
    validBehind(name) {
      debugger;
      this.beforeSubmit(name);
      let usermain;
      let usercap;
      if (name == "account") {
        usermain = this.formLogin.user;
        usercap = this.formLogin.password;
      } else {
        usermain = this.formLogin.phone;
        usercap = this.formLogin.captcha;
      }
      //let loginInfo = this.formLogin;

      this.$store
        .dispatch("login", {
          user: usermain,
          password: usercap
        })
        .then(res => {
          debugger;
          const infos = JSON.parse(res.text);
          if (infos.status === "ok") {
            this.onSuccess(infos);
          } else {
            this.onError(infos);
          }
        });
    },
    onSuccess(res) {
      debugger
      if (
        this.formLogin.single == true &&
        this.formLogin.user != "" &&
        this.formLogin.password != ""
      ) {
        localStorage.setItem("user", this.formLogin.user);
        localStorage.setItem("password", this.formLogin.password);
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("password");
      }
      // console.log('complete!')
      this.$router.push({ name: "IndexPage" });
    },
    onError(err) {
      this.$Modal.error({
        content: err.currentAuthority
      });

      this.formLogin.loginState = "登录";
      this.formLogin.isDisabled = false;
    },
    formLoginReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style lang='less'>
@media (min-width: 768px) {
  .ivu-layout-content {
    padding: 112px 0 24px;
  }
}

.ivu-layout-content {
  flex: 1 1;
}

.ivu-col-span-6 {
  text-align: right;
}

.top___3tcoI {
  text-align: center;
}

.main___2jCiI {
  width: 368px;
  margin: 0 auto;
}

.header___3StSZ {
  height: 44px;
  line-height: 44px;
}

.ivu-btn-long {
  /*  margin-bottom: 24px; */
  height: 40px;
  font-size: 16px;
  letter-spacing: 2px;
}

.ivu-checkbox-wrapper {
  font-size: 14px;
}
.ivu-tabs-nav {
  width: 100%;
  margin: 4px 0;
}

.ivu-tabs .ivu-tabs-content-animated {
}

.ivu-radio-wrapper,
.add__margin span {
  font-size: 14px;
  margin-right: 4px;
}

.forget {
  color: #57a3f3;
}

.ivu-btn-ghost {
  height: 40px;
  background: #fff;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  padding: 6px 12px;
}

.ivu-icon {
  font-size: 20px;
}

.ivu-tabs-nav .ivu-tabs-tab {
  font-size: 16px;
}

.ivu-input {
  height: 40px;
  outline: none;
}

.ivu-tabs-nav-scroll {
  text-align: center;
}

.ivu-tabs-ink-bar {
  left: 40px;
}

.ivu-tabs-bar {
  border-bottom: none;
  margin-bottom: 24px;
}

.ivu-input-group-append,
.ivu-input-group-prepend {
  background: #fff;
  border-radius: 3px;
}

.ivu-input-group-append,
.ivu-input-group > .ivu-input:last-child {
  border-left: 0;
}

.ivu-input-group {
  /*   margin-bottom: 24px; */
}

.header___3StSZ a {
  text-decoration: none;
}

.logo___2CWIy {
  height: 44px;
  vertical-align: top;
  margin-right: 16px;
}
.title___2h165 {
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  top: 2px;
}

.desc___i73Yc {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 12px;
  margin-bottom: 40px;
}

.index__links___1TMBe {
  margin-bottom: 8px;
}

.index__copyright___3hvsv {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.index__links___1TMBe a:not(:last-child) {
  margin-right: 40px;
}

.index__links___1TMBe a {
  color: rgba(0, 0, 0, 0.45);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.ivu-modal-confirm-footer {
  margin-top: 0;
}
.ivu-btn-large {
  padding: 2px 8px;
}
.ivu-layout-footer {
  margin: 0 auto;
  text-align: center;
}
.layout{
      background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%
}

.anticon {
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  line-height: 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon-copyright:before {
  content: "\E6DE";
}

.anticon:before {
  display: block;
  font-family: "anticon" !important;
}

.ivu-layout-footer a,
.ivu-layout-footer .index__copyright___3hvsv {
  color: rgba(0, 0, 0, 0.45);
}
</style>
