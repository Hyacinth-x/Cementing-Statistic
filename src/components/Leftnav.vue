/**
* 左边菜单
*/ 
<template>
    <el-menu  :collapse="isCollapse"
    style="min-height: 100%;overflow: hidden;" 
    :collapse-transition="false" 
    router 
    :default-active="$route.path"
    unique-opened 
    background-color="#333399" 
    text-color="#fff"
    active-text-color="#ffd04b">

        <div class="logobox">
            <img src='../assets/images/log.png' style="height: 40px; margin: 5px auto;" />
        </div>

        <el-submenu v-for="menu in allmenu" :key="menu.menuid" :index="menu.menuname">
            <template slot="title">
                <i class="iconfont" :class="menu.icon"></i>
                <span>{{ menu.menuname }}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item v-for="chmenu in menu.menus" :index="'/' + chmenu.url" :key="chmenu.menuid">
                    <i class="iconfont" :class="chmenu.icon"></i>
                    <span>{{ chmenu.menuname }}</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
    name: 'Leftnav',
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
                            menuid: 14,
                            icon: '',
                            menuname: '其他因素统计',
                            hasThird: 'N',
                            url: 'index/statistics/Other',
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
    },
    props: {
        isCollapse: Boolean,
    },
}
</script>
<style scoped>
.logobox {
    height: 40px;
    line-height: 40px;
    color: #9d9d9d;
    font-size: 20px;
    text-align: center;
}

.iconfont {
    padding-right: 5px;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-menu-item-group__title {
    padding: 0px;
}

.el-menu {
    border: none;
}
</style>