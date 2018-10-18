<template>
    <div class="public-header">
        <span class="header-left" @click="hello" :msg="msg" :style="{paddingLeft:'15px'}">
        <Icon type="ios-rainy" size="35" />
         <!-- icon等原生事件要加修饰符 -->
        </span>
        <div class="header-right">
            <div>
               <Badge dot>
        <Icon type="ios-body" size="26"></Icon>
    </Badge>
            </div>

            <Dropdown>
                <a href="javascript:void(0)">
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <!--   <Icon type="ios-body" size="24" color="#f00" /> -->
                    萌萌
                </a>
                <DropdownMenu slot="list" :style="{width:'160px',textAlign:center}">
                    <DropdownItem>
                        <Icon type="ios-cog-outline" :style="{marginRight:'10px',fontSize:'18px'}" />个人中心</DropdownItem>
                    <DropdownItem>
                        <Icon type="ios-cog-outline" :style="{marginRight:'10px',fontSize:'18px'}" />个人设置</DropdownItem>
                    <DropdownItem>
                        <Icon type="ios-cog-outline" :style="{marginRight:'10px',fontSize:'18px'}" />触发报错</DropdownItem>

                    <DropdownItem divided @click.native="logout">
                        <Icon type="ios-cog-outline" :style="{marginRight:'10px',fontSize:'18px'}" />退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
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
            sessionStorage.removeItem("account");
            this.$router.push({ path: '/loginWrap' })
        },
        hello() {
            this.$emit('sayhello', '子组件值传给父组件')
        }
    }
};
</script>
<style lang="less" scoped>
.ivu-icon:before,
.ivu-icon:after {
    font-family: Ionicons !important;
}
.public-header {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.header-right {
    float: right;
    height: 100%;
    overflow: hidden;
    padding-right: 30px;
}
.header-right>div {
    height: 100%;
    padding: 0 15px;
    display: inline-block;
}
.header-right>div:hover {
    background: #eaeaea;
}
</style>




