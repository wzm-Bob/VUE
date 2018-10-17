<template>
    <div>
        <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">商业</BreadcrumbItem>
            <BreadcrumbItem>当前</BreadcrumbItem>
        </Breadcrumb>
        <Row style="background:#f5f7f9;padding:20px 0;" type="flex" justify="space-around" class="code-row-bg">
            <Col span="23">
            <Table :data="tableData1" :columns="tableColumns1"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="50" :current="1"   show-elevator show-total @on-change="changePage"></Page>
                </div>
            </div>
            </Col>
        </Row>

    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData1: this.mockTableData1(),
            tableColumns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Status',
                    key: 'status',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.status === 1 ? 'primary' : row.status === 2 ? 'success' : 'error';
                        const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail';

                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            }
                        }, text);
                    }
                },
                {
                    title: 'Portrayal',
                    key: 'portrayal',
                    render: (h, params) => {
                        return h('Poptip', {
                            props: {
                                trigger: 'hover',
                                title: params.row.portrayal.length + 'portrayals',
                                placement: 'bottom'
                            }
                        }, [
                                h('Tag', params.row.portrayal.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                        h('ul', this.tableData1[params.index].portrayal.map(item => {
                                            return h('li', {
                                                style: {
                                                    textAlign: 'center',
                                                    padding: '4px'
                                                }
                                            }, item)
                                        }))
                                    ])
                            ]);
                    }
                },
                {
                    title: 'People',
                    key: 'people',
                    render: (h, params) => {
                        return h('Poptip', {
                            props: {
                                trigger: 'hover',
                                title: params.row.people.length + 'customers',
                                placement: 'bottom'
                            }
                        }, [
                                h('Tag', params.row.people.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                        h('ul', this.tableData1[params.index].people.map(item => {
                                            return h('li', {
                                                style: {
                                                    textAlign: 'center',
                                                    padding: '4px'
                                                }
                                            }, item.n + '：' + item.c + 'People')
                                        }))
                                    ])
                            ]);
                    }
                },
                {
                    title: 'Sampling Time',
                    key: 'time',
                    render: (h, params) => {
                        return h('div', 'Almost' + params.row.time + 'days');
                    }
                },
                {
                    title: 'Updated Time',
                    key: 'update',
                    render: (h, params) => {
                        return h('div', this.formatDate(this.tableData1[params.index].update));
                    }
                }
            ]
        }
    },
    methods: {
        mockTableData1() {
            let data = [];
            for (let i = 0; i < 12; i++) {
                data.push({
                    name: 'Business' + (i+1),
                    status: Math.floor(Math.random() * 3 + 1),
                    portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
                    people: [
                        {
                            n: 'People' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: 'People' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: 'People' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        }
                    ],
                    time: Math.floor(Math.random() * 7 + 1),
                    update: new Date()
                })
            }
            return data;
        },
        formatDate(date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        changePage() {
            // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
            this.tableData1 = this.mockTableData1();
        }
    }
}
</script>
<style scoped>
.ivu-col-span-23 {
    display: block;
    width: 95.83333333%;
    background: #fff;
    padding: 20px;
}
.ivu-breadcrumb {
    color: #999;
    font-size: 14px;
    background: #fff;
    margin-top: 3px;
    padding: 10px;
}
</style>