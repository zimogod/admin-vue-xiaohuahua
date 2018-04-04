import vue from 'vue'
import axios from 'axios'
import router from './router'

//是发送请求的配置，包括头部信息，是否跨域，baseURL等
const axiosIntance = axios.create({
	baseURL:'http://192.168.39.72:8080',
	headers:{
		//'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Content-Type': 'application/json',
		//请求头部的设置和后台有关，看后台给你返回的是什么数据
	},
	withCredentials:true,//此处为true时是跨域的确认，为false是取消跨域
	//crossDomain: true,此属性也是为了解决跨域的问题，
	timeout:5000 //timeout是响应超时的时间
});

//响应的配置如下
axiosInstance.interceptors.response.use(
	response => {
		if(response.data.errorCode === 10000){
			//执行的逻辑代码
		};

		return response;
	},
	error => {
		if(error){	
			//执行的逻辑代码
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;