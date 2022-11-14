import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/Welcome/First'
import { Forth } from '../components/Welcome/Forth'
import { Second } from '../components/Welcome/Second'
import { Third } from '../components/Welcome/Third'
import { Bar } from '../views/Bar'
import { Foo } from '../views/Foo'
import { Welcome } from '../views/Welcome'
export const routes:RouteRecordRaw[] = [
    {path:'/',component:Foo},
    {path:'/about',component:Bar},
    {
      path:'/welcome',
      component:Welcome,
      children:[
        {path:'1',component:First,},
        {path:'2',component:Second,},
        {path:'3',component:Third,},
        {path:'4',component:Forth,}
      ],
    }
]