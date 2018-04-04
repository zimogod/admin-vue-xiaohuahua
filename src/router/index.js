import Vue from 'vue';
import Router from 'vue-router';
import Admin from '../admin';
import Index from '../client/index';
import About from '../client/about';

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      world:'默认页',
      component: Admin
    },
    {
    	path:'/index',
    	name:'index',
      world:'首页',
    	component:Index
    },
    {
      path:'/about',
      name:'about',
      world:'关于页',
      component:About
    }
  ]
})

//next 是一个回调函数，如果没有执行from,to 则继续回调
//路由拦截，进入路由前进行拦截，需要的判断
// router.beforeEach((from,to,next)=>{
//   if(userName){
//     this.$router.push({
//       path:'/admin',
//       name:'admin'
//     })
//   }else if(userName == 'undefined'){
//     this.userName = JSON.parse(localStornge(users))
//   }else{
//     next();
//   }
// });
export default router;