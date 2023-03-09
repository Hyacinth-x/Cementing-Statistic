<template>
    <div>
        <div style="margin-bottom: 5px;">
            <!-- 面包屑导航 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index/Home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>固井因素统计</el-breadcrumb-item>
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
            height="470" max-height="470"
            :header-cell-style="{ 'text-align': 'center' }"
            >
                <el-table-column show-overflow-tooltip prop="id" label="ID"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jh" label="井号"></el-table-column>
                <el-table-column show-overflow-tooltip prop="qk" label="区块"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jd" label="井段(m)"></el-table-column>

                <el-table-column show-overflow-tooltip prop="ywWzzjymd" label="完钻钻井液密度(g/cm^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="ywScsd" label="固井前油气上窜速度(m/s)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="ywZjymd" label="固井前钻井液密度(g/cm^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="ywHkdtdlmd" label="环空动态当量密度(g/cm^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="ywLj100chsj" label="领浆100BC稠化时间"></el-table-column>
                <el-table-column show-overflow-tooltip prop="ywWj100chsj" label="尾浆100BC稠化时间"></el-table-column>
                <el-table-column show-overflow-tooltip prop="ywSzhhkdlmd" label="失重后环空当量密度(g/cm^3)"></el-table-column>

                <el-table-column show-overflow-tooltip prop="jzFzqlx" label="扶正器类型"></el-table-column>
                <el-table-column show-overflow-tooltip prop="jzFzqjg" label="扶正器间隔(m) "></el-table-column>
 
                <el-table-column show-overflow-tooltip prop="tjZjymd" label="固井前钻井液密度(g/cm^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjZjydql" label="固井前钻井液动切力(Pa)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjCxymd" label="冲洗液密度(g/cm^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjCxyyl" label="冲洗液替入量(m^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjGlymd" label="隔离液密度(g/cm^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjGlyyl" label="隔离液替入量(m^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjLjtx" label="领浆体系"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjLjmd" label="领浆密度(g/cm^3)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjLjcc" label="领浆初稠"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjDtjz" label="顶替介质(压塞液名称)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjDtpl" label="顶替排量(水泥浆上返速度) (m/s)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="tjSgfs" label="施工方式"></el-table-column>
            
                <el-table-column show-overflow-tooltip prop="fcWjtx" label="尾浆体系"></el-table-column>
                <el-table-column show-overflow-tooltip prop="fcKyqd" label="24H抗压强度(Pa)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="fcWj40chsj" label="尾浆40BC稠化时间"></el-table-column>
                <el-table-column show-overflow-tooltip prop="fcWj100chsj" label="尾浆100BC稠化时间"></el-table-column>
                <el-table-column show-overflow-tooltip prop="fcSgsj" label="施工时间(H)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="fcXhwd" label="循环温度(度)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="fcHnfs" label="候凝方式"></el-table-column>
                <el-table-column show-overflow-tooltip prop="fcHnsj" label="候凝时间(H)"></el-table-column>
                <el-table-column show-overflow-tooltip prop="fcWjss" label="尾浆失水"></el-table-column>

                <el-table-column label="操作" fixed="right" align="center" width="180">
                    <!-- eslint-disable-next-line -->
                    <template slot-scope='scope'>
                        <el-button type="primary" plain size="small" icon="el-icon-edit" @click="handleEdit(scope.row)"><span style="color: #3b4246;">编辑</span></el-button>
                        <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteRow"><span class="text_color">删除</span></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

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
            <el-form label-position="left" label-width="100px" :model="cemengtingForm">
                <el-form-item label="井号"><el-input v-model="cemengtingForm.jh" :disabled="true"></el-input></el-form-item>
                <el-form-item label="区块" ><el-input v-model="cemengtingForm.qk" ></el-input></el-form-item>
                <el-form-item label="井段(m)" ><el-input v-model="cemengtingForm.jd"></el-input></el-form-item>
                <el-form-item label="完钻钻井液密度(g/cm^3)" ><el-input v-model="cemengtingForm.ywWzzjymd"></el-input></el-form-item>
                <el-form-item label="固井前油气上窜速度(m/s)" ><el-input v-model="cemengtingForm.ywScsd" ></el-input></el-form-item>
                <el-form-item label="固井前钻井液密度(g/cm^3)" ><el-input v-model="cemengtingForm.ywZjymd"></el-input></el-form-item>
                <el-form-item label="环空动态当量密度(g/cm^3)" ><el-input v-model="cemengtingForm.ywHkdtdlmd"></el-input></el-form-item>
                <el-form-item label="领浆100BC稠化时间" ><el-input v-model="cemengtingForm.ywLj100chsj"></el-input></el-form-item>
                <el-form-item label="尾浆100BC稠化时间" ><el-input v-model="cemengtingForm.ywWj100chsj"></el-input></el-form-item>
                <el-form-item label="失重后环空当量密度(g/cm^3)"><el-input v-model="cemengtingForm.ywSzhhkdlmd"></el-input></el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click='closeDialog()'>取消</el-button>
                <el-button size="small" type="primary" class="title" @click="submitForm()">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'Cementing',
    data() {
        return {
            tableData: [],//表格数据
            headerBg: 'headerBg',
            input1: '',//输入框数据
            input2: '',
            value1: '',//选择的查询条件
            value2: '',//选择的查询条件
            urlAdress: 'http://192.168.43.43:8001',
            isShow: false,
            title: '',

            //第一个查询框
            select1: [
                { key: '井号', value: 'jh' },
                { key: '完钻钻井液密度', value: 'ywWzzjymd' },
                { key: '固井前钻井液密度', value: 'tjZjymd' },
                { key: '固井前油气上窜速度', value: 'ywScsd' }
            ],
            //第二个查询框
            select2: [
                { key: '井号', value: 'jh' },
                { key: '完钻钻井液密度', value: 'ywWzzjymd' },
                { key: '固井前钻井液密度', value: 'tjZjymd' },
                { key: '固井前油气上窜速度', value: 'ywScsd' }
            ],
            //请求数据参数
            searchInformation: {
                page: '1',
                rows: '100',
                total: '0',
                jh: '',
                ywWzzjymd: '',
                tjZjymd: '',
                ywScsd: ''
            },
            //新增编辑表单是否显示
            dialogFormVisible: false,
            //新增编辑表单数据
            cemengtingForm: {
                id: '',
                jh: '',
                qk: '',
                jd: '',
                ywWzzjymd: '',
                ywScsd: '',
                ywZjymd: '',
                ywHkdtdlmd: '',
                ywLj100chsj: '',
                ywWj100chsj: '',
                ywSzhhkdlmd: ''
            },
            //判断是新增还是编辑按钮
            choose: ''//1为编辑，2为新增
        }
    },
    methods: {
        getGeologyData(searchInformation) {
            console.log("输出的数据searchInformation",searchInformation);
            this.$axios({
                url: this.urlAdress + "/model-factor3/queryCementingFactor",
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
                case 'ywWzzjymd':
                    this.searchInformation.ywWzzjymd = input
                    break
                case 'tjZjymd':
                    this.searchInformation.tjZjymd = input
                    break
                case 'ywScsd':
                    this.searchInformation.ywScsd = input
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
                ywWzzjymd: '',
                tjZjymd: '',
                ywScsd: ''
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
                this.cemengtingForm.id = row.id
                this.cemengtingForm.jh = row.jh
                this.cemengtingForm.qk = row.qk
                this.cemengtingForm.jd = row.jd
                this.cemengtingForm.ywWzzjymd = row.ywWzzjymd
                this.cemengtingForm.ywScsd = row.ywScsd
                this.cemengtingForm.ywZjymd = row.ywZjymd
                this.cemengtingForm.ywHkdtdlmd = row.ywHkdtdlmd
                this.cemengtingForm.ywLj100chsj = row.ywLj100chsj
                this.cemengtingForm.ywWj100chsj = row.ywWj100chsj
                this.cemengtingForm.ywSzhhkdlmd = row.ywSzhhkdlmd
            } else {
                this.title = '新增'
                this.choose = '2'
                
                this.cemengtingForm.jh = ''
                this.cemengtingForm.qk = ''
                this.cemengtingForm.jd = ''
                this.cemengtingForm.ywWzzjymd = ''
                this.cemengtingForm.ywScsd = ''
                this.cemengtingForm.ywZjymd = ''
                this.cemengtingForm.ywHkdtdlmd = ''
                this.cemengtingForm.ywLj100chsj = ''
                this.cemengtingForm.ywWj100chsj = ''
                this.cemengtingForm.ywSzhhkdlmd = ''
            }
        },
        // 关闭编辑、增加弹出框
        closeDialog() {
            this.dialogFormVisible = false
        },
        //保存方法
        submitForm() {
            if (this.choose = '1') {
                console.log("编辑的内容是", this.cemengtingForm);
                this.$axios({
                    url: this.urlAdress + "/model-factor3/updateModelFactor",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(this.cemengtingForm),
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