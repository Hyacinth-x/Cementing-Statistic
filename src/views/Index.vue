<template>
<el-container style="min-height: 100vh;">
    <!-- 侧边导航栏 -->
    <!-- box-shadow: rgb(0 21 41 /35%) 2px 0px 6px; -->
    <el-aside :width="aside_width"
        style="background-color: #333399;overflow-x: hidden;">
        <Leftnav :isCollapse="isCollapse" :icon="icon" :isShow="isShow"></Leftnav>
    </el-aside>
    
    <el-container>
        <!-- 头部 -->
        <el-header style="text-align: right; font-size: 12px;border-bottom: 1px solid #ccc;background-color: #333399;">
            <Header @doCollapse="doCollapse" :icon="icon"></Header>
        </el-header>
    
        <!-- 主体内容 -->
        <el-main style="padding: 10px;">
            <!-- 子路由 -->
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<style>
.el-header {
    color: #333;
    line-height: 60px;
}
.el-aside {
    color: #333;
}
</style>

<script>

import Header from '../components/Header.vue';
import Leftnav from '@/components/Leftnav';

export default {
    name: 'Index',
    components: {Header,Leftnav},
    data(){
        return {
            isCollapse: false,//是否折叠侧边导航栏
            aside_width: '270px',//导航栏宽度
            icon: 'el-icon-s-fold',//改变图标
            isShow:true//展示logo
        }
    },
    methods: {
        doCollapse() {
            this.isCollapse = !this.isCollapse
            this.isShow = !this.isShow
            if (!this.isCollapse) {//默认菜单栏展开
                this.aside_width = '270px'
                this.icon = 'el-icon-s-fold'
            }
            else {//导航栏关闭
                this.aside_width = '63px'
                this.icon = 'el-icon-s-unfold'
            }
        }
    }
}
</script>

<style>
    
</style>