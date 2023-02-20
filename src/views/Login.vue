<template>
    <div class="login">
        <el-header>
            <div class="wrapper">
                <div class="img_wrapper">
                    <img src="../assets/images/system.png" />
                </div>
                <div class="title">
                    <div class="big">固井信息统计平台</div>
                    <div class="small">CEMENTING INFORMATION STATISTIC PLATFORM</div>
                </div>
            </div>
        </el-header>
        <!-- 登录 -->
        <el-main>
            <div class="wrapper">
                <div class="title">ACCOUNT LOGIN</div>
                <el-form label-width="80px" :model="formLabelLogin">
                    <el-form-item label="账号">
                        <el-input placeholder="请输入账号" v-model="formLabelLogin.accountnumber" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input placeholder="请输入密码" v-model="formLabelLogin.password" type="password" clearable autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>

                <div class="btn">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="记住密码"></el-checkbox>
                        <el-checkbox label="记住账号"></el-checkbox>
                    </el-checkbox-group>
                    <el-button round style="width: 260px; margin: 8px 30px; " @click="login">登录</el-button>
                </div>

            </div>
        </el-main>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            checkList: ['记住密码', '记住账号'],
            formLabelLogin: {
                accountnumber: '',
                password: '',
            },
        };
    },
    methods: {
        login() {
            if (this.formLabelLogin.accountnumber == 'admin' && this.formLabelLogin.password=='123456') {
                this.$router.replace({
                    path: "/index/PersonalCenter",
                });
            }
        }
    }
}
</script>

<style>
.login {
    display: flex;
    width: 1000px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
}

.login .el-header {
    box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
    background: #fff;
    margin-top: 10px;
}

.el-header .wrapper {
    width: 50%;
    margin: 0 auto;
    margin-top: 0px;
    margin-top: 40px;
    text-align: center;
}

.wrapper .img_wrapper {
    display: inline-block;
}

.wrapper .img_wrapper img {
    width: 80px;
    height: 80px;
}

.wrapper .title {
    color: black;
    display: inline-block;
    vertical-align: top;
}

.wrapper .title .big {
    line-height: 60px;
    font-size: 28px;
    letter-spacing: 5px;
}

.wrapper .title .small {
    line-height: 15px;
    font-size: 10px;
    letter-spacing: 1px;
}

.login .el-main {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background: #333399;
}

.el-main .wrapper {
    position: relative;
    width: 40%;
    margin: 0 auto;
    margin-top: 0px;
    margin-top: 6px;
    background: rgba(245, 250, 250, 0.23);
    padding: 10px 5px;
    border-radius: 3px;
    text-align: center;
    color: #fff;
}

.el-main .wrapper .title {
    font-size: 22px;
    letter-spacing: 1px;
    margin: 35px 0;
    color: white;
}

.el-main .wrapper .el-form-item {
    width: 80%;
    margin-left: 1em;

}

.el-main .wrapper .el-form-item .el-form-item__label {
    color: white;
}

.el-main .wrapper .el-form-item .el-input__inner {
    height: 30px;
    line-height: 30px;
}

.el-main .wrapper .btn {
    text-align: center;
    margin-right: 60px;
    margin-bottom: 25px;
}

.el-main .wrapper .second {
    margin-right: 2em;
}

.el-main .wrapper .second {
    font-size: 14px;
    color: white;
}

.el-main .wrapper .btn {
    margin-left: 2em;
}
.el-main .wrapper .btn .el-checkbox__input.is-checked+.el-checkbox__label{
    color: white;
}
.el-main .wrapper .btn .el-checkbox__label span{
    color: #795548;
}
.el-main .wrapper .btn .el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: #03a9f4;
}
.el-checkbox{
    color: #96a5f9;
}
</style>