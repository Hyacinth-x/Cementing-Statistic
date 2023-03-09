import VueRouter from "vue-router";
//引入组件
import Login from '../views/Login'
import Index from '../views/Index'
import PersonalCenter from '@/views/PersonalCenter'
import Geology from '@/views/statistics/Geology'
import Drilling from '@/views/statistics/Drilling'
import Cementing from '@/views/statistics/Cementing'
import Quality from '@/views/statistics/Quality'
import Home from '@/views/Home'
import headerNav from '../components/headerNav'
import Basic from '@/views/acquisition/Basic'
import Experiments from '@/views/acquisition/Experiments'
import Process from '@/views/acquisition/Process'

//配置路由
const routes = [{
        path: '/',
        name: '',
        component: Login
    },
    {
        path: '/login',
        name: '登录',
        hidden: true,
        component: Login
    },
    {
        path: '/index',
        name: '首页',
        component: Index,
        children: [{
                path: 'Home',
                name: '首页',
                meta: {
                    title: '首页'
                },
                component: Home
            },
            {
                path: 'PersonalCenter',
                name: '个人中心',
                meta: {
                    title: '个人中心'
                },
                component: PersonalCenter
            },
            // 影响因素
            {
                path: 'statistics/Geology',
                name: '地质因素统计',
                component: Geology,
                meta: {
                    title: '地质因素统计'
                }
            },
            {
                path: 'statistics/Drilling',
                name: '钻井因素统计',
                component: Drilling,
                meta: {
                    title: '钻井因素统计'
                }
            },
            {
                path: 'statistics/Cementing',
                name: '固井因素统计',
                component: Cementing,
                meta: {
                    title: '固井因素统计'
                }
            },
            {
                path: 'statistics/Quality',
                name: '固井质量统计',
                component: Quality,
                meta: {
                    title: '固井质量统计'
                }
            },
            //数据采集
            {
                path: 'acquisition/Basic',
                name: '建井基础数据统计',
                component: Basic,
                meta: {
                    title: '建井基础数据统计'
                }
            },
            {
                path: 'acquisition/Process',
                name: '过程数据统计',
                component: Process,
                meta: {
                    title: '过程数据统计'
                }
            },
            {
                path: 'acquisition/Experiments',
                name: '实验检测数据统计',
                component: Experiments,
                meta: {
                    title: '实验检测数据统计'
                }
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default router