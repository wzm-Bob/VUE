<template>
    <div>
        <p>测试非父子转件传递值 组件传递</p>
    </div>
</template>
<script>
import eventProxy from "../../../utils/eventProxy.js";
export default {
     name:'comd',
     mounted(){
        eventProxy.$on('changeThing',function(val){
                alert(val)
        })
    }
}
</script>
<style>

</style>


