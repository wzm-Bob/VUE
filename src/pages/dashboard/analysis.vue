<template>
    <div >
        <Row style="background:#f5f7f9;padding:20px;" type="flex" justify="space-around" class="code-row-bg">
            <Col span="5" >
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
            </Col>
            <Col span="5"  >
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
            </Col>
              <Col span="5" >
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
            </Col>
              <Col span="5">
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
            </Col>
        </Row>
        <div :style="[{background:'#fff',marginTop:'15px',padding:'15px'}]">
            <Tabs value="name1">
                <TabPane label="销售额" name="name1">
                    <Echarts :id='echartsone' :style="{width:'300px',height:'250px'}"></Echarts>
                </TabPane>
                <TabPane label="访问量" name="name2">
                    <div>
                        <p>访问量</p>
                    </div>
                    <DatePicker type="date" @on-change="getStartTime"></DatePicker>
                </TabPane>
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

    },
    methods: {
        getStartTime(e) {
            /*   alert(1) */
            console.log(e)
        } 
    }
};
</script>
<style scoped>
.ivu-col-span-5 {
    display: block;
    width: 22.833333%;
    padding: 5px 0;
}
.ivu-card {
    padding: 10px 0;
}
</style>


