<template>
<div>
    <h2 style="text-align: center;">个人中心</h2>

    <el-descriptions title="用户信息" border>
        <el-descriptions-item label="用户名">{{this.personalInformation.username}}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{this.personalInformation.email}}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{this.personalInformation.mobile}}</el-descriptions-item>
        <el-descriptions-item label="昵称">{{this.personalInformation.nickname}}</el-descriptions-item>
        <el-descriptions-item label="联系电话">{{ this.personalInformation.phone }}</el-descriptions-item>
        <el-descriptions-item label="街道地址">{{ this.personalInformation.address }}</el-descriptions-item>
        <el-descriptions-item label="个人简介">{{ this.personalInformation.profile }}</el-descriptions-item>
        <el-descriptions-item label="角色ID">roleId</el-descriptions-item>
        <el-descriptions-item label="所属机构ID">orgId</el-descriptions-item>
        <el-descriptions-item label="状态">
            <el-tag size="small">{{ getStatus(this.personalInformation.status) }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="创建时间">{{ this.$moment(this.personalInformation.createTime).format('YYYY-MM-DD') }}</el-descriptions-item>
        <el-descriptions-item label="修改时间">{{ this.$moment(this.personalInformation.updateTime).format('YYYY-MM-DD') }}</el-descriptions-item>

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
            formLabelWidth: '100px',
            personalInformation: ''
        };
    },
    methods: {
        change() {
            this.dialogFormVisible = false
            this.$message({
                type: 'success',
                message: '修改密码成功'
            })
        },
        getInformation() {
            this.personalInformation = JSON.parse(sessionStorage.getItem("userAllInfo"))
            console.log("获取信息@@@@@@@",this.personalInformation);
        },
        getStatus(status) {
            if (status === 1) {
                return '正常'
            } else if (status === 0) {
                return '禁用'
            }
        },
    },
    mounted(){
        this.getInformation();
    }
}
</script>

<style>

</style>