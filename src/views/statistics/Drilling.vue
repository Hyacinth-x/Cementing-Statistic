<template>
    <div>
        <div style="margin-bottom: 5px;">
            <!-- 面包屑导航 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index/Home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>钻井因素统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div>
            <el-input placeholder="请输入内容"  class="input-with-select" style="width: 500px;" size="small" clearable="" v-model="input1">
                <el-select slot="prepend" v-model="value1"   placeholder="请选择" style="width: 150px;">
                    <el-option v-for="item in select1" :label="item.key" :value="item.value" :key="item.value"></el-option>
                </el-select>
            </el-input>

            <el-input v-show="isShow" placeholder="请输入内容"  class="input-with-select" 
                        style="width: 500px; margin-left: 40px;" size="small" clearable="" v-model="input2">
                    <el-select slot="prepend" v-model="value2" placeholder="请选择" style="width: 150px;">
                        <el-option v-for="item in select2" :label="item.key" :value="item.value" :key="item.value"></el-option>
                    </el-select>
            </el-input>
        </div>

        <div style="margin: 5px 0; background-color: #f4f8fb;">
                <el-button-group style="margin-right: 5px;">
                    <el-button type="primary" size="small" icon="el-icon-search" @click="search"><span class="text_color">查询</span></el-button>
                    <el-button type="primary" size="small" icon="el-icon-refresh-right" @click="reset"><span class="text_color">重置</span></el-button>
                </el-button-group>
                <el-button-group style="margin: 0 5px;">
                    <el-button type="primary" size="small" icon="el-icon-circle-plus-outline" @click="add"><span class="text_color">添加普通条件</span></el-button>
                    <el-button type="primary" size="small" icon="el-icon-circle-plus-outline"><span class="text_color">添加数值条件</span></el-button>
                    <el-button type="primary" size="small" icon="el-icon-circle-plus-outline"><span class="text_color">添加时间条件</span></el-button>
                </el-button-group>
                <el-button-group style="margin: 0 5px;">
                    <el-button type="success" size="small" icon="el-icon-plus" @click="handleEdit()"><span class="text_color">新增</span></el-button>
                    <el-button type="warning" size="small" icon="el-icon-upload2"><span class="text_color">导入</span></el-button>
                </el-button-group>

                <el-row style="float: right; padding: 2px;">
                    <el-button icon="el-icon-download" circle size="mini"></el-button>
                    <el-button icon="el-icon-printer" circle size="mini"></el-button>
                    <el-button icon="el-icon-refresh" circle size="mini"></el-button>
                    <el-button icon="el-icon-full-screen" circle size="mini"></el-button>
                    <el-button icon="el-icon-s-grid" circle size="mini"></el-button>
                </el-row>
        </div>

        <div>
            <!-- 设置表格线，固定表头和列，表头内容居中显示 -->
            <el-table :data="tableData" border stripe
                highlight-current-row
                element-loading-text="拼命加载中" 
                :header-cell-class-name="headerBg"
                height="470"
                max-height="470"
                :header-cell-style="{ 'text-align': 'center' }"
            >
                <el-table-column show-overflow-tooltip prop="jh" label="井号"></el-table-column>
                <el-table-column show-overflow-tooltip prop="qk" label="区块"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jd" label="井段(m)"></el-table-column>
            
                <el-table-column show-overflow-tooltip prop="jyqjJj" label="井径(mm)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjZgzj" label="钻杆直径(mm)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjPl" label="排量(L/s)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjKc" label="开次"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjBtxs" label="表套下深(m)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjJtxs" label="技套下深(m)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjJxj" label="井斜角(度)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjBy1" label="泵压(MPa)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjZjytx" label="钻井液体系"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjZjymd" label="钻井液密度(g/cm^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjZjysxzd" label="钻井液塑性粘度(Mpa.s)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqiZjydql" label="钻井液动切力(Pa)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jyqjBh" label="搬含(膨润土重量含量)"></el-table-column>

                <el-table-column show-overflow-tooltip prop="jygzQjbhl" label="全角变化率(度/30米)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jygzJj" label="井径(mm)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jygzZtzj" label="钻头直径(mm)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jygzWdqgs" label="稳定器个数"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jygzWdqcc" label="稳定器尺寸(mm)"></el-table-column>

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

            <!-- 弹出新增表单 -->
            <el-dialog :title="title" :visible.sync="dialogFormVisible" width="30%" :before-close="handleClose">
                <el-form label-position="left" label-width="100px" :model="drillingForm">
                    <el-form-item label="井号"><el-input v-model="drillingForm.jh" :disabled="true"></el-input></el-form-item>
                    <el-form-item label="区块" ><el-input v-model="drillingForm.qk" ></el-input></el-form-item>
                    <el-form-item label="井段(m)" ><el-input v-model="drillingForm.jd"></el-input></el-form-item>
                    <el-form-item label="井径(mm)" ><el-input v-model="drillingForm.jyqjJj"></el-input></el-form-item>
                    <el-form-item label="钻杆直径(mm)" ><el-input v-model="drillingForm.jyqjZgzj" ></el-input></el-form-item>
                    <el-form-item label="排量(L/s)" ><el-input v-model="drillingForm.jyqjPl"></el-input></el-form-item>
                    <el-form-item label="开次" ><el-input v-model="drillingForm.jyqjKc"></el-input></el-form-item>
                    <el-form-item label="表套下深(m)" ><el-input v-model="drillingForm.jyqjBtxs"></el-input></el-form-item>
                    <el-form-item label="技套下深(m)" ><el-input v-model="drillingForm.jyqjJtxs"></el-input></el-form-item>
                    <el-form-item label="井斜角(度)"><el-input v-model="drillingForm.jyqjJxj"></el-input></el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button size="small" @click='closeDialog()'>取消</el-button>
                    <el-button size="small" type="primary" class="title" @click="submitForm()">保存</el-button>
                </div>
            </el-dialog>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            headerBg: 'headerBg',
            tableData: [],//表格数据
            dialogFormVisible: false,
            input1: '',//输入框数据
            input2: '',
            value1: '',//选择的查询条件
            value2: '',
            urlAdress: 'http://192.168.43.43:8001',
            isShow: false,
            title: '',
            //第一个查询框
            select1: [
                { key: '井号', value: 'jh' },
                { key: '开次', value: 'jygjKc' },
                { key: '钻井液体系', value: 'jyqjZjytx' },
                { key: '稳定器尺寸', value: 'jygzWdqcc' }
            ],
            select2: [
                { key: '井号', value: 'jh' },
                { key: '开次', value: 'jygjKc' },
                { key: '钻井液体系', value: 'jyqjZjytx' },
                { key: '稳定器尺寸', value: 'jygzWdqcc' }
            ],
            //请求数据参数
            searchInformation: {
                page: '1',
                rows: '100',
                total: '0',
                jh: '',
                jygjKc: '',
                jyqjZjytx: '',
                jygzWdqcc: ''
            },
            //新增编辑表单是否显示
            dialogFormVisible: false,
            //新增编辑表单数据
            drillingForm: {
                id: '',
                jh: '',
                qk: '',
                jd: '',
                jyqjJj: '',
                jyqjZgzj: '',
                jyqjPl: '',
                jyqjKc: '',
                jyqjBtxs: '',
                jyqjJtxs: '',
                jyqjJxj: ''
            },
            //判断是新增还是编辑按钮
            choose: ''//1为编辑，2为新增
        }
    },
    methods: {
        getGeologyData(searchInformation) {
            // console.log("输出的数据searchInformation",searchInformation);
            this.$axios({
                url: this.urlAdress + "/model-factor3/queryDrillingFactors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(searchInformation),
            })
                .then((res) => {
                    if (res.status == 200) {
                        console.log("请求数据为", res);
                        this.tableData = res.data.items
                        this.searchInformation.total = res.data.total
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
        //添加搜索条件
        add() {
            this.isShow = true
        },
        selectValue(value, input) {
            switch (value) {
                case 'jh':
                    this.searchInformation.jh = input
                    break
                case 'jygjKc':
                    this.searchInformation.jygjKc = input
                    break
                case 'jyqjZjytx':
                    this.searchInformation.jyqjZjytx = input
                    break
                case 'jygzWdqcc':
                    this.searchInformation.jygzWdqcc = input
                    break
                default:
                    break;
            }
        },
        //根据条件查询
        search() {
            console.log("选择的条件", this.value1);
            // console.log("选择的条件", this.value2);
            console.log("@@@@2", this.input1)
            // console.log("@@@@2", this.input2)
            if (this.value1 != null) {
                this.selectValue(this.value1, this.input1)
                console.log("第一个搜索框", this.searchInformation);
            }
            if (this.value2 != null) {
                this.selectValue(this.value2, this.input2)
                // console.log("第二个搜索框",this.searchInformation);
            }
            this.getGeologyData(this.searchInformation)
        },
        //重置
        reset() {
            this.isShow = false
            this.searchInformation = {
                page: '1',
                rows: '100',
                total: '0',
                jh: '',
                jygjKc: '',
                jyqjZjytx: '',
                jygzWdqcc: ''
            },
            this.input1 = ''
            this.input2 = ''
            this.value1 = ''
            this.value2 = ''
            console.log("清空", this.searchInformation);
            this.getGeologyData(this.searchInformation)
        },
        //删除
        deleteRow() {
            this.$confirm('是否删除该条数据?', '提示', {
                confirmButtonText: '是',
                cancelButtonText: '否',
                type: 'warning'
            }).then(() => {
                console.log("删除该条数据");
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        //新增表单关闭
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        //显示编辑或新增界面
        handleEdit: function (row) {
            console.log("row的id为", row.id);
            this.dialogFormVisible = true
            if (row != undefined && row != 'undefined') {
                this.title = '编辑'
                this.choose = '1'

                this.drillingForm.id = row.id
                this.drillingForm.jh = row.jh
                this.drillingForm.qk = row.qk
                this.drillingForm.jd = row.jd
                this.drillingForm.jyqjJj = row.jyqjJj
                this.drillingForm.jyqjZgzj = row.jyqjZgzj
                this.drillingForm.jyqjPl = row.jyqjPl
                this.drillingForm.jyqjKc = row.jyqjKc
                this.drillingForm.jyqjBtxs = row.jyqjBtxs
                this.drillingForm.jyqjJtxs = row.jyqjJtxs
                this.drillingForm.jyqjJxj = row.jyqjJxj
            } else {
                this.title = '新增'
                this.choose = '2'
                
                this.drillingForm.jh = ''
                this.drillingForm.qk = ''
                this.drillingForm.jd = ''
                this.drillingForm.jyqjJj = ''
                this.drillingForm.jyqjZgzj = ''
                this.drillingForm.jyqjPl = ''
                this.drillingForm.jyqjKc = ''
                this.drillingForm.jyqjBtxs = ''
                this.drillingForm.jyqjJtxs = ''
                this.drillingForm.jyqjJxj = ''
            }
        },
        // 关闭编辑、增加弹出框
        closeDialog() {
            this.dialogFormVisible = false
        },
        //保存方法
        submitForm() {
            if (this.choose = '1') {
                console.log("编辑的内容是", this.drillingForm);
                this.$axios({
                    url: this.urlAdress + "/model-factor3/updateModelFactor",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(this.drillingForm),
                })
                .then((res) => {
                    if (res.status == 200) {
                        // console.log("请求数据为", res);
                        this.$message.success("编辑成功！");
                        this.dialogFormVisible = false
                        this.getGeologyData(this.searchInformation)
                    }
                })
                .catch((e) => {
                    this.$message(e);
                });
            } else if (this.choose = '2') {
            }
        },
    },
    mounted() {
        this.getGeologyData(this.searchInformation);
    },
}
</script>

<style>
.headerBg{
    /* 设置表头背景颜色 */
    background: #daebfb !important; 
}
</style>