<template>
  <div class="layout">
    <Layout>
      <Content>
        <div class="top___3tcoI">
          <div class="header___3StSZ">
            <a href="#/">
              <img alt="logo" class="logo___2CWIy" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==">
              <span class="title___2h165">Ant Design</span>
            </a>
          </div>
          <div class="desc___i73Yc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
        </div>
        <div class="main___2jCiI">
          <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
            <p v-if="formCustom.error" class="tip error">{{formCustom.error}}</p>
            <Tabs value="name1">
              <TabPane label="账户密码登录" name="name1">
                <FormItem prop="user">
                  <Input type="text" v-model="formCustom.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                  </Input>
                </FormItem>
                <FormItem prop="password">
                  <Input type="password" v-model="formCustom.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
                  </Input>
                </FormItem>
              </TabPane>

              <TabPane label="手机号码登录" name="name2">
                <FormItem prop="phone">
                  <Input type="text" v-model="formCustom.phone" placeholder="phone">
                  <Icon type="ios-telephone-outline" slot="prepend"></Icon>
                  </Input>
                </FormItem>
                <FormItem>
                  <Row>
                    <Col span="16">
                    <FormItem prop="captcha">
                      <Input type="text" v-model="formCustom.captcha" placeholder="captcha">
                      <Icon type="ios-email-outline" slot="prepend"></Icon>
                      </Icon>
                      </Input>
                    </FormItem>
                    </Col>
                    <Col span="6" offset="1">
                    <Button type="ghost">获取验证码</Button>
                    </Col>
                  </Row>
                </FormItem>
              </TabPane>
            </Tabs>
            <FormItem>
              <Row class="add__margin">
                <Col span="18">
                <Radio v-model="formCustom.single">自动登录</Radio>
                </Col>
                <Col span="6">
                <span class="forget">
                  <router-link to="/IndexPage">忘记密码</router-link>
                </span>

                </Col>
              </Row>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="onSubmit('formCustom')" :disabled="formCustom.isDisabled" :class="{disabled: formCustom.isDisabled}" long>{{formCustom.loginState}}</Button>
              <!--  <Button type="primary"  @click="formLoginReset('formLogin')" long>重置</Button> -->
            </FormItem>

          </Form>
          <Row class="add__margin">
            <Col span="18">
            <span>其他登录方式</span>
            <span>
              <router-link to="/IndexPage">
                <Icon type="social-tux"></Icon>
              </router-link>
            </span>
            <span>
              <router-link to="/IndexPage">
                <Icon type="social-chrome"></Icon>
              </router-link>
            </span>
            <span>
              <router-link to="/IndexPage">
                <Icon type="social-python"></Icon>
              </router-link>
            </span>
            </Col>
            <Col span="6">
            <span class="forget">
              <router-link to="/IndexPage">注册账户</router-link>
            </span>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer>
        <div class="index__links___1TMBe">
          <a target="_self" href="">帮助</a>
          <a target="_self" href="">隐私</a>
          <a target="_self" href="">条款</a>
        </div>
        <div class="index__copyright___3hvsv">Copyright
          <i class="anticon anticon-copyright"></i> 2018 蚂蚁金服体验技术部出品</div>
      </Footer>
    </Layout>
  </div>
</template>
<script>
//Alt+Shift+F格式化
export default {
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
            formCustom: {
                user: "",
                single: true,
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
                    /*   { min: 6, message: "请输入最少6位" } */
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

        beforeSubmit: function() {
            this.formCustom.isDisabled = true;
            this.formCustom.loginState = "正在登录...";
        },
        onSubmit: function() {
          debugger
            // Disabled submit button
            this.beforeSubmit();
          
            let loginInfo = this.formCustom;
            if (this.formCustom.single == true) {
                localStorage.setItem(
                    "username",
                    JSON.stringify(this.formCustom.user)
                );
                localStorage.setItem(
                    "password",
                    JSON.stringify(this.formCustom.password)
                );
            } else {
                localStorage.removeItem("user");
                localStorage.removeItem("password");
            }
          this.$store.dispatch('LoginByUsername', loginInfo)
                .then(
                    res => {
                        // Success handle
                        this.onSuccess(res);
                    },
                    err => {
                        // Error handle
                        this.onError(err);
                    }
                );
        },
        onSuccess: function(res) {
            // console.log('complete!')
            this.$router.push({ name: "StatusView" });
        },
        onError: function(err) {
            // console.log(err)
            this.formCustom.error = err.body.error;
            this.formCustom.loginState = "登录";
            this.formCustom.isDisabled = false;
        },
        formLoginReset(name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>
<style lang="less">
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

.ivu-tabs-nav {
    width: 100%;
    margin: 4px 0;
}

.ivu-tabs .ivu-tabs-content-animated {
    height: 125px;
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

.add__margin {
    /* margin-bottom: 24px; */
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

.ivu-layout-footer {
    margin: 0 auto;
    text-align: center;
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
