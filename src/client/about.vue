<template>
  <div id="about">
  	关于页面
  	<ul>
  	  <li @click="alertNum">性别：{{ names.sex }}</li>
  	  ----------------------------
  	  <div @click="add">加</div>
      <li>id：{{ names.id }}</li>
      <div @click="reduce">减</div>
      ----------------------------
      <li>性别：{{ names.sex }}</li>
      ----------------------------
      <li>{{ num }}</li>
      <!-- <button @click="getCity">获取数据</button> -->
      <div>{{ $store.state.city }}</div>
    </ul>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
  name: 'about',
  data(){
  	return {
  		num:1,
  		// city:{}
  	}
  },
  methods:{
  	...mapMutations(['add','reduce']),
  	alertNum(){
  		alert(11);
  	},
  	getCity(){
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
  },
  //第一种辅助函数的写法，但是一般不使用此种写法
  // computed:mapState(['names']),
  computed:{
  	...mapState([
  		'names'
  		])
  },

  mounted(){
  	//自治性函数
  	this.getCity();
  }
}
</script>

<style>
#about {
  width:100%;
  height:100%;
  background:yellow;
}
</style>
