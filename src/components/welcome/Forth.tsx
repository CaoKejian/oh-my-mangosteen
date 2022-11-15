import s from './Welcome.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { RouterLink } from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout'
export const Forth = ()=>{
  return(
    <WelcomeLayout>
      {{
        icon:()=> <img class={s.icon} src={cloud}></img>,
        title:()=> <h2>每日提醒<br></br>不遗漏每一笔账单</h2>,
        buttons:()=> <>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          <RouterLink to="/start" >进入</RouterLink>
          <RouterLink  to="/start" class={s.fake}  >跳过</RouterLink>
        </>
      }}
    </WelcomeLayout>
  )
  }
Forth.displayName="Forth"
