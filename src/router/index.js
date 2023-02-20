import VueRouter from "vue-router";
//引入组件
import Login from '../views/Login'
import Index from '../views/Index'
import PersonalCenter from '@/views/PersonalCenter'
import Geology from '@/views/statistics/Geology'
import Drilling from '@/views/statistics/Drilling'
import Cementing from '@/views/statistics/Cementing'
import Other from '@/views/statistics/Other'
import Quality from '@/views/statistics/Quality'

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
                path: 'PersonalCenter',
                name: '个人中心',
                meta: {
                    title: '个人中心'
                },
                component: PersonalCenter
            },
            // 地质因素统计
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
                path: 'statistics/Other',
                name: '其他因素统计',
                component: Other,
                meta: {
                    title: '其他因素统计'
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