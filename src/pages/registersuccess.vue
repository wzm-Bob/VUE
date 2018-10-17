<template>
    <div style="min-height:300px">
        <h1 class="results"> 注册成功</h1>
        <div class="returns">
            <router-link to="/loginWrap">返回登录页面去登录 </router-link>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.results {
    padding: 50px 0;
    font-size: 48px;
    color: #0d0;
    text-align: center;
}
.returns {
    color: #4287ac;
    text-align: right;
    font-size: 18px;
    cursor: pointer;
}
</style>


