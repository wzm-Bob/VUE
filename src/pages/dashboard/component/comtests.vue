<template>
    <div>
        <p @click="wzm">88880000000</p>
    </div>
</template>
<script>
import eventProxy from "../../../utils/eventProxy.js";
export default {
    name:'comdv',
    methods:{
        wzm(){
           eventProxy.$emit('changeThing',9999999)
        }   
    }
}
</script>
<style>

</style>


