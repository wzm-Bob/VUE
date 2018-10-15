<template>
    <div class="ant-layout-header" style="padding: 0px; width: 100%;">
        <div class="antd-pro-components-global-header-index-header">
            <i class="anticon anticon-menu-fold antd-pro-components-global-header-index-trigger">
                <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 1024 1024" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1c-4.5 3.5-4.5 10.3 0 13.8z"></path>
                </svg>
            </i>
            <div class="antd-pro-components-global-header-index-right">
                <span class="antd-pro-components-global-header-index-action antd-pro-components-global-header-index-search antd-pro-components-header-search-index-headerSearch">
                    <i class="anticon anticon-search">
                        <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 1024 1024" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5L114.3 856.1c-3.1 3.1-3.1 8.2 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2z"></path>
                        </svg>
                    </i>
                    <div class="antd-pro-components-header-search-index-input ant-select-show-search ant-select-auto-complete ant-select ant-select-combobox ant-select-enabled">
                        <div class="ant-select-selection
            ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                            <div class="ant-select-selection__rendered">
                                <ul>
                                    <li class="ant-select-search ant-select-search--inline">
                                        <div class="ant-select-search__field__wrap"><input aria-label="站内搜索" placeholder="站内搜索" type="text" class="ant-input ant-select-search__field" value="">
                                            <span class="ant-select-search__field__mirror">&nbsp;</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <span class="ant-select-arrow" unselectable="on" style="user-select: none;">
                                <i class="anticon anticon-down ant-select-arrow-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 1024 1024" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                    </svg>
                                </i>
                            </span>
                        </div>
                    </div>
                </span>
                <a target="_blank" href="https://pro.ant.design/docs/getting-started" rel="noopener noreferrer" class="antd-pro-components-global-header-index-action" title="使用文档">
                    <i class="anticon anticon-question-circle-o">
                        <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 1024 1024" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7c0-19.7 12.4-37.7 30.9-44.8 59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path>
                        </svg>
                    </i>
                </a>
                <span @click="hello" :msg="msg" class="antd-pro-components-global-header-index-action antd-pro-components-notice-icon-index-noticeButton">
             
                    <span class="ant-badge">
                        <i class="anticon anticon-bell antd-pro-components-notice-icon-index-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 1024 1024" data-icon="bell" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path>
                            </svg>
                        </i>
                        <sup data-show="true" class="ant-scroll-number ant-badge-count ant-badge-multiple-words" title="12" style="box-shadow: none;overflow:hidden;">
                            <span class="ant-scroll-number-only" style="transition: none 0s ease 0s; transform: translateY(-1100%);">
                                <p class="">0</p>
                                <p class="">1</p>
                                <p class="">2</p>
                                <p class="">3</p>
                                <p class="">4</p>
                                <p class="">5</p>
                                <p class="">6</p>
                                <p class="">7</p>
                                <p class="">8</p>
                                <p class="">9</p>
                                <p class="">0</p>
                                <p class="current">1</p>
                                <p class="">2</p>
                                <p class="">3</p>
                                <p class="">4</p>
                                <p class="">5</p>
                                <p class="">6</p>
                                <p class="">7</p>
                                <p class="">8</p>
                                <p class="">9</p>
                                <p class="">0</p>
                                <p class="">1</p>
                                <p class="">2</p>
                                <p class="">3</p>
                                <p class="">4</p>
                                <p class="">5</p>
                                <p class="">6</p>
                                <p class="">7</p>
                                <p class="">8</p>
                                <p class="">9</p>
                            </span>
                            <span class="ant-scroll-number-only" style="transition: none 0s ease 0s; transform: translateY(-1200%);">
                                <p class="">0</p>
                                <p class="">1</p>
                                <p class="">2</p>
                                <p class="">3</p>
                                <p class="">4</p>
                                <p class="">5</p>
                                <p class="">6</p>
                                <p class="">7</p>
                                <p class="">8</p>
                                <p class="">9</p>
                                <p class="">0</p>
                                <p class="">1</p>
                                <p class="current">2</p>
                                <p class="">3</p>
                                <p class="">4</p>
                                <p class="">5</p>
                                <p class="">6</p>
                                <p class="">7</p>
                                <p class="">8</p>
                                <p class="">9</p>
                                <p class="">0</p>
                                <p class="">1</p>
                                <p class="">2</p>
                                <p class="">3</p>
                                <p class="">4</p>
                                <p class="">5</p>
                                <p class="">6</p>
                                <p class="">7</p>
                                <p class="">8</p>
                                <p class="">9</p>
                            </span>
                        </sup>
                    </span>
                </span>

                <Dropdown>
                    <span class="antd-pro-components-global-header-index-action antd-pro-components-global-header-index-account ant-dropdown-trigger">
                        <span class="ant-avatar antd-pro-components-global-header-index-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image"><img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="avatar"></span>
                        <span class="antd-pro-components-global-header-index-name">Serati kakMa</span>
                    </span>
                    <DropdownMenu slot="list" :style="{width:'160px',textAlign:center}">
                        <DropdownItem>
                            <Icon type="ios-cog-outline" :style="{marginRight:'10px',fontSize:'18px'}" />个人中心</DropdownItem>
                        <DropdownItem>
                            <Icon type="ios-cog-outline" :style="{marginRight:'10px',fontSize:'18px'}" />个人设置</DropdownItem>
                        <DropdownItem>
                            <Icon type="ios-cog-outline" :style="{marginRight:'10px',fontSize:'18px'}" />触发报错</DropdownItem>
                
                        <DropdownItem divided   @click.native="logout">
                            <Icon type="ios-cog-outline" :style="{marginRight:'10px',fontSize:'18px'}" />退出登录</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <button type="button" class="ant-btn ant-btn-sm" style="margin: 0px 8px;">
                    <span>English</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        logout() {
            debugger
        
             localStorage.removeItem("user");
        localStorage.removeItem("password");
        this.$router.push({path:'/loginWrap'})
        },
         hello(){
            this.$emit('sayhello','子组件值传给父组件')
        }
    }
};
</script>
<style  scoped>
.ant-layout-header {
  background: #001529;
  height: 64px;
  line-height: 64px;
  padding: 0 50px;
}
.ant-layout-footer,
.ant-layout-header {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.antd-pro-components-global-header-index-header {
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  height: 64px;
  padding: 0 12px 0 0;
  position: relative;
}
.ant-select-auto-complete.ant-select .ant-select-search--inline {
  float: left;
  position: static;
}
.ant-select-combobox .ant-select-search--inline {
  float: none;
  height: 100%;
  width: 100%;
}
.ant-select-combobox .ant-select-search__field__wrap {
  height: 100%;
  width: 100%;
}
.ant-select-search--inline .ant-select-search__field__wrap {
  height: 100%;
  width: 100%;
}
.ant-select-search__field__wrap {
  display: inline-block;
  position: relative;
}
.ant-select-auto-complete.ant-select .ant-input {
  background: transparent;
  border-width: 1px;
  height: 32px;
  line-height: 1.5;
}
.antd-pro-components-header-search-index-headerSearch
  .antd-pro-components-header-search-index-input
  input {
  -webkit-box-shadow: none !important;
  border: 0;
  box-shadow: none !important;
  padding-left: 0;
  padding-right: 0;
}
.ant-select-combobox .ant-select-search__field {
  -webkit-box-shadow: none;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: none;
  height: 100%;
  position: relative;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  z-index: 1;
}
.ant-select-search--inline .ant-select-search__field {
  background: transparent;
  border-radius: 4px;
  border-width: 0;
  font-size: 100%;
  height: 100%;
  line-height: 1;
  outline: 0;
  width: 100%;
}
.ant-badge-count {
  -webkit-box-shadow: 0 0 0 1px #fff;
  background: #f5222d;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #fff;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  min-width: 20px;
  padding: 0 6px;
  text-align: center;
  top: -10px;
  white-space: nowrap;
}
.ant-scroll-number-only {
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: inline-block;
  height: 20px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
i.antd-pro-components-global-header-index-trigger {
  -webkit-transition: all 0.3s, padding 0s;
  cursor: pointer;
  font-size: 20px;
  height: 64px;
  line-height: 64px;
  padding: 0 24px;
  transition: all 0.3s, padding 0s;
}
.anticon {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-rendering: optimizeLegibility;
  text-transform: none;
  vertical-align: -0.125em;
}
.antd-pro-components-global-header-index-right {
  float: right;
  height: 100%;
}
.antd-pro-components-global-header-index-right
  .antd-pro-components-global-header-index-search {
  padding: 0 12px;
}
.antd-pro-components-global-header-index-right
  .antd-pro-components-global-header-index-action:hover {
  background: rgba(0, 0, 0, 0.025);
}
.antd-pro-components-global-header-index-right
  .antd-pro-components-global-header-index-action {
  -webkit-transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding: 0 12px;
  transition: all 0.3s;
}
.antd-pro-components-global-header-index-right
  .antd-pro-components-global-header-index-action
  > i {
  color: rgba(0, 0, 0, 0.65);
  font-size: 18px;
  vertical-align: middle;
}
.antd-pro-components-header-search-index-headerSearch .anticon-search {
  cursor: pointer;
  font-size: 16px;
}
.antd-pro-components-header-search-index-headerSearch
  .antd-pro-components-header-search-index-input,
.antd-pro-components-header-search-index-headerSearch
  .antd-pro-components-header-search-index-input:focus,
.antd-pro-components-header-search-index-headerSearch
  .antd-pro-components-header-search-index-input:hover {
  border-bottom: 1px solid #d9d9d9;
}
.ant-select-auto-complete {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ant-select-auto-complete.ant-select .ant-select-search--inline {
  float: left;
  position: static;
}
.ant-select-combobox .ant-select-search--inline {
  float: none;
  height: 100%;
  width: 100%;
}
.antd-pro-components-header-search-index-headerSearch
  .antd-pro-components-header-search-index-input {
  -webkit-transition: width 0.3s, margin-left 0.3s;
  background: transparent;
  border-radius: 0;
  transition: width 0.3s, margin-left 0.3s;
  width: 0;
}
.ant-select-auto-complete {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  margin: 0;
  padding: 0;
}
.antd-pro-components-header-search-index-headerSearch
  .antd-pro-components-header-search-index-input
  .ant-select-selection {
  background: transparent;
}

.ant-select-auto-complete.ant-select .ant-select-selection--single {
  height: auto;
}
.ant-select-auto-complete.ant-select .ant-select-selection__rendered {
  height: 100%;
  line-height: 32px;
  margin-left: 0;
  margin-right: 0;
}
.ant-select-selection__rendered {
  display: block;
  line-height: 30px;
  margin-left: 11px;
  margin-right: 11px;
  position: relative;
}
.antd-pro-components-global-header-index-right
  .antd-pro-components-global-header-index-action {
  -webkit-transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding: 0 12px;
  transition: all 0.3s;
}
.ant-select-auto-complete.ant-select .ant-select-selection__rendered {
  height: 100%;
  line-height: 32px;
  margin-left: 0;
  margin-right: 0;
}
.ant-select-selection__rendered {
  display: block;
  line-height: 30px;
  margin-left: 11px;
  margin-right: 11px;
  position: relative;
}
.ant-select-combobox .ant-select-arrow {
  display: none;
}
.ant-select-arrow {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-transform-origin: 50% 50%;
  color: rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: 12px;
  font-style: normal;
  line-height: 1;
  margin-top: -6px;
  position: absolute;
  right: 11px;
  text-align: center;
  text-rendering: optimizeLegibility;
  text-transform: none;
  top: 50%;
  transform-origin: 50% 50%;
  vertical-align: -0.125em;
}
.antd-pro-components-global-header-index-right
  .antd-pro-components-global-header-index-action
  > i {
  color: rgba(0, 0, 0, 0.65);
  font-size: 18px;
  vertical-align: middle;
}
.ant-badge {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  color: unset;
  display: inline-block;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  line-height: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  vertical-align: middle;
}
.antd-pro-components-global-header-index-right
  .antd-pro-components-global-header-index-account
  .antd-pro-components-global-header-index-avatar {
  background: hsla(0, 0%, 100%, 0.85);
  color: #1890ff;
  margin: 20px 8px 20px 0;
  vertical-align: middle;
}
.ant-avatar-sm {
  border-radius: 50%;
  height: 24px;
  line-height: 24px;
  width: 24px;
}
.ant-avatar > img {
  display: block;
  height: 100%;
  width: 100%;
}
.ant-avatar {
  -webkit-box-sizing: border-box;
  background: #ccc;
  border-radius: 50%;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  color: #fff;
  display: inline-block;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  height: 32px;
  line-height: 1.5;
  line-height: 32px;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  width: 32px;
}
.ant-select-auto-complete {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ant-avatar-sm > * {
  line-height: 24px;
}
.antd-pro-components-notice-icon-index-icon {
  font-size: 18px;
  padding: 4px;
}
.ant-badge-count,
.ant-badge-dot {
  -webkit-transform: translateX(50%);
  -webkit-transform-origin: 100%;
  position: absolute;
  right: 0;
  transform: translateX(50%);
  transform-origin: 100%;
}
.ant-badge-multiple-words {
  padding: 0 8px;
}
.antd-pro-components-global-header-index-right
  .antd-pro-components-global-header-index-action {
  -webkit-transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding: 0 12px;
  transition: all 0.3s;
}
.ant-btn-sm {
  border-radius: 4px;
  font-size: 14px;
  height: 24px;
  padding: 0 7px;
}
</style>



