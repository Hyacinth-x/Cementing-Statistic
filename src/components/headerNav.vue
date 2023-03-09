/**
* 左边菜单
*/ 
<template>
    <div class="nav">
        <span class="span1">固井信息统计</span>

        <el-menu  router background-color="#1989fa" text-color="#fff"
            :default-active="$route.path" unique-opened  mode="horizontal">
            <el-submenu v-for="menu in allmenu" :key="menu.menuid" :index="menu.menuname">
                <template slot="title">
                    <span>{{ menu.menuname }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="chmenu in menu.menus" :index="'/' + chmenu.url" :key="chmenu.menuid">
                        <span>{{ chmenu.menuname }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>

        <div>
            <span class="span2">超级管理员 |</span>
            <span class="span2">个人中心 |</span>
            <span class="span2">退出登录 |</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'headerNav',
    data() {
        return {
            allmenu: [
                {
                    menuid: 1,
                    icon: 'el-icon-s-order',
                    menuname: '影响因素与固井质量对比统计',
                    hasThird: null,
                    url: null,
                    menus: [
                        {
                            menuid: 11,
                            icon: '',
                            menuname: '地质因素统计',
                            hasThird: 'N',
                            url: 'index/statistics/Geology',
                            menus: null
                        },
                        {
                            menuid: 12,
                            icon: '',
                            menuname: '钻井因素统计',
                            hasThird: 'N',
                            url: 'index/statistics/Drilling',
                            menus: null
                        },
                        {
                            menuid: 13,
                            icon: '',
                            menuname: '固井因素统计',
                            hasThird: 'N',
                            url: 'index/statistics/Cementing',
                            menus: null
                        },
                        {
                            menuid: 15,
                            icon: '',
                            menuname: '固井质量统计',
                            hasThird: 'N',
                            url: 'index/statistics/Quality',
                            menus: null
                        }
                    ]
                },
                {
                    menuid: 2,
                    icon: 'el-icon-s-data',
                    menuname: '数据采集',
                    hasThird: null,
                    url: null,
                    menus: [
                        {
                            menuid: 21,
                            icon: '',
                            menuname: '建井基础数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        },
                        {
                            menuid: 22,
                            icon: '',
                            menuname: '过程数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        },
                        {
                            menuid: 23,
                            icon: '',
                            menuname: '实验检测数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        }
                    ]
                },
                {
                    menuid: 3,
                    icon: 'el-icon-pie-chart',
                    menuname: '主控因素智能分析',
                    hasThird: null,
                    url: null,
                    menus: [
                        {
                            menuid: 31,
                            icon: '',
                            menuname: '建井基础数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        },
                        {
                            menuid: 32,
                            icon: '',
                            menuname: '过程数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        },
                        {
                            menuid: 33,
                            icon: '',
                            menuname: '实验检测数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        }
                    ]
                },
                {
                    menuid: 4,
                    icon: 'el-icon-monitor',
                    menuname: '固井质量预测',
                    hasThird: null,
                    url: null,
                    menus: [
                        {
                            menuid: 41,
                            icon: '',
                            menuname: '建井基础数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        },
                        {
                            menuid: 42,
                            icon: '',
                            menuname: '过程数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        },
                        {
                            menuid: 43,
                            icon: '',
                            menuname: '实验检测数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        }
                    ]
                },
                {
                    menuid: 5,
                    icon: 'el-icon-setting',
                    menuname: '系统设置',
                    hasThird: null,
                    url: null,
                    menus: [
                        {
                            menuid: 51,
                            icon: '',
                            menuname: '建井基础数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        },
                        {
                            menuid: 52,
                            icon: '',
                            menuname: '过程数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        },
                        {
                            menuid: 53,
                            icon: '',
                            menuname: '实验检测数据',
                            hasThird: 'N',
                            url: '',
                            menus: null
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.nav{
    display: flex;
    justify-content:space-between;
    background-color: #1989fa; 
    width: 100%;
}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
    color: #fff;
}

span{
    color: #fff;
}
.span1{
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 25px;
    font-weight: bolder;
    margin-left: 20px;
}
.span2{
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 13px;
    margin-right: 10px;
}
</style>