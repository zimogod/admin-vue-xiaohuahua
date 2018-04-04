<template>
  <div id="admin">
  	<div class="container">
      <div class="navs" v-for="(item,index) in routes"> 
        <router-link :to="{ path:item.path}" :key="item.id">{{ item.world }}</router-link>
      </div> 
    </div>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data(){
  	return {
      show:false,
      routes:this.$router.options.routes
  	}
  },
  methods:{
  	// goIndex:function(){

  	// }
  	goIndex(){
        this.$router.push({
          path:'/index',
          name:'index'
        })
  	}
  },
  mounted(){
  	//自执行函数
  }
}
</script>

<style>
#admin {
  width:100%;
  height:100%;
  background:green;
  display: flex;
  justify-content: flex-start;
}
#admin .container{
  width:150px;
  height:240px;
  display: flex;
  background: yellow;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}
#admin .zimo{
	width:100%;
	height:80px;
	background:yellow;
}
#admin .navs{
  width:150px;
  height:80px;
  text-align: center;
  line-height: 80px;
}
#admin .navs:hover{
  background:#ccc;
}
#admin .navs a{
  display: block;
  width: 100%;
  height:100%;
  color: green;
  text-decoration: none;
}
section{
  height:240px;
  flex: 1;
  background: pink;
}
</style>
