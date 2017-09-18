<?php 
	//后端路由  根据url的不同得到不同结果
	header('content-type:text/html;charset=utf-8');
	
	//默认目录名称 
	$dir ='main';
	//默认文件名称
	$filename='index';
	//处理路径
	if(array_key_exists('PATH_INFO', $_SERVER)){
		//获取请求路径
		$path=$_SERVER['PATH_INFO'];//   /mian/index
		//去掉第一个斜杠
		$str=substr($path, 1);
		//字符串分割，和js中splite方法很像
		$ret=explode('/', $str);
		if(count($ret)==2){
			//路径有两层
			$dir=$ret[0];//覆盖目录
			$filename=$ret[1];//覆盖文件名称
		}else{
			//其他情况 全部跳转至登录页面
			$filename='login';
		}
	}
	include('./views/'.$dir.'/'.$filename.'.html');

 ?>	