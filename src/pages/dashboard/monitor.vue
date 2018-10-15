<template>
     <div>
        <span style="font-size:40px;font-weight:800；color:#f00">监控页面</span>
        <Comtest></Comtest>
        <Comtests></Comtests>
    </div>
</template>
<script>
import Comtest from "./component/comtest";
import Comtests from "./component/comtests";
export default {
    components:{
        Comtest,
        Comtests
    }
}
</script>
<style scoped>

</style>