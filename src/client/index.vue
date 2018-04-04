<template>
  <div id="index">
  	我是首页
  	<div>{{ msg }}</div>
    ---------------------
    <ul>
      <li>id：{{ $store.state.names.id }}</li>
      <li>性别：{{ $store.state.names.sex }}</li>
      <li>从vuex的state中拿city数据:{{ $store.state.city }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
  	return {
  		msg:'我是大神'
  	}
  },
  mounted(){
    
  }

}
</script>

<style>
#index {
  width:100%;
  height:100%;
  background:red;
  color: #fff;
}
</style>
