import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	names:{
		id:1,
		sex:'男'
	},
	city:{}
};
const mutations = {
	add(state){
		this.state.names.id += 1
	},
	reduce(state){
		this.state.names.id -= 1
	}
};
const actions = {
	getnum(){
		this.$http.get('../../static/num.json')
  		.then((response)=>{
  			if(response.data.errorCode ==1){
  				this.$store.state.city = response.data.name.city;
  			}else{
  				console.log('请求失败')
  			}
  		})
  		.catch((error)=>{

  		})
	}
};
const getters = {
	
};
const setters = {
	
};



export default new Vuex.Store({
	state,//专门存储数据的仓库
	actions,//用户触发的行为操作
	mutations,//只能在此处修改state的内容
	getters,//计算过滤属性
	setters//
});