<template>
    <div>
        <div style="margin-bottom: 5px;">
            <!-- 面包屑导航 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index/Home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>实验检测数统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-tabs type="border-card" @tab-click="handleClick">
            <SelectButton :select="select"></SelectButton>
            <el-tab-pane label="检测中心水泥浆性能">
                <!-- 设置表格线，固定表头和列，表头内容居中显示 -->
                <el-table :data="tableData" border stripe
                highlight-current-row
                element-loading-text="拼命加载中" 
                :header-cell-class-name="headerBg" 
                height="400" max-height="400"
                :header-cell-style="{ 'text-align': 'center' }"
                >
                    <el-table-column show-overflow-tooltip prop="jh" label="井号"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="snjlx" label="水泥浆类型"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="sjjs" label="设计井深"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="qysj" label="取样时间"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="shb" label="水灰比"></el-table-column>

                    <el-table-column show-overflow-tooltip prop="wjwjj" label="尾桨外加剂">
                        <el-table-column show-overflow-tooltip prop="wjwjjJssj" label="降失水剂"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="wjwjjJssjhl" label="降失水剂含量%"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="wjwjjPzj" label="膨胀剂%"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="wjwjjPzjhl" label="膨胀水剂含量%"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="wjwjjZqj" label="早强剂"></el-table-column>
                    </el-table-column>

                    <el-table-column show-overflow-tooltip prop="ljjn" label="领浆性能">
                        <el-table-column show-overflow-tooltip prop="ljxnChsj" label="稠化时间"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="ljxnCscd" label="初始稠度"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="ljxnSsl" label="失水量"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="ljxnKyqd" label="抗压强度"></el-table-column>
                    </el-table-column>
                    <el-table-column show-overflow-tooltip prop="wjjn" label="尾桨性能">
                        <el-table-column show-overflow-tooltip prop="wjxnChsj" label="稠化时间"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="wjxnCscd" label="初始稠度"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="wjxnSsl" label="失水量"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="wjxnKyqd" label="抗压强度"></el-table-column>
                    </el-table-column>

                    <el-table-column label="操作" fixed="right" align="center" width="180">
                        <!-- eslint-disable-next-line -->
                        <template slot-scope='scope'>
                            <el-button type="primary" plain size="small" icon="el-icon-edit" @click="handleEdit(scope.row)"><span style="color: #3b4246;">编辑</span></el-button>
                            <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteRow"><span class="text_color">删除</span></el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <!-- 分页组件 -->
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="Number(searchInformation.page)"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="Number(searchInformation.rows)"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="Number(searchInformation.total)">
                </el-pagination>

            </el-tab-pane>
            <el-tab-pane label="检测中心钻井液性能">
                <!-- 设置表格线，固定表头和列，表头内容居中显示 -->
                <el-table :data="tableData" border stripe
                highlight-current-row
                element-loading-text="拼命加载中" 
                :header-cell-class-name="headerBg" 
                height="400" max-height="400"
                :header-cell-style="{ 'text-align': 'center' }"
                >
                    <el-table-column show-overflow-tooltip prop="jh" label="井号"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="zjgs" label="钻井公司"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="jd" label="井队"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="wtdw" label="委托单位"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="jcdw" label="检测单位"></el-table-column>

                    <el-table-column show-overflow-tooltip prop="zjylx" label="钻井液类型"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="qysd" label="取样深度"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="qyrq" label="取样日期"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="md" label="密度"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="ldnd" label="漏斗粘度"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="lslYq" label="滤失量（30min）mL-要求"></el-table-column>

                    <el-table-column show-overflow-tooltip prop="lslJcjg" label="滤失量（30min）mL-检测结果"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="nbhd" label="泥饼厚度"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="ph" label="含砂"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="gxhlYq" label="固相含量（%）-要求"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="gxhlJcjg" label="固相含量（%）-检测结果"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="cq" label="初切"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="zq" label="终切"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="sxnd" label="塑性粘度"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="dq" label="动切"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="n" label="n值"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="k" label="k值"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="prthlYq" label="膨润土含量（kg/m^3）-要求"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="prthlJcjg" label="膨润土含量（kg/m^3）-检测结果"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="gwgylslYq" label="高温高压滤失量（mL）-要求"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="gwgylslJcjg" label="高温高压滤失量（mL）-检测结果"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="khlYq" label="（钾聚）K+含量（mg/L）-要求"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="khlJcjg" label="（钾聚）K+含量（mg/L）-检测结果"></el-table-column>
                    <el-table-column show-overflow-tooltip prop="kclhlYq" label="（钾聚）KCl含量（kg/m^3）-要求"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="kclhlJcjg" label="（钾聚）KCl含量（kg/m^3）-检测结果"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="jsghlYq" label="（有机盐）甲酸根含量（%）-要求"></el-table-column>
                        <el-table-column show-overflow-tooltip prop="jsghlJcjg" label="（有机盐）甲酸根含量（%）-检测结果"></el-table-column>

                    <el-table-column label="操作" fixed="right" align="center" width="180">
                        <!-- eslint-disable-next-line -->
                        <template slot-scope='scope'>
                            <el-button type="primary" plain size="small" icon="el-icon-edit" @click="handleEdit(scope.row)"><span style="color: #3b4246;">编辑</span></el-button>
                            <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteRow"><span class="text_color">删除</span></el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <!-- 分页组件 -->
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="Number(searchInformation.page)"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="Number(searchInformation.rows)"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="Number(searchInformation.total)">
                </el-pagination>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import SelectButton from '@/components/SelectButton'
export default {
    name: 'Experiments',
    components: { SelectButton },
    data() {
        return {
            headerBg: 'headerBg',
            tableData: [],
            url:'',
            //请求的数据
            searchInformation: {
                page: '1',
                rows: '100',
                total: '0',
                jh: '',
                snjlx: '',
                sjjs: '',
                wtdw: '',
                zjylx: '',
                qysd: ''
            },
            // searchInformation1: {
            //     page: '1',
            //     rows: '100',
            //     total: '0',
            //     jh: '',
            //     snjlx: '',
            //     sjjs: ''
            // },
            // searchInformation2: {
            //     page: '1',
            //     rows: '100',
            //     total: '0',
            //     wtdw: '',
            //     zjylx: '',
            //     qysd:''
            // },
            tab: '0',//0代表第一个表单，1代表第二点表单
            select:[],
            select2: [
                { key: '井号', value: 'jh' },
                { key: '完钻钻井液密度', value: 'ywWzzjymd' },
                { key: '固井前钻井液密度', value: 'tjZjymd' },
            ]
        }
    },
    methods: {
        getData(searchInformation, url) {
            console.log("$$$$$$$$$$$$$", url);
            this.$axios({
                url: this.$store.state.urlAdress + url,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(searchInformation),
            })
            .then((res) => {
                if (res.status == 200) {
                    console.log("请求数据为", res);
                    this.tableData = res.data.data.items
                    this.searchInformation.total = res.data.data.total
                    console.log(this.tableData);
                }
            })
            .catch((e) => {
                this.$message(e);
            });
        },
        //rows 改变时会触发
        handleSizeChange(val) {
            this.searchInformation.rows = String(val);
            // console.log(`每页 ${val} 条`);
            this.getGeologyData(this.searchInformation)
        },
        //currentPage 改变时会触发
        handleCurrentChange(val) {
            this.searchInformation.page = String(val);
            // console.log(`当前页: ${val}`);
            this.getGeologyData(this.searchInformation)
        },
        //点击不同表格标签
        handleClick(tab) {
            console.log(tab.$options.propsData.label);
            if (tab.$options.propsData.label == '检测中心水泥浆性能') {
                this.tab = '0'
            } else if (tab.$options.propsData.label == '检测中心钻井液性能') {
                this.tab='1'
            }
        },
        //传递数据值
        zhi() {
            if (this.tab == '0') {
                let select1=[
                    { key: '井号', value: 'jh' },
                    { key: '水泥浆类型', value: 'snjlx' },
                    { key: '设计井深', value: 'sjjs' },
                ]
                for (let i = 0; i < select1.length; i++) {
                    let item = {};
                    item["key"] = select1[i].key;
                    item["value"] = select1[i].value;
                    this.select[i] = item;
                }
                console.log(this.select);
                this.url="/gj-jczxsnjxn/queryGjJczxsnjxn"
            }
            else if (this.tab == '1') {
                this.url = "/gj-jczxzjyxn/queryGjJczxzjyxn"
                this.getData(this.searchInformation, this.url)//报错
            }
        }
    },
    mounted() {
        this.zhi()
        this.getData(this.searchInformation,this.url)
    }
}
</script>

<style>

</style>