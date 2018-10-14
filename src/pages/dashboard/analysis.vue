<template>
    <div>
        <Row type="flex" justify="space-between" align="middle" class="code-row-bg">
            <Col span="6" :style="{background:'#fff',height:'150px'}">第一模块</Col>
            <Col span="6" :style="{background:'#fff',height:'150px'}">第一模块</Col>
            <Col span="6" :style="{background:'#fff',height:'150px'}">第一模块</Col>
            <Col span="6" :style="{background:'#fff',height:'150px'}">第一模块</Col>
        </Row>
        <Catepickers/>
        <div :style="[{background:'#fff',marginTop:'15px'}]">
            <Tabs value="name1">
                <TabPane label="销售额" name="name1">
                    <Echarts :id='echartsone' :style="{width:'300px',height:'250px'}"></Echarts>
                </TabPane>
                <TabPane label="访问量" name="name2">访问量</TabPane>
                 
                <!--<Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
                <Button @click="handleTabsAdd" size="small" slot="extra">删除</Button>-->
               
            </Tabs>
        </div>
    </div>
</template>
<script>
import Echarts from "./component/echartsone";
import Catepickers from "../../components/base/datepicker";
export default {
  components: {
      Catepickers,
    Echarts
    
  }
};
</script>
<style scoped>
</style>


