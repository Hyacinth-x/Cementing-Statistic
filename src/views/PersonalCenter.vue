<template>
<div>
    <h2 style="text-align: center;">个人中心</h2>
    <el-descriptions title="用户信息" border>
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
            <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
    <el-button type="danger" @click="dialogFormVisible = true">修改密码</el-button>

    <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="当前密码" :label-width="formLabelWidth">
                <el-input v-model="form.currentPwd" autocomplete="off" type="password" clearable></el-input>
            </el-form-item>
            <el-form-item label="修改密码" :label-width="formLabelWidth">
                <el-input v-model="form.changePwd" autocomplete="off" type="password" clearable></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="change">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: 'PersonalCenter',
    data() {
        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                currentPwd: '',
                changePwd:''
            },
            formLabelWidth: '100px'
        };
    },
    methods: {
        change() {
            this.dialogFormVisible = false
            this.$message({
                type: 'success',
                message: '修改密码成功'
            })
        }
    }
}
</script>

<style>

</style>