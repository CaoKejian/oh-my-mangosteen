import { createApp } from 'vue'
import { App } from './App'
import { Bar } from './views/Bar'
import { Foo } from './views/Foo'
import {createRouter,createWebHashHistory} from 'vue-router'

// 创建路由
const routes = [
    {path:'/',component:Foo},
    {path:'/about',component:Bar},
]
// 创建router hash模式
const router =createRouter({
    history:createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
