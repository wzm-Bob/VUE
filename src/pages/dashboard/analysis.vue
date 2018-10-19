<template>
    <div>
        <Row style="background:#f5f7f9;padding:20px;" type="flex" justify="space-around" class="code-row-bg">
            <Col span="5" v-for="(item,index) in cardData">
            <Card :bordered="false">
                <p slot="title">{{item.title}}</p>
                <p>{{item.conone}}</p>
                <count-to :start-val="0" :end-val="Number(item.contwo)" :duration="2600" class="card-panel-num"/>
                <p>{{item.conthree}}</p>
            </Card>
            </Col>
        </Row>
        <Row style="background:#f5f7f9;" type="flex" justify="space-around" class="code-row-bg">
            <Col span="22">
            <Card :bordered="false">
                <Echarts :id='echartsone' :style="{width:'96%',height:'250px'}"></Echarts>
            </Card>
            </Col>

        </Row>
         <Row style="background:#f5f7f9;padding:20px;" type="flex" justify="space-around" class="code-row-bg">
            <Col span="5" v-for="(item,index) in cardData">
            <Card :bordered="false">
                <p slot="title">{{item.title}}</p>
                <p>{{item.conone}}</p>
                <count-to :start-val="0" :end-val="Number(item.contwo)" :duration="2600" class="card-panel-num"/>
                <p>{{item.conthree}}</p>
            </Card>
            </Col>
        </Row>
        <!--    -->
    </div>
</template>
<script>
import CountTo from 'vue-count-to'
import Echarts from "./component/echartsone";
import Catepickers from "../../components/base/datepicker";
export default {
    components: {
        Echarts,
        CountTo
    },
    data() {
        return {
            cardData: [
                {
                    title: '数据持久化断回肠',
                    conone: '秋夕一梦',
                    contwo: '8888',
                    conthree: '找工作的目的就是为了钱',
                    key: '1'
                },
                {
                    title: '童鞋你裤子穿反了',
                    conone: '按时间看到那数据库',
                    contwo: '6666',
                    conthree: 'vue有点菜',
                    key: '2'
                },
                {
                    title: '阿七的罪孽不可饶恕',
                    conone: '纵马扬刀唯我彭大将军',
                    contwo: '5555',
                    conthree: '少年当自强',
                    key: '3'
                },
                {
                    title: '周星驰和华仔在在在香港九龙湾哈哈哈',
                    conone: '明天的莫斯科眼泪',
                    contwo: '4466',
                    conthree: '散啦还要',
                    key: '4'
                }
            ]
        }
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
.card-panel-num {
        font-size: 20px;
        color: aqua;
        font-weight: 600;
      }
.ivu-col-span-5 {
    display: block;
    width: 22.833333%;
    padding: 5px 0;
}
.ivu-card {
    padding: 10px 0;
}
.ivu-col-span-22 {
    display: block;
    width: 94.666667%;
}
</style>


