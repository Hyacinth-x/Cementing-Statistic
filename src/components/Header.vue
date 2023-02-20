<template>
  <div style="display: flex;line-height: 60px;">
    <div style="margin-top:5px;">
      <i :class="icon" style="font-size: 25px;cursor: pointer;color: #fff;" @click="collapse"></i>
    </div>
    <div style="flex: 1;text-align: center; font-size: 20px; margin-left: 10px;">
      <span style="color: #fff;">固井信息统计平台</span>
    </div>
    <el-dropdown style="cursor: pointer;">
      <span style="color: #fff;">超级管理员</span>
        <i class="el-icon-arrow-down" style="margin-right: 15px; color: #fff;"></i>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toUser">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    icon:String
  },
  methods: {
    toUser() {
      this.$router.push('/index/PersonalCenter')
    },
    logout() {
      this.$confirm('您确定退出当前账号吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {   // 确定操作
        this.$message({
          type: 'success',
          message:'退出登录成功'
        })
        this.$router.replace("/login")

      }).catch(() => {  // 取消操作
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    collapse() {
      this.$emit('doCollapse')//向父组件传递信息
    },
    created() {
      this.$router.replace('/index/PersonalCenter')
    },
  }
}
</script>

<style>
</style>